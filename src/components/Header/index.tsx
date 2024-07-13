import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { HeaderStyle, Location, Cart, CartCount } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo/Logo.svg'

export function Header() {
  const { sumOfCoffesOnCart } = useContext(CartContext)

  return (
    <HeaderStyle>
      <img src={Logo} alt="" />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Location>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart size={24} weight="fill" />
          <CartCount>{sumOfCoffesOnCart}</CartCount>
        </Cart>
      </div>
    </HeaderStyle>
  )
}
