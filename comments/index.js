const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')

const server = express()
server.use(bodyParser.json())
server.use(cors())

const commentsByPostId = {}

server.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  res.send(commentsByPostId[id] || [])
})

server.post('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  const { content } = req.body
  const commentId = randomBytes(4).toString('hex')

  const comments = commentsByPostId[id] || []

  comments.push({ id: commentId, content })

  commentsByPostId[id] = comments

  res.status(201).send(comments)
})

const PORT = 4001

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
