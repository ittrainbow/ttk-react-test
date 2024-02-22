import { CartStore } from '@/types/CartStore'
import { create } from 'zustand'

const localCart = localStorage.getItem('fakeStoreCart')

const initialCart = localCart
  ? JSON.parse(localCart).map((el: number) => Number(el))
  : []

const setLocalCart = (cart: number[]) => {
  cart.length
    ? localStorage.setItem('fakeStoreCart', JSON.stringify(cart))
    : localStorage.removeItem('fakeStoreCart')
}

export const useCart = create<CartStore>((set) => ({
  cart: initialCart,

  addToCart: (id: number) =>
    set((store) => {
      const newCart = [...store.cart, id]
      setLocalCart(newCart)
      return {
        ...store,
        cart: newCart,
      }
    }),

  removeFromCart: (id: number) =>
    set((store) => {
      const newCart = store.cart.filter((el: number) => el !== id)
      setLocalCart(newCart)
      return {
        ...store,
        cart: newCart,
      }
    }),
}))
