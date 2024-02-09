import { ForgotPassword } from "../auth/ForgotPassword";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

export const authNav = [
  {
    path: "/login", name: "Login", element: <Login />, isMenu: true, isPrivate: false 
  },
  {
    path: "/register", name: "Register", element: <Register />, isMenu: true, isPrivate: false
  },
  {
    path: "/forgotpassword", name: "ForgotPassword", element: <ForgotPassword />, isMenu: false, isPrivate: false
  }
]