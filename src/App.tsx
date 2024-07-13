import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
