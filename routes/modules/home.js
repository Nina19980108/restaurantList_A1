const express = require('express')
const router = express.Router()
const restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  let sort = req.query.sort
  const userId = req.user._id
  res.locals.userName = req.user.name
  switch (sort) {
    case 'A -> Z':
      restaurant.find({ userId })
        .lean()
        .sort({ name: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'Z -> A':
      restaurant.find({ userId })
        .lean()
        .sort({ name: 'desc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'category':
      restaurant.find({ userId })
        .lean()
        .sort({ category: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    case 'location':
      restaurant.find({ userId })
        .lean()
        .sort({ location: 'asc' })
        .then(restaurant => res.render('index', { restaurant, sort }))
        .catch(error => console.error(error))
      return

    default:
      restaurant.find({ userId })
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
  const userId = req.user._id
  return restaurant.find({
    userId,
    $or: [{ name: query }, { name_en: query }, { category: query }]
  })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.error(error))
})

module.exports = router