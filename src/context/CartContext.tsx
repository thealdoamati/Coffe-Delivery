import { createContext, ReactNode, useState } from 'react'
import { coffeesForSale, CoffeType } from '../assets/CoffeList'

interface CreateCartType {
  increaseUpdateCoffeQuantity: (id: string) => void
  decreaseUpdateCoffeQuantity: (id: string) => void
  coffeCaracteristics: CoffeType[]
  sumOfCoffesOnCart: number
}

export const CartContext = createContext({} as CreateCartType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeCaracteristics, setCoffeCaracteristics] = useState(coffeesForSale)

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

  return (
    <CartContext.Provider
      value={{
        coffeCaracteristics,
        decreaseUpdateCoffeQuantity,
        increaseUpdateCoffeQuantity,
        sumOfCoffesOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
