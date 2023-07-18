const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: String,
    dob:String,
    email: String,
    password: String
})

const CustomerModel = mongoose.model("customers",CustomerSchema)
module.exports = CustomerModel