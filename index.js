require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/angular', (req, res) => {
    res.send('<h1>Angular is powerful frontend framework.</h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})