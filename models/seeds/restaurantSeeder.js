const restaurantList = require('../../restaurant.json').results
const restaurant = require('../restaurant')
const db = require('../../config/mongoose')

db.once('open', () => {
  restaurantList.forEach(rest => {
    restaurant.create({
      name: rest.name,
      name_en: rest.name_en,
      category: rest.category,
      image: rest.image,
      location: rest.location,
      phone: rest.phone,
      google_map: rest.google_map,
      rating: rest.rating,
      description: rest.description
    })
  })
  console.log('done')
})