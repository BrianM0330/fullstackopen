require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Entry = require('./models/phonebook')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))


let phoneBook = []

app.get('/', (request, response) => {
    response.send('<h1> DO YOUR HOMEWORK </h1>')
})

app.get('/api/persons', (request, response) => {
    Entry.find({}).then(people => {
        phoneBook = phoneBook.concat(people)
        response.json(people)
        console.log(phoneBook.length)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)

    Entry.findById(request.params.id).then(singleEntry => {
        response.json(singleEntry)
    })
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

    if (!body.phoneNumber || !body.name) {
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
        const entry = new Entry ({
            name: body.name,
            phoneNumber: body.phoneNumber,
            date: new Date(),
            id: randomID(),
        })

        entry.save().then(savedEntry => {
            response.json(savedEntry)
        })
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phoneBook = phoneBook.filter(person => person.id !== id) //return all values BUT the one that matches id

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
    console.log(`Server listening in port ${PORT}`)
})