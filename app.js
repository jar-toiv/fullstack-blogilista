const express = require('express')
const cors = require('cors')
const { setupMorgan, urlNotFound } = require('./utils/middleware')
const cookieParser = require('cookie-parser')

const blogRouter = require('./routes/blogsRoutes')

const app = express()

app.use(cookieParser())
app.use(express.static('public')) // Prevents fav ico error

app.use(cors())
app.use(express.json())

//¤ DEV log =====================================================================================
setupMorgan(app)
//¤ =============================================================================================

//¤ Routes ======================================================================================
app.use('/api/v1/blog', blogRouter)
//¤ =============================================================================================

//¤ Route for bad url ===========================================================================
app.all('*', urlNotFound)
//¤ =============================================================================================

module.exports = app
