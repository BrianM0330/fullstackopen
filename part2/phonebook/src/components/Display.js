import React from 'react'

const namesToDisplay = ({persons}) => {
    return (
        <ul>
            <li>
                {persons.map(person => <li>{person.name}: {person.number}</li>)}
            </li>
        </ul>
    )
}

export default namesToDisplay