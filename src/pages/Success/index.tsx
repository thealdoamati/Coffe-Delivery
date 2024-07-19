import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'
import { Container, Header, Icon, InfoBox, InfoItem } from './styles'

export function Success() {
  const { orders } = useContext(CartContext)

  // Pego o id da order no URL
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  return (
    <Container>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Header>
      <InfoBox>
        <InfoItem>
          <Icon className="location-icon">📍</Icon>
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {orderInfo?.Rua}, {orderInfo?.Número}
              </strong>
            </p>
            <p>
              {orderInfo?.Bairro} - {orderInfo?.Cidade}, {orderInfo?.UF}
            </p>
          </div>
        </InfoItem>
        <InfoItem>
          <Icon className="time-icon">⏰</Icon>
          <div>
            <p>Previsão de entrega</p>
            <p>20 min - 30 min </p>
          </div>
        </InfoItem>
        <InfoItem>
          <Icon className="payment-icon">💳</Icon>
          <div>
            <p>Pagamento na entrega</p>
            <p>{orderInfo?.PaymentType}</p>
          </div>
        </InfoItem>
      </InfoBox>
    </Container>
  )
}
