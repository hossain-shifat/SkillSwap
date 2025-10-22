import React from 'react'
import { useLoaderData } from 'react-router'
import AllCourse from '../AllCourse/AllCourse'

const AllCourses = () => {
    const courses = useLoaderData()
    console.log(courses)
  return (
    <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
          {courses.map(course => <AllCourse key={course.skillId} course={course}/>)}
    </div>
  )
}

export default AllCourses
