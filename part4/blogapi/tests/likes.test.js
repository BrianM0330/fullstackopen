const testFile = require('../utils/unit_tests')

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url:
      "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

const singleBlog = [
	{
		_id: '5a422bc61b54a676234d17a9',
		title: 'The One & Only',
		author: 'Chesney Hawkes',
		url: 'https://www.youtube.com/watch?v=ZvMsp7s78Do',
		likes: 1,
		__v: 0
	}
]

describe('Total likes', () => {
    test('Total likes for all posts', () => {
        const result = testFile.likes(blogs)
        expect(result).toBe(36)
    })

    test('Total likes for a single blog', () => {
        const result = testFile.likes(singleBlog)
        expect(result).toBe(1)
    })

    test('Blog with the most likes', () => {
      const result = Math.max(...blogs.map(blogPost => blogPost.likes), 0)
      const theBlog = blogs.filter(blog => blog.likes === result)
      expect(result).toBe(12)
    })
})