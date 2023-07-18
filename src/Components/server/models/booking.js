const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: String,
    email1: String,
    age: Number,
    gender: String,
    src: String,
    des: String,
    address: String,
    number: String,
    persons: Number,
    fdate: String,
    tdate: String
})

const BookModel = mongoose.model("booking",BookSchema)
module.exports = BookModel