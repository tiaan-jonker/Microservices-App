const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const server = express()
server.use(bodyParser.json())

const apiPosts = 'http://localhost:4000/events'
const apiComments = 'http://localhost:4001/events'
const apiQuery = 'http://localhost:4002/events'
const apiModeration = 'http://localhost:4003/events'

server.post('/events', (req, res) => {
  const event = req.body

  axios.post(apiPosts, event).catch((error) => console.log(error.message))
  axios.post(apiComments, event).catch((error) => console.log(error.message))
  axios.post(apiQuery, event).catch((error) => console.log(error.message))
  axios.post(apiModeration, event).catch((error) => console.log(error.message))

  res.send({ status: 'OK' })
})

const PORT = 4005

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
