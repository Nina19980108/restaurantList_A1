const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Restaurant list is on http://localhost:${port}`)
})