import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
    return (
        <div>
            <h1>
                {props.course.name}
            </h1> 
        </div>
    )
}

const Content = (props) => {
  console.log(props)
    return (
        <div>
            <Part part={props.course.parts[0]} />
            <Part part={props.course.parts[1]} />
            <Part part={props.course.parts[2]} />
        </div>
    )
}

const Part = (props) => {
  console.log(props)
    return (
      <div>
        {props.part.name} {props.part.exerciseNumber}
      </div>
    )
  }

const Total = (props) => {
  console.log(props)
    return (
        <div>
            <p>Number of exercises {
              props.course.parts[0].exerciseNumber +
              props.course.parts[1].exerciseNumber +
              props.course.parts[2].exerciseNumber 
              }
            </p>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ 
      {
        name: 'Fundamentals of React', 
        exerciseNumber: 10,
      },
      {
        name: 'Using props to pass data', 
        exerciseNumber: 7,
      },
      {
        name: 'State of a component', 
        exerciseNumber: 14,
      },
    ], 
  }
    
  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
