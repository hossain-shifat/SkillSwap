import React, { use } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    if (loading) {
        return <h1>loading....</h1>
    }

    if (user && user?.email) {
        return children
    }




    return <Navigate state={location.pathname} to='/login' />
}

export default PrivateRoute
