import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let root = ReactDOM.createRoot(document.getElementById("root"))  // root  is the id of html div.

let head = <h1>Header</h1>
let body = <h1>body</h1>
let footer = <h1>footer</h1>

let a = 10
let b = 30


root.render(<p>
  <h2 >{head}</h2>
  <h2>{body}</h2>
  <h2>{footer}</h2>
  <h1>Addition output Like This -- {a + b}</h1>
  <h1>{[1, 2, 3, 4, 5, 6].map((e) => {
    return e;
  })}</h1>
</p>)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
