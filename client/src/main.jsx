import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@scss/_global.scss'
import store from './store/index.js'

export const Context = createContext({
  ...store,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={store}>
    <App />
  </Context.Provider>
)
