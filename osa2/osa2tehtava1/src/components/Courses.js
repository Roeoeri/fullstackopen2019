


import React from 'react'
import Course from './Course'

const Courses =({courses}) =>{

    return(
        <div>
            {courses.map(course =>
            <Course key={course.name} course = {course}/>
            )}
        </div>
    )

} 

export default Courses