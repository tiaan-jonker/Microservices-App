const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const server = express()
server.use(bodyParser.json())
server.use(cors())

const apiEvent = 'http://localhost:4005/events'

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

  comments.push({ id: commentId, content, status: 'pending' })

  commentsByPostId[id] = comments

  axios
    .post(apiEvent, {
      type: 'CommentCreated',
      data: {
        id: commentId,
        content,
        postId: id,
        status: 'pending',
      },
    })
    .catch((error) => console.error(error.message))

  res.status(201).send(comments)
})

server.post('/events', async (req, res) => {
  console.log('Received event: ', req.body.type)

  const { type, data } = req.body

  if (type === 'CommentModerated') {
    const { id, postId, status, content } = data
    const comments = commentsByPostId[postId]

    const comment = comments.find((comment) => {
      return comment.id === id
    })
    comment.status = status

    await axios
      .post(apiEvent, {
        type: 'CommentUpdated',
        data: {
          id,
          content,
          postId,
          status,
        },
      })
      .catch((error) => console.error(error.message))
  }

  res.send({})
})

const PORT = 4001

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
