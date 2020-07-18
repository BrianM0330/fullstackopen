const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const unknownEndpoint = (request, response) => {
    response.status(400).send({
        error: "Unknown endpoint"
    })
}

let phoneBook = []
app.use(unknownEndpoint)

app.get('/', (request, response) => {
    response.send('<h1> DO YOUR HOMEWORK </h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(phoneBook)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) //Turn the URL {:id}
    const thePerson = phoneBook.find(person => person.id === id)

    if (thePerson)
        response.send(thePerson)
    else
        response.status(404).end()
})

app.get('/info', (request, response) => {
    let timestamp = ''
    let date_ob = new Date()
    timestamp = timestamp + date_ob.getTime()
    response.send(
    `<div> Phonebook has info for ${phoneBook.length} people </div>
    
    <div> Current time ${timestamp} </div>`
    )
})

const randomID = () => {
    const initialVal = phoneBook.length > 0
        ? Math.floor(Math.random() * 99999)
        : 0
    return initialVal
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.number || !body.name) {
        return response.status(400).json({
            error: "Missing phone number or name field"
        })
    }

    else if (phoneBook.find(entry => entry.name === body.name)) {
        return response.status(400).json({
            error: "This person already exists!"
        })
    }

    else {
        const newEntry = {
            name: body.name,
            number: body.number,
            date: new Date(),
            id: randomID(),
        }
    
        phoneBook = phoneBook.concat(newEntry)
        response.json(newEntry)
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phoneBook = phoneBook.filter(person => person.id !== id) //return all values BUT the one that matches id

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})