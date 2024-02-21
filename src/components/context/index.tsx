import { createContext, useEffect, useState } from 'react'

import { Product } from '@/types'

type ContextType = {
  products: Product[]
  cart: number[]
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
}

export const Context = createContext({} as ContextType)

type Props = { children: React.ReactNode }

export const ContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<number[]>([])

  useEffect(() => {
    const getProducts = async () =>
      await fetch('https://fakestoreapi.com/products/')
        .then((resp) => resp.json())
        .then((resp) => setProducts(resp))

    getProducts()
  }, [])

  useEffect(() => {
    const localCart = localStorage.getItem('fakeStoreCart')
    const cart = localCart
      ? JSON.parse(localCart).map((el: string) => Number(el))
      : []
    setCart(cart)
  }, [])

  const updateLocalStorage = (cart: number[]) => {
    cart.length
      ? localStorage.setItem('fakeStoreCart', JSON.stringify(cart))
      : localStorage.removeItem('fakeStoreCart')
  }

  const addToCart = (id: number) => {
    const newCart = [...cart, id]
    setCart(newCart)
    updateLocalStorage(newCart)
  }

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((product: number) => product !== id)
    setCart(newCart)
    updateLocalStorage(newCart)
  }

  return (
    <Context.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  )
}
