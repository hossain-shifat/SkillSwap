import React, { useEffect, useState } from 'react'
import AllCourse from '../../pages/AllCourse/AllCourse'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

const Popular = () => {
    const [populer, setPopuler] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setPopuler(data.slice(0, 4))
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <div className="mt-20">
                <h1 className="text-2xl text-center font-bold">Popular Skills</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto my-10">
                {
                    populer.map(course => <AllCourse key={course.skillId} course={course} />)
                }
            </div>
            <div className="flex justify-end px-4">
                <Link to='/all-courses' className="font-medium text-blue-600 cursor-pointer flex justify-center items-center">See More <ArrowRight size={18}/></Link>
            </div>
        </div>
    )
}

export default Popular
