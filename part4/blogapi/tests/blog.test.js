const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const testfile = require('../utils/unit_tests')
const api = supertest(app)

test('HTTP GET to /api/blogs', async () => {
    await api
        .get('/api/blogs/')
        .expect(200)
        .expect('Content-type', /application\/json/)
})

test('The id identifier is configured properly', async () => {
    await api
        .get('/api/blogs/')
        .expect(200)
        const blogs = testfile.blogsInDb()
        expect(blogs[0]).toBeDefined()
})

test('HTTP POST to /api/blogs', async () => {
    const test_entry = {
        title: "testing!",
        author: "Me", 
        url: "nothing",
        likes: 1
    }
    await api
        .post('/api/blogs')
        .send(test_entry)
        .expect(201)

})
afterAll(() => {
    mongoose.connection.close()
  })