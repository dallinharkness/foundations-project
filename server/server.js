const express = require('express')
const cors = require('cors')

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


app.listen(4545, () => {
    console.log('hello there 4545')
})