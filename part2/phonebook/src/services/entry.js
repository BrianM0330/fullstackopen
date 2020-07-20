import axios from 'axios'
const baseUrl = 'https://still-escarpment-23839.herokuapp.com/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    console.log("Updated")
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const toDelete = (id) => {
    console.log(`Deleting ${id}`)
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, update, toDelete}