import { useState } from "react"

import styles from "./Products.module.css"

import trashIcon from "../assets/icons/trash.svg"
import editIcon from "../assets/icons/edit.svg"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"

function Products() {
  const [ showDeleteModal, setShowDeleteModal ] = useState(false)
  const [ showEditModal, setShowEditModal ] = useState(false)

  return (
    <>
      {
        showDeleteModal ? <DeleteModal setShowDeleteModal={setShowDeleteModal} /> : null
      }
      {
        showEditModal ? <EditModal setShowEditModal={setShowEditModal} /> : null
      }
      <table className={styles.productTable}>
        <thead>
            <tr>
              <th>نام کالا</th>
              <th>موجودی</th>
              <th>قیمت</th>
              <th>شناسه کالا</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button onClick={() => setShowDeleteModal(true)} className={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button onClick={() => setShowEditModal(true)} className={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button onClick={() => setShowDeleteModal(true)} className={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button onClick={() => setShowEditModal(true)} className={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button onClick={() => setShowDeleteModal(true)} className={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button onClick={() => setShowEditModal(true)} className={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Products