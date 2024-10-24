import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"; 

import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"

import { getCookie } from "../utils/cookie"

function Router() {
  const [token, setToken] = useState(getCookie("token"));

  useEffect(() => {
    const tokenFromCookie = getCookie("token");
    setToken(tokenFromCookie);
  }, [document.cookie]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={token ? <HomePage /> : <Navigate to="/register" />} />
        <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router