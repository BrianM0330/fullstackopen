import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteForm from './AnecdoteForm'
import {addVote} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('+ vote for', id)
        dispatch(addVote(id))
    }

    return (
        <div>
          {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )}
          <h2>create new</h2>
          <form onSubmit={AnecdoteForm.addAnecdote}>
            <div>
              <input name="anecdote"/>
            </div>
            <button type="submit">
              create
            </button>
          </form>
        </div>
      )
    }


export default AnecdoteList