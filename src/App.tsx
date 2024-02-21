import { Layout } from '@/components'
import { Catalog } from '@/pages'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Catalog />
      </Layout>
    </Provider>
  </React.StrictMode>
)
