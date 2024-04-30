import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

export const GuestLayout = () => {
    const {token}=useStateContext()
debugger ; 
if(token){
    return <Navigate to="/" />
}
  return (
    <div>
      <Outlet />
    </div>
  )
}
