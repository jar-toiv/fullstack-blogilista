const totalLikes = blogs => {
  if (blogs.length === 0) return 0

  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = blogs => {
  const favorite = blogs.reduce(
    (max, blog) => (blog.likes > max.likes ? blog : max),
    blogs[0]
  )

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}
module.exports = {
  totalLikes,
  favoriteBlog
}
