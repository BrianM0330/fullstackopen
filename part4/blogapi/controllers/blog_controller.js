const blogRouter = require('express').Router() 
//Sets the default router to /api/blogs so that is the base URL for all routes
const Blog = require('../models/blogModel')
//Exports the schema and a mongoose model (final line)
const User = require('../models/userModel')

blogRouter.get('/', async (request, response) => {
  const blogs = await 
                  Blog.find({}).populate('user', {username:1, name:1})
  response.json(blogs.map(blog => blog.toJSON()))
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog)
    response.json(blog.toJSON)
  else
    response.status(404).end()
})
  
blogRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.token || !body.token.id) {
    return response.status(401).json({error: 'token missing or invalid'})
  }

  const user = await User.findById(body.token.id)

  const blogEntry = new Blog({
    title:body.title,
    author:body.author,
    url:body.url,
    likes:body.likes,
    user: user._id
  })

  if (!blogEntry.likes) {
    blogEntry.likes = 0
  }

  if (!blogEntry.title || !blogEntry.url) {
    return response.status(400).end()
  }

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  response.json(savedBlog.toJSON)
})

  module.exports = blogRouter