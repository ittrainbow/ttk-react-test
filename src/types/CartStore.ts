export type CartStore = {
  cart: number[]
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
}
