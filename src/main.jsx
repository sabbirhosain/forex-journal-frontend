import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authentication_Context from './Context/Authentication_Context.jsx'
import Currency_Pair_Context from './Context/Currency_Pair_Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Currency_Pair_Context>
      <Authentication_Context>
        <App />
      </Authentication_Context>
    </Currency_Pair_Context>
  </BrowserRouter>
)
