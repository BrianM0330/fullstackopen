const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to mongodb+srv://brian:pokemon@cluster0.rsomm.mongodb.net/blog?retryWrites=true&w=majority')

mongoose.connect("mongodb+srv://brian:pokemon@cluster0.rsomm.mongodb.net/blog?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  // .catch((error) => {
  //   logger.error('error connection to MongoDB:', error.message)
  // })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
