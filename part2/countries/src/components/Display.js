import React from 'react'
import CountryPage from './CountryPage'

const Display = ({countries, searchTerm}) => {
    const results = countries.filter
    (country => country.name.toUpperCase().includes(searchTerm.toUpperCase()))
    console.log(results)

    if (searchTerm.length < 1) {
        return (
            <div>
                <h3>Enter your search query!</h3>
            </div>
        )
    }
    else if (results.length > 50) {
        return (
            <div> 
                <h3>
                    Search too broad. Please specify.
                </h3>
            </div>
        )
    }
    else if (results.length === 1) {
        return(
            <CountryPage countries={results}/>
        )
    }
    return (
        <div>
            <h3> Countries found </h3>
            <ul>
                    {results.map(country => 
                    <li key={country.alpha2Code}> 
                        {country.name} 
                    </li>)}
            </ul>
        </div>
    )
}

export default Display