const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const restaurant = require('./models/restaurant')
const bodyParser = require('body-parser')

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

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

app.get('/restaurant/new', (req, res) => {
  res.render('new')
})

app.post('/restaurant/new', (req, res) => {
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  return restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`Restaurant list is on http://localhost:${port}`)
})