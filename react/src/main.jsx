import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CompA from './CompA'
import{CompB} from './CompB'


ReactDOM.createRoot(document.getElementById('root')).render(
   <h1> 
    hello world!
    <CompA  b={2}></CompA>
    <CompB b={33}></CompB>
   </h1>
  )
