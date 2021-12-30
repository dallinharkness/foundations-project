const express = require('express')
const cors = require('cors')


const app = express()


app.use(cors())
app.use(express.json())

app.get("/api/highscore", (req, res) => {
    const urHighscore = ["UFOjumper4756: 2456"]
    
    res.status(200).send(urHighscore);
    
  });

  app.post("/api/feedback", (req, res) => {
    const thankYou = ["Thank you for your feedback!"]
    
    res.status(200).send(thankYou);
    
  });






app.listen(5500, () => {
    console.log('You are on port 4545')
})
