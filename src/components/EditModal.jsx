import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useEditProduct } from "../services/mutations";
import { getCookie } from "../utils/cookie";

import styles from "./Modal.module.css"

function EditModal({ productId, setShowEditModal }) {
  const { mutate } = useEditProduct();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });  

  const editHandler = (e) => {
    e.preventDefault()

    mutate(
      {
        id: productId,
        ...form
      },
      {
        onSuccess: (data) => {
          console.log(data)
          setShowEditModal(false)
          queryClient.invalidateQueries({ queryKey: ["products"] })
        },
        onError: (error) => {
          console.log(error.message)
          if (error.message === "Request failed with status code 401") {
            navigate("/login")
            window.location.reload()
          }
          if (error.message === "Request failed with status code 403") {
            document.cookie = `token=${getCookie("token")}; expires=Wed, 18 Dec 2000 12:00:00 GMT`
            navigate("/login")
            window.location.reload()
          }
        }
      }
    )
  }

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.editModal}>
          <div>
            <h3 className={styles.titleModal}>ویرایش اطلاعات</h3>
            <form onSubmit={editHandler}>
              <div className={styles.inputs}>
                <label htmlFor="name">نام کالا</label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  name="name"
                  onChange={changeHandler}
                />
                <label htmlFor="quantity">تعداد موجودی</label>
                <input
                  className={styles.input}
                  type="text"
                  id="quantity"
                  name="quantity"
                  onChange={changeHandler}
                />
                <label htmlFor="price">قیمت</label>
                <input
                  className={styles.input}
                  type="text"
                  id="price"
                  name="price"
                  onChange={changeHandler}
                />
              </div>
              <button onClick={() => setShowEditModal(false)} className={styles.cancelEditBtn}>انصراف</button>
              <button type="submit" className={styles.editBtn}>ثبت اطلاعات جدید</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditModal