import { useState } from "react"

import styles from "./WebTitle.module.css"

import manageIcon from "../assets/icons/setting-3.svg"
import AddProducts from "./addProduct"

function WebTitle() {
  const [addProduct, setAddProduct] = useState(false)

  return (
    <>
      {
        addProduct ? <AddProducts setAddProduct={setAddProduct} /> : null
      }
      <div className={styles.container}>
        <div>
          <img src={manageIcon} />
          <h3>مدیریت کالا</h3>
        </div>
        <div>
          <button className={styles.addProductBtn} onClick={() => setAddProduct(true)}>افزودن محصول</button>
        </div>
      </div>
    </>
  )
}

export default WebTitle