import { produce } from 'immer'
import { AddressFormData } from '../pages/Cart'
import { Actions, ActionTypes } from './actions'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends AddressFormData {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.CHECKOUT_CART: {
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })
    }
    default:
      return state
  }
}
