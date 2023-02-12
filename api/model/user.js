const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username: String,
    password: String,
    email: String
},
{ collections: "users" })

module.exports = user