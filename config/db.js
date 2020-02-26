const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline.bold
    )
  } catch (err) {
    console.log(`Error ${err.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDb
