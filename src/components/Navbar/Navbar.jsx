import { Menu } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
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
                            <Menu/>
                        </div>
                        {/* mobile view */}
                        <ul tabIndex="-1" className="menu menu-sm z-10 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex gap-2 justify-center items-center select-none cursor-pointer">
                        <img className="w-[25px] h-[25px]" src='https://img.icons8.com/?size=100&id=xsmDI5Qkj3wH&format=png&color=000000' alt="" />
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
                    <button className="btn btn-primary font-bold border-none outline-none">Login</button>
                    <button className="btn btn-primary font-bold border-none outline-none">SingIn</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
