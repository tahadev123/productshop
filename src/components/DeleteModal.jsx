import closeIcon from "../assets/images/close.png"

import styles from "./Modal.module.css"

function DeleteModal({ setShowDeleteModal }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.deleteModal}>
          <img src={closeIcon} />
          <h4>آیا از حذف این محصول مطمئنید؟</h4>
          <div>
              <button onClick={() => setShowDeleteModal(false)} className={styles.cancelBtn}>لغو</button>
              <button className={styles.deleteBtn}>حذف</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteModal