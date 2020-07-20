const mongoose = require('mongoose')

//ESTABLISHING CONNECTION
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://brian:${password}@cluster0.pgmh6.mongodb.net/note-app?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })


//ESTABLISHING CONNECTION DONE
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema) //creates a JS object based on parameters. (name: 'Note', schema: "noteSchema")

const note = new Note({
  content: 'HTML is Evil',
  date: new Date(),
  important: true,
})

Note.find({}).then(result => { //prints all the notes stored in the DB thanks to promises
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

/* Note creation code
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) 
*/