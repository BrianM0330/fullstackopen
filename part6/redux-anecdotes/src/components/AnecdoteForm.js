import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import anecService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        console.log("BUTTON",content)
        event.target.anecdote.value = ''
        const newAnecdote = anecService.createAnecdote(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(`You created a new anecdote! ${content}`))
    }

    return (
        <div>
            <h2>Create new </h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input type="text" placeholder="testing" name="anecdote"/>
                </div>
                
                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}

export default AnecdoteForm