import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Display from './components/Display'
import axios from 'axios'

const App = () => {
  const[search, setSearch] = useState('')
  const[countries, setCountries] = useState([])
  
  useEffect(() => {
    console.log("Getting data via effectHook")
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const searchInput = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
    console.log("Current setCountry:", search)
  }            

  return (
    <div>
      <Search currSearch={search} handler={searchInput}/>
      <Display countries={countries} searchTerm={search}/>
    </div>
  )
}

export default App;
