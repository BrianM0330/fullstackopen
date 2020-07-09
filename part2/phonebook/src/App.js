import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filteredPersons, setFiltered] = useState()

  useEffect( () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('Promise completed!')
      console.log(response.data)
    })
  })

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

  const handleName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleEvent = (event) => {
    console.log(event.target.value)
    setFiltered=(event.target.value)
  }

  const filterPersons = (event) => {
    const value = event.target.value.toLowerCase()
    const filtered = persons.filter(
      person => person.name.toLowerCase().trim().includes(value)
    )
    setFiltered(filtered)
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <h3> Search </h3>
      <Filter onChange={filterPersons}/>

      <h3> Create Entry </h3>
      <Form addName={addName} 
            newName={newName} 
            newNumber={newNumber} 
            handleName={handleName} 
            handleNumber={handleNumber}
      />

      <Display persons={persons}/>
    </div>
  )
}

export default App