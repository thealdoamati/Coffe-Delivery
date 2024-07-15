import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { coffeesForSale, CoffeType, UserAddress } from '../utils/CoffeList'

interface BuyCoffeData {
  id: string
  userAddress: UserAddress
  coffe: CoffeType[]
  paymentMethod: string
}

interface CreateCartType {
  increaseUpdateCoffeQuantity: (id: string) => void
  decreaseUpdateCoffeQuantity: (id: string) => void
  coffeCaracteristics: CoffeType[]
  sumOfCoffesOnCart: number
  handleBuyCoffe: (data: BuyCoffeData) => void
  coffeOrder: object
  selectedCoffes: CoffeType[] | undefined
  setSelectedCoffes: any
  handleUpdatedCoffes: () => void
}

export const CartContext = createContext({} as CreateCartType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeCaracteristics, setCoffeCaracteristics] = useState(coffeesForSale)
  const [coffeOrder, setCoffeOrder] = useState({})
  const [selectedCoffes, setSelectedCoffes] = useState<CoffeType[]>()

  function increaseUpdateCoffeQuantity(id: string) {
    setCoffeCaracteristics((prevState) =>
      prevState.map((coffe) =>
        coffe.id === id ? { ...coffe, quantity: coffe.quantity + 1 } : coffe,
      ),
    )
  }

  function isNumberLessThanZero(coffe: CoffeType) {
    if (coffe.quantity > 0) {
      return { ...coffe, quantity: coffe.quantity - 1 }
    } else {
      return { ...coffe, quantity: 0 }
    }
  }

  function decreaseUpdateCoffeQuantity(id: string) {
    setCoffeCaracteristics((prevState) =>
      prevState.map((coffe) =>
        coffe.id === id ? isNumberLessThanZero(coffe) : coffe,
      ),
    )
  }

  const sumOfCoffesOnCart = coffeCaracteristics.reduce(function (a, b) {
    return a + b.quantity
  }, 0)

  // Eu usei o useCallback aqui, pois como preciso criar um useEffect da função, ia gerar um loop
  const handleUpdatedCoffes = useCallback(() => {
    setSelectedCoffes(
      coffeCaracteristics.filter((coffes) => coffes.quantity > 0),
    )
  }, [coffeCaracteristics])

  useEffect(() => {
    handleUpdatedCoffes()
  }, [coffeCaracteristics, handleUpdatedCoffes])

  function handleBuyCoffe(data: BuyCoffeData) {
    const id = String(new Date().getTime())
    const newOrder = {
      id,
      userAddress: data.userAddress,
      coffe: data.coffe,
      paymentMethod: data.paymentMethod,
    }
    setCoffeOrder(newOrder)
  }

  return (
    <CartContext.Provider
      value={{
        coffeCaracteristics,
        decreaseUpdateCoffeQuantity,
        increaseUpdateCoffeQuantity,
        sumOfCoffesOnCart,
        handleBuyCoffe,
        coffeOrder,
        setSelectedCoffes,
        selectedCoffes,
        handleUpdatedCoffes,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
