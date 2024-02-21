// import { products } from '@/data'
import clsx from 'clsx'
import { ProductCard } from './ProductCard'
import { useSelector } from 'react-redux'
import { selectProducts } from '@/redux/selectors'
import { Loader } from '@/pages/Loader/Loader'

type Props = { className?: string }

export function ProductList({ className }: Props) {
  const products = useSelector(selectProducts)

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
