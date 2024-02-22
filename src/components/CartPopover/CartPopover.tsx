import { FaceFrownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { PopoverProduct } from './PopoverProduct'
import { CartStore, useCart, useQueryState } from '../query'

type Props = { className?: string }

export function CartPopover({ className }: Props) {
  const { data } = useQueryState()
  const { cart } = useCart((store: CartStore) => store)

  // по-хорошему убрать бы это в два отдельных компонента
  // но плодить миллион файлов - тоже не очень здорово
  // все равно оставлю так, условия в jsx нормально выглядят а тернарник посреди верстки уже громоздко

  const cartIsEmpty = (
    <div className="grid justify-items-center ">
      <FaceFrownIcon className="h-9 w-9 text-neutral-600" />
      <span className="max-w-80">The cart is empty</span>
    </div>
  )

  const cartGotProducts = (
    <ul className="grid gap-3">
      <li className="grid pb-3 border-b border-neutral-200 last:pb-0 last:border-b-0">
        {data
          ?.filter((product) => cart.includes(product.id))
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
