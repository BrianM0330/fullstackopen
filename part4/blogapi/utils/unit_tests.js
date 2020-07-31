const Blog = require('../models/blogModel')
const User = require('../models/user')

const dummy = (blogs) => {
    return 1
  }

const likes = (blogs) => {
    const totalLikes = blogs
        .map(post => post.likes)
        .reduce((sum, likes) => sum + likes)
    return totalLikes
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
	return blogs.map(blog => blog.toJSON())
}

  
  module.exports = {
    dummy, likes, blogsInDb, usersInDb
  }