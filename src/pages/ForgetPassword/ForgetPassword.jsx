import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { Link, useLocation } from 'react-router'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const ForgetPassword = () => {
    const { forgetPassword } = use(AuthContext)
    const location = useLocation()
    const [email, setEmail] = useState('')


    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email)
        }
    }, [location.state])



    const handleForgetPassword = (e) => {
        e.preventDefault()
        if (!email) {
            toast.error('Please enter your email')
            return
        }
        forgetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Check your inbox.')
                window.open('https://mail.google.com', '_blank');
            })
    }



    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen  text-[#333] bg-gray-200 -mt-5 select-none">
                <div className="mx-3">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                        <form onSubmit={handleForgetPassword}>
                            <div>
                                <Link to='/login' className="flex justify-end cursor-pointer"><X /></Link>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-center mb-5">Forget Password</h1>
                            </div>
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="email" name='email' value={email} placeholder='Email' />
                            <button className="btn btn-primary font-bold text-white w-full border-none outline-none mt-5">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ForgetPassword
