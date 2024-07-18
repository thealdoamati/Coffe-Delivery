import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeesForSale, CoffeType, UserAddress } from '../utils/CoffeList'
import { AddressFormTypes } from '../utils/Types'

interface BuyCoffeData {
  id: string
  userAddress: UserAddress
  coffe: CoffeType[]
  paymentMethod: string
}

interface CreateCartType {
  increaseSelectedCoffeQuantity: (id: string) => void
  decreaseSelectedCoffeQuantity: (id: string) => void
  increaseUpdateCoffeQuantity: (id: string) => void
  decreaseUpdateCoffeQuantity: (id: string) => void
  removeSelectedCoffeQuantity: (id: string) => void
  coffeCaracteristics: CoffeType[]
  sumOfCoffesOnCart: number
  sumOfPricesOfCoffesOnCart: number | undefined
  createNewCoffe: (data: BuyCoffeData) => void
  coffeOrder: object
  selectedCoffes: CoffeType[] | undefined
  setSelectedCoffes: any
  handleUpdatedCoffes: () => void
  setSelectedPayment: Dispatch<SetStateAction<string>>
  selectedPayment: string
  checkout: (data: AddressFormTypes) => void
}

export const CartContext = createContext({} as CreateCartType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeCaracteristics, setCoffeCaracteristics] = useState(coffeesForSale)
  const [coffeOrder, setCoffeOrder] = useState({})
  const [selectedCoffes, setSelectedCoffes] = useState<CoffeType[]>()
  const [selectedPayment, setSelectedPayment] = useState('')
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [], orders: [] },
    (cartState) => {
      const storedAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )
      if (storedAsJSON) {
        return JSON.parse(storedAsJSON)
      }
      return cartState
    },
  )

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

  function isNumberLessThanZeroRemover(coffe: CoffeType) {
    if (coffe.quantity > 0) {
      return { ...coffe, quantity: coffe.quantity - coffe.quantity }
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

  function increaseSelectedCoffeQuantity(id: string) {
    if (selectedCoffes) {
      setSelectedCoffes((prevState) =>
        prevState?.map((coffe) =>
          coffe.id === id ? { ...coffe, quantity: coffe.quantity + 1 } : coffe,
        ),
      )
    }
  }

  function decreaseSelectedCoffeQuantity(id: string) {
    if (selectedCoffes) {
      setCoffeCaracteristics((prevState) =>
        prevState.map((coffe) =>
          coffe.id === id ? isNumberLessThanZero(coffe) : coffe,
        ),
      )
    }
  }

  function removeSelectedCoffeQuantity(id: string) {
    if (selectedCoffes) {
      setCoffeCaracteristics((prevState) =>
        prevState.map((coffe) =>
          coffe.id === id ? isNumberLessThanZeroRemover(coffe) : coffe,
        ),
      )
    }
  }

  const sumOfCoffesOnCart = coffeCaracteristics.reduce(function (a, b) {
    return a + b.quantity
  }, 0)

  const sumOfPricesOfCoffesOnCart = selectedCoffes?.reduce(function (
    total,
    coffe,
  ) {
    return total + coffe.quantity * coffe.price
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

  function createNewCoffe(data: BuyCoffeData) {
    const id = String(new Date().getTime())
    const newOrder = {
      id,
      userAddress: data.userAddress,
      coffe: data.coffe,
      paymentMethod: data.paymentMethod,
    }

    setCoffeOrder(newOrder)
  }

  useEffect(() => {
    const cartJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        coffeCaracteristics,
        decreaseUpdateCoffeQuantity,
        increaseUpdateCoffeQuantity,
        increaseSelectedCoffeQuantity,
        decreaseSelectedCoffeQuantity,
        removeSelectedCoffeQuantity,
        sumOfCoffesOnCart,
        sumOfPricesOfCoffesOnCart,
        createNewCoffe,
        coffeOrder,
        setSelectedCoffes,
        selectedCoffes,
        handleUpdatedCoffes,
        setSelectedPayment,
        selectedPayment,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
