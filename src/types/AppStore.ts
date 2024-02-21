import { Product } from '@/types'

export type AppStore = {
  products: Product[]
  cart: number[]
  error: string | null
}
