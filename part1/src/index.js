import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

/*
 - Javascript inside the curly braces of a function is evaluated
 - Components are reusable, and return JSX to be rendered
 - (props) is an object passed as a parameter, their values can be strings or results of expressions
 - 
*/
const App = () => { //component with the name app
  const name = 'pete'
  const age = 10

  return ( 
    <div>
      <h1> Greetings! </h1>
      <Hello name="George" age = {26+10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

//const App = ...
// this is a constant variable, which is assigned the value of..

/* this javascript function! 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

() => (
  <div>
    <p>Hello world!</p>
  </div>
)

*/

ReactDOM.render(<App />, document.getElementById('root')) 