import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                <Outlet />
                <ToastContainer/>
            </div>
            <Footer />
        </div>
    )
}

export default Root
