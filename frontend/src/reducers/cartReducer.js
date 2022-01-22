import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants'

export const CartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload
      const itemExists = state.cartItems.find((p) => p.product === item.product)
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    case REMOVE_FROM_CART:
      const resItems = state.cartItems.filter(
        (p) => p.product !== action.payload
      )
      return { ...state, cartItems: resItems }
    case SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload }
    case SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload }
    default:
      return state
  }
}
