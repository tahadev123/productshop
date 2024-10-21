import styles from "./Modal.module.css"

function AddProducts({ setAddProduct }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.addModal}>
          <div>
            <h3 className={styles.titleModal}>ایجاد محصول جدید</h3>
            <div className={styles.inputs}>
                <label htmlFor="name">نام کالا</label>
                <input className={styles.input} type="text" id="name" name="name" />
                <label htmlFor="inventory">تعداد موجودی</label>
                <input className={styles.input} type="text" id="inventory" name="inventory" />
                <label htmlFor="">قیمت</label>
                <input className={styles.input} type="text" id="price" name="price" />
            </div>
            <button onClick={() => setAddProduct(false)} className={styles.cancelEditBtn}>انصراف</button>
            <button className={styles.addBtn}>ایجاد</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProducts