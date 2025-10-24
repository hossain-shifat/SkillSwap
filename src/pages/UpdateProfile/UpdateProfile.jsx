import React, { use, useState } from 'react'
import { AuthContext } from '../../context/Auth/AuthProvider/AuthProvider'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const UpdateProfile = () => {
    const { user, userPorfile, setUser } = use(AuthContext)
    const [name, setName] = useState(user?.name || '')
    const [photo, setPhoto] = useState(user?.photoURL || '')

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()


        const updateName = name || user?.displayName
        const updatePhoto = photo || user?.photoURL


        userPorfile(updateName, updatePhoto)
        .then(()=>{
            setUser({ ...user, displayName: updateName, photoURL: updatePhoto })
            toast.success('Profile updated successfully!')
            navigate('/user-profile')
        })
        .catch(error=>{
            toast.error(error.code)
        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen text-[#333] bg-gray-200 -mt-5 select-none">
            <div className="mx-4">
                <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-white">
                    <form onSubmit={handleUpdate}>
                        <h1 className="text-2xl font-bold text-center mb-5">Update Profile</h1>
                        <input onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='name' value={name} placeholder='Name' />
                        <input onChange={(e) => setPhoto(e.target.value)} className="w-full p-3 rounded bg-[#eee] border border-gray-100 outline-none text-[1rem] text-[#333] my-2" type="text" name='photo' value={photo} placeholder='Photo URL' />
                        <button className="btn btn-primary font-bold text-white w-full mt-5 border-none outline-none">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
