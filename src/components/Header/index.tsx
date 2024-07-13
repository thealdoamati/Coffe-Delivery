import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { sumOfCoffesOnCart } = useContext(CartContext)
  return (
    <>
      <div>Logo</div>
      <div>Location</div>
      <div>Cart {sumOfCoffesOnCart}</div>
    </>
  )
}
