const mongoose = require('mongoose')

// Get all data
const find = async function(collection, model) {
    let getAll = await mongoose.model(collection, model).find()
    return getAll
}

// Get some data
const findOne = async function(collection, model, object) {
    let findOne = await mongoose.model(collection, model).find(object)
    return findOne
}

// Save data
const create = async function(collection, model, data) {
 await mongoose.model(collection, model).create(data)
 return 'save data'
}


module.exports = {
    create,
    find,
    findOne
}