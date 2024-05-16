import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
)
