import { useContext } from 'react'
import { CoffeCard } from '../../components/CoffeCard'
import { CartContext } from '../../context/CartContext'
import { CoffeGrid, HomeContainer } from './styles'

export function Home() {
  const { coffeCaracteristics } = useContext(CartContext)

  return (
    <HomeContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <span>Compra simples e segura</span>
            <span>Embalagem mantém o café intacto</span>
            <span>Entrega rápida e rastreada</span>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
        <div>Foto café</div>
      </div>
      <div>
        <h3>Nossos cafés</h3>
        <CoffeGrid>
          {coffeCaracteristics.map((coffe) => {
            return <CoffeCard key={coffe.id} coffe={coffe} />
          })}
        </CoffeGrid>
      </div>
    </HomeContainer>
  )
}
