import { Layout } from '@/components'
import { Catalog } from '@/pages'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { ContextProvider } from './components/context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <Catalog />
      </Layout>
    </ContextProvider>
  </React.StrictMode>
)
