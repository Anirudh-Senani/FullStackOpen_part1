import React from 'react'

const Header = (props) => {
  return(<div>
    <h1> {props.course}</h1>
  </div>)
}

const Part = (props) => {
  return(<div>
    <p> {props.part} {props.exercise}</p>
  </div>)
}

const Content = (props) => {
  return(props.parts.map(part =>
  <div>
    <Part part = {part.name} exercise = {part.exercises} />
  </div>)
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of Excercises {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total exercises = {course.parts} />
    </div>
  )
}

export default App