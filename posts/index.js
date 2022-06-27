const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const server = express()
server.use(bodyParser.json())
server.use(cors())

const apiEvent = 'https://localhost:4005/events'

const posts = {}

server.get('/posts', (req, res) => {
  res.send(posts)
})

server.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title,
  }

  await axios
    .post(apiEvent, {
      type: 'PostCreated',
      data: {
        id,
        title,
      },
    })
    .catch((error) => console.error(error.message))

  res.status(201).send(posts[id])
})

server.post('/events', (req, res) => {
  console.log('Received event: ', req.body.type)
  res.send({})
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
