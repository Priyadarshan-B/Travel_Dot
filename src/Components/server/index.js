const express = require("express")
const mongoose =require('mongoose')
const cors = require("cors")
const CustomerModel = require('./models/Customer')
const BookModel = require("./models/booking")

const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post("/login", (req, res) => {
    const { name, password } = req.body;
  
    CustomerModel.findOne({ password: password })
      .then((user) => {
        if (user) {
          if (user.name === name) {
            res.json("Success");
          } else {
            res.json("The Password is Incorrect");
          }
        } else {
          res.json("No Record Existed");
        }
      })
      .catch((err) => {
        console.error(err);
        res.json("An error occurred");
      });
  });
  
app.post('/signup',(req, res) => {
    CustomerModel.create(req.body)
    .then(customers =>res.json(customers))
    .catch(err => res.json(err))
})
app.post('/booking',(req, res) => {
  BookModel.create(req.body)
  .then(booking =>res.json(booking))
  .catch(err => res.json(err))
})
app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
  