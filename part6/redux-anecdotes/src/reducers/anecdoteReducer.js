import anecService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const addVote = id => {
  return {
    type: 'VOTE',
    data: {id}
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecService.createNew(content)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      let target = state.find(p => p.id === action.data.id)
      console.log("STATE!", state)
      target = {...target, votes: target.votes +1}
      return state
        .map(p => (p.id !== action.data.id ? p: target))
    case 'INIT_ANECDOTE':
      return action.data
    case 'ADD_ANECDOTE':
      return state.concat(asObject(action.content))
    default:
      return state
  }
}

export default reducer