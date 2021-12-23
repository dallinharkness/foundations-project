const baseURL = 'http://localhost:4545'
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env

const{
    getUser,
    getScores,
    newUser
} = require('controller.js')

const app = express()

app.use(express.json())
app.use(cors())


app.get('/api/users', getUser)
app.post('/api/newuser', newUser)
app.put('/api/newscores', getScores)


app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`))