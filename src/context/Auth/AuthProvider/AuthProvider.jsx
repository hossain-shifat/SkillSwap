import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { auth } from '../../../firebase/firebase.init';
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router';


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

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

    // google login
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const userPorfile = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        })
    }


    // logout

    const logOut = () => {
        return signOut(auth)
    }




    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        googleSingIn,
        userPorfile,
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
