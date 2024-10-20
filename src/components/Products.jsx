import styles from "./Products.module.css"

import trashIcon from "../assets/icons/trash.svg"
import editIcon from "../assets/icons/edit.svg"

function Products() {
  return (
    <>
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
                  <button class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
            <tr>
              <td>تتیشرت طرح انگولار</td>
              <td>۲۹۳</td>
              <td>۹۰ هزار تومان</td>
              <td>90uf9g9h7895467g974</td>
              <td>
                  <button class={styles.deleteBtn}><img src={trashIcon} /></button>
                  <button class={styles.editBtn}><img src={editIcon} /></button>
              </td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default Products