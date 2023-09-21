const mongoose = require('mongoose')
const { MONGODB_URI } = require('../utils/config')

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Could not connect to MongoDB', error)
    process.exit(1)
  }
}
mongoose.set('strictQuery', true)
module.exports = connectDB
