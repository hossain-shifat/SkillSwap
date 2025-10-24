import React from 'react'
import { useLoaderData } from 'react-router'
import AllCourse from '../AllCourse/AllCourse'

const AllCourses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className="font-bold text-2xl mt-10 -mb-4 px-4">
                <h1>All Courses</h1>
            </div>
            <div className="max-w-[1200px] mx-auto px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                {courses.map(course => <AllCourse key={course.skillId} course={course} />)}
            </div>
        </div>
    )
}

export default AllCourses
