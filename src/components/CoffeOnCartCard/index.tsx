import { Trash } from 'phosphor-react'
import { CoffeType } from '../../utils/CoffeList'
import {
  CardContainer,
  CoffeInfo,
  Price,
  ActionsContainer,
  QuantityContainer,
  RemoveButton,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

interface CoffeOnCartCardProps {
  coffeCart: CoffeType
}

export function CoffeOnCartCard({ coffeCart }: CoffeOnCartCardProps) {
  console.log('coffeCart on Cart', coffeCart)
  const {
    increaseSelectedCoffeQuantity,
    decreaseSelectedCoffeQuantity,
    removeSelectedCoffeQuantity,
  } = useContext(CartContext)

  function increaseCart() {
    increaseSelectedCoffeQuantity(coffeCart.id)
  }

  function decreaseCart() {
    decreaseSelectedCoffeQuantity(coffeCart.id)
  }

  function removeCoffeOnCart() {
    removeSelectedCoffeQuantity(coffeCart.id)
  }

  return (
    <CardContainer>
      <img src={coffeCart.image} alt={coffeCart.name} />
      <CoffeInfo>
        <h3>{coffeCart.name}</h3>
        <Price>R$ {coffeCart.price.toFixed(2)}</Price>
        <ActionsContainer>
          <QuantityContainer>
            <button onClick={decreaseCart}>-</button>
            <div>{coffeCart.quantity}</div>
            <button onClick={increaseCart}>+</button>
          </QuantityContainer>
          <RemoveButton onClick={removeCoffeOnCart}>
            <Trash size={24} weight="fill" />
            Remover
          </RemoveButton>
        </ActionsContainer>
      </CoffeInfo>
    </CardContainer>
  )
}
