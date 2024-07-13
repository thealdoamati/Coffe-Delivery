import { useContext } from 'react'
import { CoffeType } from '../../assets/CoffeList'
import { CartContext } from '../../context/CartContext'

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
    <div>
      <img src={coffe.image} alt="" />
      <h3>{coffe.name}</h3>
      <p>{coffe.description}</p>
      {/* <div>{coffe.type}</div> */}
      <h3>{coffe.price}</h3>
      <div>
        <button onClick={decreaseCart}>-</button>
        <div>{coffe.quantity}</div>
        <button onClick={increaseCart}>+</button>
      </div>
    </div>
  )
}
