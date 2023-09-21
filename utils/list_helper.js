const totalLikes = blogs => {
  if (blogs.length === 0) return 0

  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

module.exports = {
  totalLikes
}
