import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    const links =
        <>
            <Link to='/'><li>Home</li></Link>
            <Link to='/all-course'><li>All Course</li></Link>
            {/* <Link to='/'><li>Home</li></Link> */}
        </>
    return (
        <div className="px-10 mb-5">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        {/* mobile view */}
                        <ul tabIndex="-1" className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <img className="w-[25px] h-[25px]" src='https://img.icons8.com/?size=100&id=xsmDI5Qkj3wH&format=png&color=000000' alt="" />
                        <h1 className="text-xl font-semibold">SkillSwap</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* large screen view */}
                    <ul className="menu menu-horizontal gap-3 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
