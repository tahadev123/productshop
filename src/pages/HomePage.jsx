import { useState } from "react"

import Header from '../components/Header'
import WebTitle from '../components/WebTitle'
import Products from '../components/Products'
import Pagination from '../components/Pagination'

function HomePage() {
  const [steps, setSteps] = useState(1)

  return (
    <>
      <Header />
      <WebTitle />
      <Products steps={steps} />
      <Pagination steps={steps} setSteps={setSteps} />
    </>
  )
}

export default HomePage