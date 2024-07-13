import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './context/CartContext'
import { GlobalStyle } from './styles/themes/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
