import { Product } from '@/types'
import { TrashIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useContext } from 'react'
import { Context } from '../context'

type Props = {
  product: Product
  className?: string
}

export function PopoverProduct({ product, className }: Props) {
  const { id } = product
  const { removeFromCart } = useContext(Context)

  return (
    <article className={clsx('flex items-center flex-wrap gap-4', className)}>
      <div className="relative grid flex-shrink-0 w-12 h-12 bg-white rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="absolute object-contain w-full h-full"
        />
      </div>
      <div className="grid flex-1">
        <h3 className="line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-emerald-500">$</span>
          <span className="text-lg font-bold text-emerald-500">
            {product.price}
          </span>
        </div>
      </div>
      <button
        className="relative flex-shrink-0 p-1 border-2 rounded-lg ms-auto group border-neutral-700 hover:border-neutral-800 active:border-neutral-700 hover:bg-neutral-800 active:bg-neutral-700"
        onClick={() => removeFromCart(id)}
      >
        <TrashIcon
          strokeWidth={2}
          className="w-6 h-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
        />
      </button>
    </article>
  )
}
