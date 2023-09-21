/* eslint-disable no-unused-vars */
const Blog = require('../models/blog')

/*
 * Get all Blog post
 */

const getAllBlogs = async (req, res, next) => {
  const blogs = await Blog.find({})

  res.json({ message: 'success', content: blogs })
}

/*
 * Add new Blog post
 */

const postBlog = async (req, res, next) => {
  const blog = req.body
  console.log(blog)
  // Add catch here for mongooseValidation error and catchAsync wrapper when needed
  // See if validation error can be globalized in this file
  const newBlog = await new Blog(blog)
  await newBlog.save()

  res.json({ message: 'success', content: newBlog })
}

module.exports = {
  getAllBlogs,
  postBlog
}
