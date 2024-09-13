require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

let github = {
    name: "Nikhil Aswal",
    age: 20
}

app.get('/github/nikhilaswal03', (req, res) => {
    res.json(github)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('nikhildotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})