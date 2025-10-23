import { Eye, EyeClosed } from 'lucide-react'
import React, { use, useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'

const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, setUser, userPorfile } = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSingUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(result => {
                const user = result.user
                userPorfile(name, photo)
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        toast.success("Account created successfully")
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already exist please login")
                }
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen text-[#333] bg-gray-200 -mt-5 select-none">
            <div className="mx-4">
                <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                    <form onSubmit={handleSingUp}>
                        <h1 className="text-2xl font-bold text-center mb-5">Sing Up</h1>
                        <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='name' placeholder='Name' />
                        <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='photo' placeholder='Photo URL' />
                        <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="email" name='email' placeholder='Email' />
                        <div className="relative w-full">
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-5 right-5">{showPassword ? <EyeClosed /> : <Eye />}</span>
                        </div>
                        {/* <p className="text-blue-600 underline cursor-pointer">Forget Passowrd?</p> */}
                        <button className="btn btn-primary font-bold text-white w-full mt-5 border-none outline-none">Sing Up</button>
                        <p className="mt-2">Already Have an Account? <Link to='/login' className="underline text-blue-600">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp
