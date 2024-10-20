import { useState } from "react"

import styles from "./Products.module.css"

import trashIcon from "../assets/icons/trash.svg"
import editIcon from "../assets/icons/edit.svg"
import DeleteModal from "./DeleteModal"

function Products() {
  const [ showDeleteModal, setShowDeleteModal ] = useState(false)

  return (
    <>
      {
        showDeleteModal ? <DeleteModal setShowDeleteModal={setShowDeleteModal} /> : null
      }
      <table class={styles.productTable}>
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
                  <button onClick={() => setShowDeleteModal(true)} class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button onClick={() => setShowDeleteModal(true)} class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button onClick={() => setShowDeleteModal(true)} class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Products