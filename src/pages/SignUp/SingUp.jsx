import { Eye, EyeClosed } from 'lucide-react'
import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const SingUp = () => {
    const { createUser, setUser, userPorfile, googleSingIn } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPassowrdError] = useState('')
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const passwordValidation = (password) => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!pattern.test(password)) {
            return 'Password must be at least 6 characters, contain at least one uppercase and one lowercase letter'
        }
        return ''
    }

    const handlePasswordOnChange = (e) => {
        const pass = e.target.value
        setPassword(pass)
        if (!pass) {
            setPassowrdError('')
            return
        }
        const error = passwordValidation(pass)
        setPassowrdError(error)
    }

    const handleSingUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (passwordError) return

        createUser(email, password)
            .then(result => {
                const user = result.user
                toast.success("Account created successfully")
                e.target.reset()
                setPassword('')
                navigate('/')
                userPorfile(name, photo)
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already exist please login")
                }
            })
    }

    const handleSingUpPopUp = () => {
        googleSingIn()
            .then(result => {
                setUser(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error.code === 'auth/invalid-credential') {
                    toast.error('Ivalid email or password')
                }
            })
    }


    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen text-[#333] bg-gray-200 -mt-5 select-none">
                <div className="mx-4">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                        <form onSubmit={handleSingUp}>
                            <h1 className="text-2xl font-bold text-center mb-5">Sing Up</h1>
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='name' placeholder='Name' />
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='photo' placeholder='Photo URL' />
                            <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="email" name='email' placeholder='Email' />
                            <div className="relative w-full">
                                <input className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type={showPassword ? 'text' : 'password'} onChange={handlePasswordOnChange} name='password' value={password} placeholder='Password' />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-5 right-5">{showPassword ? <EyeClosed /> : <Eye />}</span>
                            </div>
                            {passwordError && (<p className="text-red-600 select-none">{passwordError}</p>)}
                            <button className="btn btn-primary font-bold text-white w-full mt-5 border-none outline-none">Sing Up</button>
                            <p className="mt-2">Already Have an Account? <Link to='/login' className="underline text-blue-600">Login</Link></p>
                        </form>
                        <div className="flex justify-center items-center mt-4">
                            <hr className="w-[45%]" />
                            <p className="px-1">Or</p>
                            <hr className="w-[45%]" />
                        </div>
                        <div className="mt-5">
                            <button onClick={handleSingUpPopUp} className="btn bg-white text-black w-full border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg> Singin with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SingUp
