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

module.exports = router