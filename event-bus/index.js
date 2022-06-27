const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const server = express()
server.use(bodyParser.json())

const apiOne = 'http://localhost:4000/events'
const apiTwo = 'http://localhost:4001/events'
const apiThree = 'http://localhost:4002/events'

server.post('/events', (req, res) => {
  const event = req.body

  axios.post(apiOne, event).catch((error) => console.log(error.message))
  axios.post(apiTwo, event).catch((error) => console.log(error.message))
  axios.post(apiThree, event).catch((error) => console.log(error.message))

  res.send({ status: 'OK' })
})

const PORT = 4005

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
