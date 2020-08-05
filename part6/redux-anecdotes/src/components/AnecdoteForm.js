import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'


const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createAnecdote(content))
        event.target.anecdote.value = ''

        dispatch(setNotification(`You created a new anecdote! ${content}`))
    }

    return (
        <div>
            <h2>Create new </h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote"/>
                </div>
            </form>
            <button type="submit">
                create
            </button>
        </div>
    )
}

export default AnecdoteForm