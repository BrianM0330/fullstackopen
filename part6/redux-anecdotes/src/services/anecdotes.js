import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    console.log("GETTING ALL")
    const response = await axios.get(baseUrl)
    return response.data
}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const createAnecdote = async (content) => {
    const object = {content, id: generateId(), votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default {getAll, createAnecdote}