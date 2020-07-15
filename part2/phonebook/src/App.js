import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import Filter from './components/Filter'
import entryService from './services/entry'

const App = () => {
  const [ people, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filteredPersons, setFiltered] = useState()

  useEffect( () => {
    const interval = setInterval(() => {
      entryService
        .getAll()
        .then(dbInitial => {setPersons(dbInitial.data)})
      console.log("Updating every 5s")
    }, 2000);
    return () => clearInterval(interval)
  }, [])

  const addName = (event) => {
    event.preventDefault()
    console.log("Clicked!")

    //if name doesn't exist
    const nameExists = people.find(bookEntry => bookEntry.name === newName)
    const entryObject = {
      name: newName,
      dateAdded: new Date().toISOString(),
      id: people.length+1,
      number: newNumber
    }

    //-1 from every id because indeces are off. Uses hashing to prevent duplicate IDs
    if ( (people.find(person => person.id === entryObject.id)) !== undefined) {
      entryObject.id = (entryObject.id*10)/2
    }

    if (nameExists === undefined & newName.length > 0) { 
      entryService
        .create(entryObject)
      setPersons(people.concat(entryObject))
      setNewName('')
      setNewNumber('')
      console.log("Entry made:", newName)
    }
    
    else if (newName.length === 0) {
      setNewName('')
      window.alert("Invalid entry")
    }

    else //update entry
      if (nameExists.number === newNumber) {
        window.alert(newName + " Already exists!")
        setNewName('')
        setNewNumber('')
      }
      else {
        console.log("Updating")
        entryService.update(nameExists.id, entryObject)
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
    const filtered = people.filter(
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

      <Display persons={people}/>
    </div>
  )
}

export default App