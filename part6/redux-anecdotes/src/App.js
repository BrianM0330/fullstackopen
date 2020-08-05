import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecService from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect( () => {
    anecService.getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  })
  return (
    <div>
      <Notification />
      <h2> Anecdotes </h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App