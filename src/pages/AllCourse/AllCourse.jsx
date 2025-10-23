import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const AllCourse = ({ course }) => {

    return (
        <div>
            <div className="border border-gray-100 shadow-sm max-w-screen rounded-xl mx-3 lg:mx-0 p-4 overflow-hidden">
                <div>
                    <img className="w-full h-50 md:w-[400px] lg:w-[500px] object-cover rounded-xl border border-gray-100 shadow-sm mx-auto" src={course.image} alt="" />
                </div>
                <div className="px-1 mt-5 flex flex-col">
                    <div>
                        <h1 className="font-semibold text-lg md:text-xl line-clamp-2 leading-tight  overflow-hidden text-ellipsis whitespace-nowrap" title={course.skillName}>{course.skillName}</h1>
                        <p className="text-gray-500 text-sm">By <span>{course.providerName}</span></p>
                    </div>
                    <div className="my-3 flex gap-2 w-fit px-2 bg-lime-100 rounded-full">
                        <div className="flex gap-1 justify-center items-center">
                            <Star stroke='orange' size={18} fill='orange' />
                            <Star stroke='orange' size={18} fill='orange' />
                            <Star stroke='orange' size={18} fill='orange' />
                            <Star stroke='orange' size={18} fill='orange' />
                            <StarHalf stroke='orange' size={18} fill='orange' />
                        </div>
                        <div className="justify-center items-center">
                            <h1 className="font-bold text-sm">{course.rating}</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-xl">${course.price}</h1>
                </div>
                <div className="mt-4">
                    <Link to={`/course-details/${course.skillId}`} className="btn btn-secondary border-none outline-none w-full cursor-pointer">Course Details</Link>
                </div>
            </div>
        </div>
    )
}

export default AllCourse
