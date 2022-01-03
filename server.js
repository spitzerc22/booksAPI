const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors')

//USE
app.use(express.json())
app.use('/books', require('./controllers/books-controller'))

//CONNECTING TO DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {console.log('connected to DB')})

app.use(cors())

//ROUTES
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(process.env.PORT, () => {console.log('Listening on', process.env.PORT)})