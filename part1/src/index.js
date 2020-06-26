import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const increaseByOne = () => setCounter(counter + 1)
  const reset = () => setCounter(0)
  const decrease = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick = {increaseByOne}
        text = 'Add 1'
      />

      <Button 
        handleClick = {decrease}
        text = 'Subtract 1'
      />

      <Button
        handleClick = {reset}
        text = "Zero"
      />
      </div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(
    <App counter = {counter} />, 
    document.getElementById("root")
  )
}

refresh()