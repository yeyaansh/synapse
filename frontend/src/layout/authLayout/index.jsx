import React from 'react'
import {Outlet} from "react-router"

const AuthLayout = () => {
  return (<>
    <div>AuthLayout</div>
    <Outlet></Outlet>
    </>
  )
}

export default AuthLayout