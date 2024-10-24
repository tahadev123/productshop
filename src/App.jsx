import TanstackQueryProvider from "./providers/TanstackQueryProvider"

import HomePage from "./pages/HomePage"
import Router from "./router/Router"

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
    </TanstackQueryProvider>
  )
}

export default App
