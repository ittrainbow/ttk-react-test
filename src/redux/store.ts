import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit'
import { appReducer as app } from './reducers/appReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: combineReducers({
    app,
  }),
  middleware: () => new Tuple(sagaMiddleware),
  devTools: process.env.NODE_ENV === 'development',
})

export default store

sagaMiddleware.run(rootSaga)
