const express = require('express')
const blogController = require('../controllers/blogsController')

const router = express.Router()

//¤ All blogs and Post blog
router.route('/').get(blogController.getAllBlogs).post(blogController.postBlog)

module.exports = router
