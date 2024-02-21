import clsx from 'clsx'
import { ProductCard } from './ProductCard'
import { Loader } from '@/pages/Loader/Loader'
import { useContext } from 'react'
import { Context } from '../context'

type Props = { className?: string }

export function ProductList({ className }: Props) {
  const { products } = useContext(Context)

  if (!products.length) return <Loader />

  return (
    <ul
      className={clsx(
        'grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]',
        className
      )}
    >
      {products?.map((product) => {
        return (
          <li key={product.id} className="grid">
            <ProductCard product={product} />
          </li>
        )
      })}
    </ul>
  )
}
