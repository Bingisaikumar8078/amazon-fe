import React, { useEffect } from 'react'
import AuthService from '../../services/auth-service'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const nav = useNavigate();

useEffect(() => {
    
    const user = AuthService.getCurrentUser();

    if(!user){
        nav('/')

    }

}, [nav]);
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute