import React, { useEffect, useState } from 'react'
import AllCourse from '../../pages/AllCourse/AllCourse'

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
        </div>
    )
}

export default Popular
