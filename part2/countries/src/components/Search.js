import React from 'react'

const Search = ({currSearch, handler}) => {
    return (
        <div>
            <h1>Search for a Country!</h1>
            Find countries: 
            <input 
                value={currSearch}
                onChange={handler}
            />
        </div>
    )
}

export default Search