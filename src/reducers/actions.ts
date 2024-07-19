import { NavigateFunction } from 'react-router-dom'
import { AddressFormData } from '../pages/Cart'

export enum ActionTypes {
  // ADD_NEW_COFFE = 'ADD_NEW_COFFE',
  // REMOVE_ITEM = 'REMOVE_ITEM',
  // INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  // DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions = {
  type: ActionTypes.CHECKOUT_CART
  payload: {
    order: AddressFormData
    callback: NavigateFunction
  }
}

export function checkoutCartAction(
  order: AddressFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      // Função para navegar entre rotas
      callback,
    },
  } satisfies Actions
}
