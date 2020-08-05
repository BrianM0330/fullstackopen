import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { createStore, combineReducers} from 'redux'
import anecService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

anecService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
)

export default store