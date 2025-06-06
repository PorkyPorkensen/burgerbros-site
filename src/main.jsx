import './index.css';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>

  <App />
  </CartProvider>
  </BrowserRouter>


)
