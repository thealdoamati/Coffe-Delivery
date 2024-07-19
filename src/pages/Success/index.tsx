import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useContext(CartContext)

  // Pego o id da order no URL
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))
  return (
    <div>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <div>
        <div>
          <p>
            Entrega em {orderInfo?.Rua},{orderInfo?.Número}
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
        </div>
        <div>
          <p>Previsão de entrega</p>
          <p>20 min - 30 min </p>
        </div>
        <div>
          <p>Pagamento na entrega</p>
          <p>Cartão de Crédito</p>
        </div>
      </div>
    </div>
  )
}
