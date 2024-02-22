import { Product } from '.'

export type ContextType = {
  products: Product[]
  cart: number[]
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
}
