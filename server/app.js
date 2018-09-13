const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('homepage')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}...`)
})