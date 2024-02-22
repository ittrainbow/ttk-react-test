import { Product } from '@/types'
import {
  CheckIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { CartStore, useCart } from '../query'

type Props = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: Props) {
  const { id } = product
  const { cart, addToCart, removeFromCart } = useCart(
    (store: CartStore) => store
  )

  // layout

  const productInCart = (
    <div className="flex items-center gap-2">
      <div className="flex flex-grow items-center justify-center gap-2 border-2 border-emerald-500 rounded-lg py-1.5 px-4">
        <CheckIcon strokeWidth={2} className="w-6 h-6 text-emerald-500" />
        <span className="font-medium text-emerald-500">Added</span>
      </div>
      <button
        className="flex group items-center justify-center gap-2 rounded-lg p-1.5 border-2 border-neutral-900 hover:border-neutral-800 hover:bg-neutral-800 active:border-neutral-700 active:bg-neutral-700"
        onClick={() => removeFromCart(id)}
      >
        <TrashIcon
          strokeWidth={2}
          className="w-6 h-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
        />
      </button>
    </div>
  )

  const productNotInCart = (
    <button
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700"
      onClick={() => addToCart(id)}
    >
      <ShoppingBagIcon strokeWidth={2} className="w-6 h-6 text-neutral-200" />
      <span className="font-medium text-neutral-200">Add to cart</span>
    </button>
  )

  return (
    <article
      className={clsx(
        'flex flex-col gap-4 bg-white rounded-xl p-4 shadow-card',
        className
      )}
    >
      <div className="relative grid rounded-lg aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="absolute object-contain w-full h-full"
        />
      </div>
      <span className="self-center w-2/3 h-px bg-neutral-200" />
      <div className="flex flex-col flex-grow gap-4">
        <h3 className="mb-auto text-xl font-medium line-clamp-2">
          {product.title}
        </h3>
        <div className="grid gap-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold text-emerald-500">$</span>
              <span className="text-3xl font-bold text-emerald-500">
                {product.price}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon strokeWidth={2} className="w-6 h-6 text-amber-500" />
              <span className="text-2xl font-bold text-amber-500">
                {product.rating.rate}
              </span>
            </div>
          </div>

          {cart.includes(id) ? productInCart : productNotInCart}
        </div>
      </div>
    </article>
  )
}
