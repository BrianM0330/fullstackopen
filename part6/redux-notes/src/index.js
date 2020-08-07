import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' 
import App from './App'
import noteReducer, {initializeNotes} from './reducers/noteReducer'
import noteService from './services/notes'
import store from './store'


noteService.getAll().then(notes => 
  store.dispatch(initializeNotes(notes))  
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)