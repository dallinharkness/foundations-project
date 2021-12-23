const baseURL = 'http://localhost:4545'
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const path = require('path')
const{
    getUser,
    getScores,
    newUser
} = require('controller.js')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '../../home.html'))
  })

// app.get('/api/users', getUser)
// app.post('/api/newuser', newUser)
// app.put('/api/newscores', getScores)


app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))