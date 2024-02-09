import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div>Login Auth</div>
      <Outlet></Outlet>
    </>
  )
}

export default Auth