const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')
const connectDB = require('./utils/connectDB')

connectDB()
  .then(() => {
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`)
    })
  })
  .catch(error => {
    logger.error('Failed to connect to MongoDB:', error)
  })
