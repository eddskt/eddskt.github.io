import React, {createContext, useContext, useState} from 'react';
//import { Navbar } from '../components/structure/Navbar';
//import { RenderMenu, RenderRoutes } from '../components/structure/RenderNavigation';

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({name: "", isAuthenticated: false})
  const login = (usuario, password) => {
    return new Promise((resolve, reject) => {
      if(password === "password"){
        setUser({name: usuario, isAuthenticated: true})
        resolve("success");
      }else{
        reject("Incorrect password");
      }
    })

  }

  const logout = () => {
    setUser({...user, isAuthenticated: false})
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      <>
        <RenderHeader />
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  )
}