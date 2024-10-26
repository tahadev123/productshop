import { useNavigate } from "react-router-dom"

import { getCookie } from "../utils/cookie"

import styles from "./Header.module.css"
import searchIcon from "../assets/icons/search-normal.svg"
import profile from "../assets/images/profile.jpg"
import removeUser from "../assets/icons/remove.png"

function Header() {
  const navigate = useNavigate()

  const removeUserHandler = () => {
    document.cookie = `token=${getCookie("token")}; expires=Wed, 18 Dec 2000 12:00:00 GMT`
    navigate("/login")
    window.location.reload()
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.searchBox}>
            <img src={searchIcon} />
            <input type="text" name="search" placeholder="جستجو کالا" />
        </div>
        <div className={styles.profile}>
          <div>
            <img className={styles.profileImg} src={profile} />
          </div>
          <div>
            <p>طاها دهقان</p>
            <p>مدیر</p>
            <img onClick={removeUserHandler} className={styles.removeUser} src={removeUser} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header