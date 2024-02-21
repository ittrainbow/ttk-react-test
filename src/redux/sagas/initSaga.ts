import { call, put } from 'redux-saga/effects'
import { ERROR, INIT_SUCCESS } from '../types'
import { fetchData } from '../api'
import { Product } from '@/types'

function* fetchProductsSaga() {
  try {
    const products: Product[] = yield call(
      fetchData,
      'https://fakestoreapi.com/products/'
    )
    const storedCart: string | null = localStorage.getItem('fakeStoreCart')
    const cart: number[] = storedCart
      ? JSON.parse(storedCart).map((el: string) => Number(el))
      : []

    yield put({ type: INIT_SUCCESS, payload: { products, cart } })
  } catch (error) {
    if (error instanceof Error) {
      yield put({ type: ERROR, payload: error.message })
    }
  }
}

export function* initSaga() {
  yield call(fetchProductsSaga)
}
