import { useQueryClient } from "@tanstack/react-query";
import { useDeleteProduct } from "../services/mutations"
import { useNavigate } from "react-router-dom";

import closeIcon from "../assets/images/close.png"
import styles from "./Modal.module.css"

function DeleteModal({ productId, setShowDeleteModal }) {
  const { mutate } = useDeleteProduct();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteHandler = () => {
    mutate(
      productId,
      {
        onSuccess: (data) => {
          console.log(data);
          setShowDeleteModal(false)
          queryClient.invalidateQueries({ queryKey: ["products"] })
        },
        onError: (error) => {
          console.log(error.message)
          if (error.message === "Access denied, no token provided") {
            navigate("/login")
          }
        }
      }
    )
  };


  return (
    <>
      <div className={styles.container}>
        <div className={styles.deleteModal}>
          <img src={closeIcon} />
          <h4>آیا از حذف این محصول مطمئنید؟</h4>
          <div>
              <button onClick={() => setShowDeleteModal(false)} className={styles.cancelBtn}>لغو</button>
              <button onClick={() => deleteHandler()} className={styles.deleteBtn}>حذف</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteModal