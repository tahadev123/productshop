import Header from "./components/Header"
import WebTitle from "./components/WebTitle"
import Pagination from "./components/Pagination"
import Products from "./components/Products"
import TanstackQueryProvider from "./providers/TanstackQueryProvider"

function App() {

  return (
    <TanstackQueryProvider>
      <Header />
      <WebTitle />
      <Products />
      <Pagination />
    </TanstackQueryProvider>
  )
}

export default App
