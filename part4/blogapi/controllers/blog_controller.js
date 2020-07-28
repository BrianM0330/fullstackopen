const blogRouter = require('express').Router() 
//Sets the default router to /api/blogs so that is the base URL for all routes
const blogModel = require('../models/blogModel')
//Exports the schema and a mongoose model (final line)

blogRouter.get('/', (request, response) => {
    blogModel
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
blogRouter.post('/', (request, response) => {
    const body = request.body

    const blogEntry = new blogModel({
        content: {
            title:body.title,
            author:body.author,
            url:body.url,
            likes:body.likes
        }
    })

    blogEntry.save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = blogRouter