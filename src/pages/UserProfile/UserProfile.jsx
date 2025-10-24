import React, { use } from 'react'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { Link } from 'react-router'
import { UserPen, X } from 'lucide-react'

const UserProfile = () => {
    const { user } = use(AuthContext)
    return (
        <div className="flex justify-center items-center min-h-screen  text-[#333] bg-gray-200 -mt-5">
            <div className="mx-3">
                <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                    <Link to='/' className="flex justify-end cursor-pointer"><X/></Link>
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-5">My Profile</h1>
                    </div>
                    <div className="my-5">
                        <img className="w-20 h-20 object-cover border-4 border-green-500 rounded-full mx-auto" src={user.photoURL} alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between">
                            <h1>Name</h1>
                            <h1>{user.displayName}</h1>
                        </div>
                        <div className="flex justify-between gap-15">
                            <h1>Email</h1>
                            <h1>{user.email}</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1>Phone</h1>
                            <h1>017xxxxxxxx</h1>
                        </div>
                        <div className="flex justify-between">
                            <h1>Location</h1>
                            <h1>Bnagladesh</h1>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Link to='/update-profile' className="btn btn-primary flex justify-center items-center font-bold text-white w-full border-none outline-none mt-5"><UserPen size={20}/> Update Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
