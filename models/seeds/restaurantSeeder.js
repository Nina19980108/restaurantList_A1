const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const restaurantList = require('../../restaurant.json').results
const restaurant = require('../restaurant')
const User = require('../user')
const db = require('../../config/mongoose')

const SEED_USER = [{
  name: 'rot',
  email: 'rot@email.com',
  password: 'rot',
  seedNum: 0
}, {
  name: 'root',
  email: 'root@email.com',
  password: 'root',
  seedNum: 3
}]

db.once('open', () => {
  SEED_USER.forEach(user => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(user.password, salt))
      .then(hash => {
        return User.create({
          name: user.name,
          email: user.email,
          password: hash,
          seedNum: user.seedNum
        })
      })
      .then(user => {
        const userId = user._id
        for (let i = user.seedNum; i < (user.seedNum + 3); i++) {
          restaurant.create({
            name: restaurantList[i].name,
            name_en: restaurantList[i].name_en,
            category: restaurantList[i].category,
            image: restaurantList[i].image,
            location: restaurantList[i].location,
            phone: restaurantList[i].phone,
            google_map: restaurantList[i].google_map,
            rating: restaurantList[i].rating,
            description: restaurantList[i].description,
            userId
          })
        }
      })
      .then(() => {
        console.log('done')
      })
  })
})