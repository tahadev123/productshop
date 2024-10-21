import styles from "./Modal.module.css"

function EditModal({ setShowEditModal }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.editModal}>
          <div>
            <h3 className={styles.titleModal}>ویرایش اطلاعات</h3>
            <div className={styles.inputs}>
                <label htmlFor="name">نام کالا</label>
                <input className={styles.input} type="text" id="name" name="name" />
                <label htmlFor="inventory">تعداد موجودی</label>
                <input className={styles.input} type="text" id="inventory" name="inventory" />
                <label htmlFor="">قیمت</label>
                <input className={styles.input} type="text" id="price" name="price" />
            </div>
            <button onClick={() => setShowEditModal(false)} className={styles.cancelEditBtn}>انصراف</button>
            <button className={styles.editBtn}>ثبت اطلاعات جدید</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModal