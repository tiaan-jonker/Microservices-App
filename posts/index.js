const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const server = express()
server.use(bodyParser.json())
server.use(cors())

const posts = {}

server.get('/posts', (req, res) => {
  res.send(posts)
})

server.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title,
  }

  res.status(201).send(posts[id])
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
