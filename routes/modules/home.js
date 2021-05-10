const express = require('express')
const router = express.Router()
const restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  let sort = req.query.sort
  switch (sort) {
    case 'A -> Z':
      restaurant.find()
        .lean()
        .sort({ name: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'Z -> A':
      restaurant.find()
        .lean()
        .sort({ name: 'desc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'category':
      restaurant.find()
        .lean()
        .sort({ category: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'location':
      restaurant.find()
        .lean()
        .sort({ location: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    default:
      restaurant.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(restaurant => res.render('index', { restaurant }))
        .catch(error => console.error(error))
      return
  }

})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const query = new RegExp(keyword.trim(), 'i')
  return restaurant.find({
    $or: [{ name: query }, { name_en: query }, { category: query }]
  })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.error(error))
})

module.exports = router