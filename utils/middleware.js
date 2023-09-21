const morgan = require('morgan')
const AppError = require('../utils/AppError')

/**
 * MORGAN
 */
const setupMorgan = app => {
  morgan.token('body', function (req) {
    return JSON.stringify(req.body)
  })

  const morganLogger = morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
  )
  app.use(morganLogger)
}

/**
 * BAD URL
 */
const urlNotFound = (req, res, next) => {
  const err = new AppError(
    `The URL ${req.originalUrl} was not found on this server.`,
    404
  )
  next(err)
}

module.exports = {
  setupMorgan,
  urlNotFound
}
