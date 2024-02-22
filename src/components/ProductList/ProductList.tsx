import clsx from 'clsx'
import { ProductCard } from './ProductCard'
import { Loader } from '@/pages/Loader/Loader'
import { useQueryState } from '../query'

type Props = { className?: string }

export function ProductList({ className }: Props) {
  const { isLoading, data } = useQueryState()

  if (isLoading) return <Loader />

  return (
    <ul
      className={clsx(
        'grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]',
        className
      )}
    >
      {data?.map((product) => {
        return (
          <li key={product.id} className="grid">
            <ProductCard product={product} />
          </li>
        )
      })}
    </ul>
  )
}
