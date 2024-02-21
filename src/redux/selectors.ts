import { Store } from '@/types'

export const selectProducts = (store: Store) => store.app.products
export const selectCart = (store: Store) => store.app.cart
