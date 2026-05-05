const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser")
const keys = require('./keys/keys')
const mongoose = require('mongoose')
const router = require('./router/router')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
