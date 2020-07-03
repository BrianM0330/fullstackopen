import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Note from './components/Note'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('This is a new note!')
  const [showAll, setShowAll] = useState(true)

  //Sends a noteObject using state from newNote object
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length +1,
    }
    setNotes(notes.concat(noteObject)) //Adds note to the notes array
    setNewNote('')
    console.log('Button clicked!', event.target)
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  //Const built with expression
  const notesToShow = showAll
  ? notes //if true, show notes
  : notes.filter(note => note.important) //else, filter

  return (
    <div>
      <h1>Notes</h1>
      
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
      {notes.map(note => 
          <Note key={note.id} note={note} />
      )}
      </ul>

      <form onSubmit={addNote}> 
        <input 
        value={newNote}
        onChange={handleNoteChange}
        />

      <button type="submit">
        Click to save!
      </button>
      </form>

    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)