import React from 'react'
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const CourseDetail = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const singleCourse = data.find(course => course.skillId === parseInt(id))

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        toast.success('Submitted')
    }

    return (
        <div>
            <div>
                <img className="max-w-[350px] sm:max-w-[700px] md:max-w-[800px] md:mx-auto lg:max-w-[900px] mx-auto object-cover rounded-xl" src={singleCourse.image} alt="" />
            </div>
            <div className="max-w-[350px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] mx-auto mt-5 px-3">
                <div className="border-b pb-2 border-gray-300">
                    <h1 className="font-bold text-2xl">{singleCourse.skillName}</h1>
                    <h1>By <span className="font-semibold">{singleCourse.providerName}</span></h1>
                </div>
                <div className="my-4 flex flex-col sm:flex-row gap-2 justify-between">
                    <h1 className="font-semibold text-xl">Price: <span className="text-green-500">$ {singleCourse.price} <span className="text-black">/</span> <span className="text-gray-500 font-light line-through">{singleCourse.price + singleCourse.price * 50 / 100} </span> <span className="pl-2 font-light"> -50% </span></span></h1>
                    <h1 className="font-semibold text-xl">Category: <span className="text-yellow-500">{singleCourse.category}</span></h1>
                    <h2 className="font-semibold text-xl">Seat Available: <span className="text-red-500">{singleCourse.slotsAvailable}</span></h2>
                </div>
                <div>
                    <h1 className="font-bold text-xl">Course Description</h1>
                    <p className="p-2 text-gray-600">{singleCourse.description}</p>
                </div>
                <div className="my-4 flex justify-between">
                    <button className="btn btn-secondary font-bold">Enroll Now</button>
                </div>
            </div>
            <div className="flex flex-col mx-5 max-w-[350px] sm:max-w-[700px] md:max-w-[800px] md:mx-auto lg:max-w-[900px] lg:mx-auto my-10 mb-20 ">
                <div className="my-5">
                    <h1 className="font-bold text-2xl">Course Session</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Name</label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Email</label>
                        <input type="text" placeholder="Your Email" className="input input-md" />
                    </div>
                    <div>
                        <button className="btn btn-secondary font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CourseDetail
