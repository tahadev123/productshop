import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAddProduct } from "../services/mutations";

import styles from "./Modal.module.css";

function AddProducts({ setAddProduct }) {
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const { mutate } = useAddProduct();
  const queryClient = useQueryClient();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const addHandler = (e) => {
    e.preventDefault();

    mutate(
      { ...form },
      {
        onSuccess: (data) => {
          setAddProduct(false);
          console.log(data);
          queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => console.log(error.response.data.message),
      }
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addModal}>
          <div>
            <h3 className={styles.titleModal}>ایجاد محصول جدید</h3>
            <form onSubmit={addHandler}>
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
              <button
                onClick={() => setAddProduct(false)}
                className={styles.cancelEditBtn}
              >
                انصراف
              </button>
              <button type="submit" className={styles.addBtn}>
                ایجاد
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProducts;
