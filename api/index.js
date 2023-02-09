const express = require('express')
const app = express()
const { default: mongoose } = require('mongoose')

mongoose.set('strictQuery', false)
// Mongo DB Connections

function connect() {
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((response) => {
      console.log('MongoDB Connection Succeeded.')
    })
    .catch((error) => {
      console.log('Error in DB connection: ' + error)
    })
}
connect()

app.use(express.json())
app.get('/hello', (req, res) => {
  res.json({ message: process.env.EMAIL_USER })
})

app.post('/login', (req, res) => {
  const { user, pass } = req.body
  res.send(req.body)
})

app.get('/textHome', (req, res) => {
  let obj = {
    title1: 'Test1',
    title2: 'test2',
  }
  res.json({ message: obj })
})

module.exports = app
