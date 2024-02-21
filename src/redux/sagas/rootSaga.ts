import { spawn, call, all } from 'redux-saga/effects'

import { initSaga, cartSagas } from '.'

export function* rootSaga() {
  const sagasArray = [initSaga, cartSagas]

  const retrySagas = sagasArray.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (error) {
          console.error(error)
        }
      }
    })
  })

  yield all(retrySagas)
}
