import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'
import Header from './components/Header'
import Parts from './components/Part'
import Content from './components/Content'
import Total from './components/Total'

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
      <h1> React University Courses </h1>
      <div>
        <Header name={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))