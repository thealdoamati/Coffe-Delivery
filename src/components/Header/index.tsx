import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { HeaderStyle, Location, Cart, CartCount } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo/Logo.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { sumOfCoffesOnCart } = useContext(CartContext)
  const navigate = useNavigate()

  function routeToCart() {
    const path = '/Cart'
    navigate(path)
  }

  return (
    <HeaderStyle>
      <img src={Logo} alt="" />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Location>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart onClick={routeToCart}>
          <ShoppingCart size={24} weight="fill" />
          <CartCount>{sumOfCoffesOnCart}</CartCount>
        </Cart>
      </div>
    </HeaderStyle>
  )
}
