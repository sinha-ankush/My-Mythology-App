import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from '../auth'

const PrivateRoute = () => {

    return isLoggedIn() ? <Outlet /> : <Navigate to={'/signin'} />

}

export default PrivateRoute