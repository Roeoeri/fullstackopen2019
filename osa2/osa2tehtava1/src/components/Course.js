import React from 'react'

const Header = (props) =>{
    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) =>{
    return(
        <div>
       {props.parts.map(part => <Part key={part.name} part={part}/>)}
        </div>
    )
}

const Total = ({parts}) =>{
    let initialValue = 0;
    let total = parts.reduce((accumulator,currentValue)=>
        accumulator + currentValue.exercises,initialValue
    )
    return(
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) =>{
    return(
        <p>
        {props.part.name} {props.part.exercises}
        </p>
    )
}

const Course = ({course}) =>{
    return(
        <div>
        <Header course={course.name}/>
        <Content parts = {course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
}

export default Course