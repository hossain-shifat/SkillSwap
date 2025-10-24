import { Menu, User } from 'lucide-react'
import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'

const Navbar = () => {
    const { user, logOut } = use(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('You logout successfully')
            })
    }



    const links =
        <div className="font-semibold grid md:flex gap-3">
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/all-courses'><li>All Course</li></NavLink>
            {/* <Link to='/'><li>Home</li></Link> */}
        </div>

    return (
        <div>
            <div className="navbar bg-base-100 shadow md:px-10 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost z-10 lg:hidden px-2 bg-transparent border-none shadow-none">
                            <Menu />
                        </div>
                        {/* mobile view */}
                        <ul tabIndex="-1" className="menu menu-sm z-10 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex gap-2 justify-center items-center select-none cursor-pointer">
                        <img className="w-[25px] h-[25px]" src='/logo.png' alt="" />
                        <h1 className="text-xl font-semibold">SkillSwap</h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* large screen view */}
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    {
                        user ? <div className="flex gap-4 items-center justify-center"> {user ? <Link to='/user-profile'><img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={user.photoURL} alt={user.displayName} title={user.displayName} /></Link> : <User className="border-3 rounded-full" size={35} />} <button onClick={handleLogOut} className="btn btn-primary bg-transparent border font-bold border-red-600 text-red-600 shadow-none">Logout</button></div> : <Link to='/login' className="btn btn-primary font-bold border-none outline-none">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
