import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, amount}) => (
  <table>
    <tr>
      <th>{text}</th>
      <td>{amount}</td>
    </tr>
  </table>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  const handleGood = () => {
    setGood(good+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>
        Give feedback
      </h1>

      <Button onClick={handleGood} text='Good'/>
      <Button onClick={handleNeutral} text='Neutral'/>
      <Button onClick={handleBad} text='Bad'/>

      <p>
        <h2>
          Statistics
        </h2>

        <Statistic text='Good' amount={good}/>
        <Statistic text='Neutral' amount={neutral}/>
        <Statistic text='Bad' amount={bad}/>
        <Statistic text='Total' amount={total} />
        <Statistic text='Average' amount={(good - bad)/total} />
        <Statistic text='Positive %' amount={good/total} />
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)