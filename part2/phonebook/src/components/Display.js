import React from 'react'

const noEntryStyle = {color: 'red'}

const namesToDisplay = ({persons}) => {
    if (persons.length > 0) {
        return (
            <div>
                <h2> All Entries </h2>
                <ul>
                    <li>
                        {persons.map(person => <li>{person.name}: {person.number}</li>)}
                    </li>
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