import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import logo from "../assets/images/Union.png"
import styles from "./RegisterPage.module.css"
import { useRegister } from "../services/mutations"

function RegisterPage() {
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const { username, password, confirmPassword } = form
  const { mutate } = useRegister()
  const navigate = useNavigate()

  const changeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setForm({ ...form, [name]: value })
  }

  const registerHandler = (e) => {
    e.preventDefault()

    if (!username || !password) {
      return setError("مقادیر هر فیلد را وارد کنید")
    }
    if (password !== confirmPassword) {
      return setError("دو رمز عبور با هم یکسان نیستند")
    }

    mutate(
      { username, password },
      {
        onSuccess: () => {
          navigate("/login")
          setError("")
        },
        onError: (error) => {
          if (error.message === "Request failed with status code 400") {
            setError("این کاربر قبلا ساخته شده است")
          }
        }
      }
    )
  }

  return (
    <>
      <div className={styles.container}>
        <h1>بوت کمپ بوتواستارت</h1>
        <div className={styles.registerForm}>
            <img src={logo} />
            <p>فرم ثبت نام</p>
            {
              error && <p className={styles.error}>{error}</p>
            }
            <form onSubmit={registerHandler}>
                <input
                  className={styles.inputForm}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="نام کاربری"
                  value={username}
                  onChange={changeHandler}
                />
                <input 
                  className={styles.inputForm}
                  type="text"
                  id="password"
                  name="password"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={changeHandler}
                />
                <input
                  className={styles.inputForm}
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="تکرار رمز عبور"
                  value={confirmPassword}
                  onChange={changeHandler}
                />
                <button type="submit" className={styles.buttonForm}>ثبت نام</button>
            </form>
            <Link to="/login">حساب کاربری دارید؟</Link>
        </div>
      </div>
    </>
  )
}

export default RegisterPage