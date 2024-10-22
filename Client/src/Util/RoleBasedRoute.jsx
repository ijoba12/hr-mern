import React from 'react';
import { useLocation, useNavigate, Navigate, } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';


const RoleBasedRoute = ({children,requiredRole}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!requiredRole.includes(user.role)) {
       const previousLocation =location.state ?.from || '/auth/sign-in';
       navigate(previousLocation);
       return;
    }
  return user ? children : <Navigate to = "/auth/sign-in"/>
}

export default RoleBasedRoute