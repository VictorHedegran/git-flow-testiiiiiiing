import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Body } from './components/body.tsx'
import './index.css'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Header></Header>
    <Body />
    <Footer></Footer>
  </React.StrictMode>,
)
