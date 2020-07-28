const dummy = (blogs) => {
    return 1
  }

const likes = (blogs) => {
    const totalLikes = blogs
        .map(post => post.likes)
        .reduce((sum, likes) => sum + likes)
    return totalLikes
}

  
  module.exports = {
    dummy, likes
  }