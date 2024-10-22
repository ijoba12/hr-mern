import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
  if (isLoading) {
    return <div>Loading...</div>
  }

  return user ? children : <Navigate to="/auth/sign-in"/>
}

export default PrivateRoute