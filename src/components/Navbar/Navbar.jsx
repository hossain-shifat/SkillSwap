import { Edit2, Menu, UserPen, UserRoundPen } from 'lucide-react'
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
                        user ? <div className="flex gap-4 items-center justify-center"> {user ? <div className="relative group"> <img className="w-10 h-10 object-cover rounded-full cursor-pointer" src={user.photoURL} alt={user.displayName} title={user.displayName} /><div className="absolute top-12 transform -translate-x-1/2 z-20 px-2 py-2 bg-gray-300 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden text-ellipsis transition-opacity">{user.displayName}</div> <Link to='/user-profile'><div className="absolute inset-0 w-10 h-10 bg-gray-300 opacity-0 cursor-pointer rounded-full flex justify-center items-center group-hover:opacity-60 transition-opacity"><UserRoundPen stroke='white'/> </div></Link> </div> : <User className="border-3 rounded-full" size={35} />} <button onClick={handleLogOut} className="btn btn-primary bg-transparent border font-bold border-red-600 text-red-600 shadow-none">Logout</button></div> : <div><Link to='/login' className="btn btn-primary font-bold border-none outline-none">Login</Link> <Link to='/sing-up' className="btn btn-primary font-bold border-none outline-none">SingUp</Link></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
