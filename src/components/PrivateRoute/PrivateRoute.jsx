import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()

    if (loading) {
        return <h1>loading....</h1>
    }

    if (user && user?.email) {
        return children
    }




    return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute
