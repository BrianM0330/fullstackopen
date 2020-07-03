import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Adam' } ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log("Clicked!")

    //if name doesn't exist
    const nameExists = persons.find(bookEntry => bookEntry.name === newName)
    if (nameExists === undefined & newName.length > 0) { 
      const nameEntry = {
        name: newName,
        dateAdded: new Date().toISOString(),
        id: persons.length+1
      }
      setPersons(persons.concat(nameEntry))
      setNewName('')
      console.log("Entry made:", newName)
    }
    
    else if (newName.length === 0) {
      setNewName('')
      window.alert("Invalid entry")
    }

    else {
      window.alert(newName + " Already exists!")
      setNewName('')
    }
  }

  const handleFormChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          Name:  
          <input 
            value={newName}
            onChange = {handleFormChange}
          />
        </div>

        <div>
          <button type="submit">
            Add
          </button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {persons.map(person => <li>{person.name}</li>
        )}
      </ul>

    </div>
  )
}

export default App