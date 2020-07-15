import axios from 'axios'
const baseUrl = 'http://localhost:3001/people'

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

export default {getAll, create, update}