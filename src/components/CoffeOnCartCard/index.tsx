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

interface CoffeOnCartCardProps {
  coffeCart: CoffeType
}

export function CoffeOnCartCard({ coffeCart }: CoffeOnCartCardProps) {
  console.log('coffeCart on Cart', coffeCart)
  return (
    <CardContainer>
      <img src={coffeCart.image} alt={coffeCart.name} />
      <CoffeInfo>
        <h3>{coffeCart.name}</h3>
        <Price>R$ {coffeCart.price.toFixed(2)}</Price>
        <ActionsContainer>
          <QuantityContainer>
            <button>-</button>
            <div>{coffeCart.quantity}</div>
            <button>+</button>
          </QuantityContainer>
          <RemoveButton>
            <Trash size={24} weight="fill" />
            Remover
          </RemoveButton>
        </ActionsContainer>
      </CoffeInfo>
    </CardContainer>
  )
}
