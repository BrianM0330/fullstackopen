const express = require('express')
const app = express()

app.use(express.json())


let phoneBook = [  
    {
        name: "Joe",
        number: "6124124",
        id: 1
    },
    {
        name: "Bill",
        number: "214215125",
        id: 2
    },
    {
        name: "Ada",
        number: "6321623",
        id: 3
    },
    {
        name: "Dark",
        number: "615151",
        id: 4
    },
    {
        name: "Mart",
        number: "5515141",
        id: 5
    },
  ]

app.get('/', (request, response) => {
    response.send('<h1> THIS IS THE ROOT! </h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(phoneBook)
})

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})