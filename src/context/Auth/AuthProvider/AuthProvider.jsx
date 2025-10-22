import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { auth } from '../../../firebase/firebase.init';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // singup
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singin

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    // logout

    const logOut = ()=>{
        return signOut(auth)
    }




    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
        loading,
        setLoading,

    }


    useEffect(() => {
            const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                setLoading(false)
            })
            return () => {
                unsubscribed()
            }
        }, [])

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider
