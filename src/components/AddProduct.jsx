import styles from "./addProduct.module.css"

import manageIcon from "../assets/icons/setting-3.svg"

function AddProduct() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={manageIcon} />
          <h3>مدیریت کالا</h3>
        </div>
        <div>
            <button>افزودن محصول</button>
        </div>
      </div>
    </>
  )
}

export default AddProduct