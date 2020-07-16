import React from 'react'
import entryService from '../services/entry'

const noEntryStyle = {color: 'red'}

const namesToDisplay = ({persons}) => {
    if (persons.length > 0) {
        return (
            <div>
                <h2> All Entries </h2>
                <ul>
                    {persons.map(person => 
                    <li key={person.id} className='person'>
                        {person.name} ({person.id}): {person.number}   
                        <button onClick={() => entryService.toDelete(person.id)}>
                            Delete
                        </button>
                    </li>)}
                </ul>
            </div>
        )
    }

    else {
        const element = <h3 style={noEntryStyle}> No Entries </h3>
        return element
    }
}

export default namesToDisplay