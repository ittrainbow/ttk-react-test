import { AppStore } from '@/types'
import { ADD_TO_CART, ERROR, INIT_SUCCESS, REMOVE_FROM_CART } from '../types'

const initialState: AppStore = {
  products: [],
  cart: [],
  error: '',
}

export const appReducer = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case INIT_SUCCESS:
      const { products, cart } = payload
      return {
        ...state,
        products,
        cart,
      }

    case ADD_TO_CART: {
      const updatedCart = structuredClone(state.cart)
      updatedCart.push(payload)
      return {
        ...state,
        cart: updatedCart,
      }
    }

    case REMOVE_FROM_CART: {
      const updatedCart = structuredClone(state.cart)
      updatedCart.filter((product) => product !== payload)
      return {
        ...state,
        cart: updatedCart.filter((product) => product !== payload),
      }
    }

    case ERROR:
      return {
        ...state,
        error: payload,
      }

    default:
      return state
  }
}
