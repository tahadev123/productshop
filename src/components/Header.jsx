import styles from "./Header.module.css"

import searchIcon from "../assets/icons/search-normal.svg"
import profile from "../assets/images/profile.jpg"

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.searchBox}>
            <img src={searchIcon} />
            <input type="text" name="search" placeholder="جستجو کالا" />
        </div>
        <div className={styles.profile}>
          <div>
            <img src={profile} />
          </div>
          <div>
            <p>طاها دهقان</p>
            <p>مدیر</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header