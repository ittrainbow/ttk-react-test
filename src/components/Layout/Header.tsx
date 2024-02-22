import {
  BuildingStorefrontIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { CartPopover } from '..'
import { useState } from 'react'
import { useCart } from '../query'
import { CartStore } from '@/types/CartStore'

type Props = { className?: string }

export function Header({ className }: Props) {
  const [popoverActive, setPopoverActive] = useState<boolean>(false)
  const { cart } = useCart((store: CartStore) => store)

  const handlePopover = () => {
    setPopoverActive(!popoverActive)
  }

  return (
    <header
      className={clsx(
        'rounded-xl bg-white p-4 flex justify-between items-center gap-4 shadow-card',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <BuildingStorefrontIcon className="h-9 w-9 text-neutral-600" />
        <span className="text-2xl">Fake Store</span>
      </div>
      <button
        className="relative p-1 border-2 rounded-lg group border-neutral-700 hover:border-neutral-800 active:border-neutral-700 hover:bg-neutral-800 active:bg-neutral-700"
        onClick={handlePopover}
      >
        <ShoppingCartIcon
          strokeWidth={2}
          className="w-6 h-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
        />

        {/* Индикатор количества товаров в корзине */}
        {cart.length > 0 && (
          <span className="absolute top-0 end-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium min-w-5 py-0.5 px-1 rounded-full bg-emerald-500 text-white">
            {cart.length}
          </span>
        )}
      </button>

      {/* Поповер с товарами корзины */}
      {popoverActive && (
        <CartPopover className="absolute top-full mt-4 end-0 z-10 max-h-[calc(100vh-6.25rem)] overflow-y-auto" />
      )}
    </header>
  )
}
