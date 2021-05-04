const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const restaurant = require('./models/restaurant')

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connectec!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

app.get('/restaurant/new', (req, res) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`Restaurant list is on http://localhost:${port}`)
})