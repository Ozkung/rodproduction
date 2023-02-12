const mongoose = require('mongoose')

const create = async function(collection, model, data) {

    // console.log('data', data)
 await mongoose.model(collection, model).create(data)
 return 'save data'
}

module.exports = {
    create
}