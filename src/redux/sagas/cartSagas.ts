import { select, takeEvery } from 'redux-saga/effects'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types'

// это слишком громоздко

// export function* cartSaga() {
//   let prev: number[] = yield select((store) => store.app.cart)
//   while (true) {
//     yield take()
//     const next: number[] = yield select((store) => store.app.cart)
//     if (next !== prev) {
//       next.length
//         ? localStorage.setItem('fakeStoreCart', JSON.stringify(next))
//         : localStorage.removeItem('fakeStoreCart')
//       prev = next
//     }
//   }
// }

// это все равно громоздко но не хочется использовать useEffect для чего-то
// не относящегося к работе конкретного компонента

function* updateCartSaga() {
  const cart: number[] = yield select((store) => store.app.cart)
  cart.length
    ? localStorage.setItem('fakeStoreCart', JSON.stringify(cart))
    : localStorage.removeItem('fakeStoreCart')
}

export function* cartSagas() {
  yield takeEvery(ADD_TO_CART, updateCartSaga)
  yield takeEvery(REMOVE_FROM_CART, updateCartSaga)
}
