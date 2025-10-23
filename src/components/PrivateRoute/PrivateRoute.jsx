import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import Loading from '../../pages/Loading/Loading'


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()

    if (loading) {
        return Loading
    }

    if (user && user?.email) {
        return children
    }




    return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute
