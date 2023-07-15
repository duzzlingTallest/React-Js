import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ClassComp from './components/ClassComp.jsx'

import FunComp from './components/FunComp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassComp />
    <FunComp/>
  </React.StrictMode>,
)
