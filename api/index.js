const express = require('express')
const app = express()
const { default: mongoose } = require('mongoose')
const moment = require('moment')
const text = require('./model/text')
const user = require('./model/user')
const {create, find, findOne} = require('./helper/helper')

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

app.post('/login', async function (req, res) {
  const { username, password } = req.body
  let finder = await findOne('users', user, {username: username})
  console.log('finder', finder)
  if(finder[0].password == password) return res.json({message:finder[0]._id})
  else res.send('Something Worng')
})

app.route('/textHome')
  .get(async function (req, res) {
    let obj = await find('contentHome', text)
    return res.json({object: obj})
  }) 
  .post(async function (req, res) {
    const { message , link, type } = req.body
    let data = {
      page: link,
      text: message,
      type: type,
      createDate: moment().format('YYYY-MM-DD|hh:mm:ss'),
      updateDate: moment().format('YYYY-MM-DD|hh:mm:ss')
    }
    await create('contentHome', text, data)
    
    res.send('Sucess')

  }
) 

module.exports = app
