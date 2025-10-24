import React, { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Aos from 'aos'
import 'aos/dist/aos.css';


const Root = () => {

    useEffect(()=>{
        Aos.init({duration:1000, once:true})
    },[])

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
