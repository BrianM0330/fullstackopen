import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  return (
    <div>
      <button onClick={good}>Good</button> 
      <button>Neutral</button> 
      <button>Bad</button>
      <button>Reset Stats</button>
      <div>Good {store.getState().good}</div>
      <div>Neutral</div>
      <div>Bad</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
