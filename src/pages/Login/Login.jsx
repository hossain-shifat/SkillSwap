import { Eye, EyeClosed } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="flex justify-center items-center min-h-screen text-[#333] bg-gray-200 -mt-5 select-none">
            <div className="mx-4">
                <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                    <form>
                        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
                        <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="email" placeholder='Email' />
                        <div className="relative w-full">
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-5 right-5">{showPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                        <p className="text-blue-600 underline cursor-pointer">Forget Passowrd?</p>
                        <button className="btn btn-primary font-bold text-white w-full px-33 border-none outline-none mt-5">Login</button>
                        <p className="mt-2">Don't Have an Account <Link to='/sing-up' className="underline text-blue-600">SingUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
