const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDb = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDb()

const transactions = require('./routes/transactions')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/transactions', transactions)

const port = process.env.PORT || 5000

app.listen(port, () =>
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
  )
)
