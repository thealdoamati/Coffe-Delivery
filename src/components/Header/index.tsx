import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { HeaderStyle } from './styles'

export function Header() {
  const { sumOfCoffesOnCart } = useContext(CartContext)
  return (
    <HeaderStyle>
      <div>Logo</div>
      <div>
        <div>Location</div>
        <div>Cart {sumOfCoffesOnCart}</div>
      </div>
    </HeaderStyle>
  )
}
