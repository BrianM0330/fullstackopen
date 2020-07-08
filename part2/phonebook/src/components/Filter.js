import React from 'react'

const Filter = ({onChange}) => {
    return (
        <form>
            Filter:
            <input 
                type="text"
                onChange={onChange}
            />
        </form>
    )
}

export default Filter