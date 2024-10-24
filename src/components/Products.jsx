import { useState } from "react"
import { useProducts } from "../services/queries"

import styles from "./Products.module.css"

import trashIcon from "../assets/icons/trash.svg"
import editIcon from "../assets/icons/edit.svg"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"

function Products({ steps }) {
  const [ showDeleteModal, setShowDeleteModal ] = useState(false)
  const [ showEditModal, setShowEditModal ] = useState(false)
  const [productId, setProductId] = useState("")
  
  const products = useProducts(steps)
  const product = products.data?.data.data
  console.log(product);
    
  
  return (
    <>
      {
        showDeleteModal ? <DeleteModal productId={productId} setShowDeleteModal={setShowDeleteModal} /> : null
      }
      {
        showEditModal ? <EditModal productId={productId} setShowEditModal={setShowEditModal} /> : null
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
        {product?.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{Number(item.price).toLocaleString()} {item.price > 1000000 ? "میلیون تومان" : "هزار تومان"}</td>
            <td>{item.id}</td>
            <td>
              <button onClick={() => {
                setShowDeleteModal(true)
                setProductId(item.id)
              }} className={styles.deleteBtn}><img src={trashIcon} /></button>
              <button onClick={() => {
                setShowEditModal(true)
                setProductId(item.id)
              }} className={styles.editBtn}><img src={editIcon} /></button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default Products