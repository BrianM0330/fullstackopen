import React from 'react'
import {useDispatch} from 'react-redux'
import {setFilter} from '../reducers/filterReducer.js'

const Filter = () => {
    const dispatch = useDispatch()
    const handleFilterChange = (event) => { //eventhandler
        dispatch(setFilter(event.target.value))
    }

    return (
        <div>
            Filter <input type="text" onChange={handleFilterChange} />
        </div>
    )
}

export default Filter