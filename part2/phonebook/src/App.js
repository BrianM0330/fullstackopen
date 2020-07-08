import React, { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Adam', number: '7082220245'} ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filteredPersons, setFiltered] = useState()

  const addName = (event) => {
    event.preventDefault()
    console.log("Clicked!")

    //if name doesn't exist
    const nameExists = persons.find(bookEntry => bookEntry.name === newName)
    if (nameExists === undefined & newName.length > 0) { 
      const nameEntry = {
        name: newName,
        dateAdded: new Date().toISOString(),
        id: persons.length+1,
        number: newNumber
      }
      setPersons(persons.concat(nameEntry))
      setNewName('')
      setNewNumber('')
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

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filterPersons = (event) => {
    console.log("done")
    const value = event.target.value.toLowerCase()
    const filtered = persons.filter(
      person => person.name.toLowerCase().trim().includes(value)
    )
    setFiltered(filtered)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2> Search </h2>
      <div>
        Filter:
        <input
          onSubmit = {filterPersons}
        />
      </div>

      <h2> Create Entry </h2>
      <Form addName={addName} 
            newName={newName} 
            newNumber={newNumber} 
            handleName={handleNameChange} 
            handleNumber={handleNumberChange}
      />

      <h2>All Entries</h2>
      <Display persons={persons}/>

    </div>
  )
}

export default App