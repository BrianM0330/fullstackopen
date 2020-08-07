import React, {useEffect} from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import noteService from './services/notes'
import {initializeNotes} from './reducers/noteReducer'
import {useDispatch} from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  export const initializeNotes = () => {
    return async dispatch => {
      const notes = await noteService.getAll()
      dispatch({
        type: 'INIT_NOTES',
        data: notes,
      })
    }
  }

  useEffect(() => {
    dispatch(initializeNotes())  
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App