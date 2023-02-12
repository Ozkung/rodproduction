const mongoose = require('mongoose')

const text = new mongoose.Schema({
    page: String,
    text: String,
    type: String,
    createDate: String,
    updateDate: String
},
{ collections: "contentHome" })

module.exports = text