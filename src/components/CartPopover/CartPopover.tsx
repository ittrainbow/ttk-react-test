import { FaceFrownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { PopoverProduct } from './PopoverProduct'
import { useSelector } from 'react-redux'
import { selectCart, selectProducts } from '@/redux/selectors'

type Props = { className?: string }

export function CartPopover({ className }: Props) {
  const cart = useSelector(selectCart)
  const products = useSelector(selectProducts)

  // надо ли делать пустой поповер и с продуктами равной ширины? min-w-80

  // layout
  
  const cartIsEmpty = (
    <div className="grid justify-items-center ">
      <FaceFrownIcon className="h-9 w-9 text-neutral-600" />
      <span className="max-w-80">The cart is empty</span>
    </div>
  )

  const cartGotProducts = (
    <ul className="grid gap-3">
      <li className="grid pb-3 border-b border-neutral-200 last:pb-0 last:border-b-0">
        {products
          .filter((product) => cart.includes(product.id))
          .map((product) => (
            <PopoverProduct
              key={product.id}
              product={product}
              className="max-w-80"
            />
          ))}
      </li>
    </ul>
  )

  return (
    <div
      className={clsx(
        'rounded-xl bg-white p-4 grid gap-4 shadow-popover',
        className
      )}
    >
      {cart.length ? cartGotProducts : cartIsEmpty}
    </div>
  )
}
