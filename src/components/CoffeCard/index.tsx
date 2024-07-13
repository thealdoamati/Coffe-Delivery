import { useContext } from 'react'
import { CoffeType } from '../../assets/CoffeList'
import { CartContext } from '../../context/CartContext'
import {
  AddButton,
  Buttons,
  CartButton,
  CoffeStyle,
  PriceTag,
  TypeName,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CoffeCardProps {
  coffe: CoffeType
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const { increaseUpdateCoffeQuantity, decreaseUpdateCoffeQuantity } =
    useContext(CartContext)

  // Abaixo seria se eu não usasse contexto
  // const [coffeCaracteristics, setCoffeCaracteristics] = useState(coffe)

  //   function increaseUpdateCoffeQuantity() {
  //     setCoffeCaracteristics((prevState) => ({
  //       ...prevState,
  //       quantity: prevState.quantity + 1,
  //     }))
  //   }

  //   function decreaseUpdateCoffeQuantity() {
  //     if (coffeCaracteristics.quantity > 0) {
  //       setCoffeCaracteristics((prevState) => ({
  //         ...prevState,
  //         quantity: prevState.quantity - 1,
  //       }))
  //     } else {
  //       setCoffeCaracteristics((prevState) => ({
  //         ...prevState,
  //         quantity: 0,
  //       }))
  //     }
  //   }

  function increaseCart() {
    increaseUpdateCoffeQuantity(coffe.id)
  }

  function decreaseCart() {
    decreaseUpdateCoffeQuantity(coffe.id)
  }

  return (
    <CoffeStyle>
      <img src={coffe.image} alt={coffe.name} />
      {coffe.type.map((type) => {
        return <TypeName key={type.typeName}>{type.typeName}</TypeName>
      })}
      <h3>{coffe.name}</h3>
      <p>{coffe.description}</p>
      <div>
        <PriceTag>
          <span>R$</span> {coffe.price}
        </PriceTag>
        <div>
          <AddButton>
            <Buttons onClick={decreaseCart}>-</Buttons>
            <div>{coffe.quantity}</div>
            <Buttons onClick={increaseCart}>+</Buttons>
          </AddButton>
          <CartButton>
            <ShoppingCart size={24} weight="fill" />
          </CartButton>
        </div>
      </div>
    </CoffeStyle>
  )
}
