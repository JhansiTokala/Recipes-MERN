
import React from 'react'
import ReactDOM from 'react-dom/client';
import './index1.css'
import App from './App.jsx'
import App_state from './context/App_state.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <App_state>
    <App />
  </App_state>,
)
