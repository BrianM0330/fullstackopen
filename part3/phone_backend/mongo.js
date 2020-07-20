const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log("Not enough args")
    process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://brian:${password}@cluster0.cli3t.mongodb.net/phone-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    dateAdded: Date,
})


const db_entry = mongoose.model('personEntry', personSchema)

if (process.argv.length === 3) {
    db_entry.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry)
        })
        mongoose.connection.close()
    })
}
else { //if > 3 (given name and number)
    const person_object = new db_entry({
        name: name,
        number: number,
        dateAdded: new Date()
    })

    person_object.save().then(result => {
        console.log("Person entered!")
        mongoose.connection.close()
    })
}