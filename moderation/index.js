const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const server = express()
server.use(bodyParser.json())

const api = 'http://localhost:4005/events'

server.post('/events', async (req, res) => {
  const { type, data } = req.body

  if (type === 'CommentCreated') {
    const status = data.content.includes('orange') ? 'rejected' : 'approved'

    await axios.post(api, {
      type: 'CommentModerated',
      data: {
        id: data.id,
        content: data.content,
        postId: data.postId,
        status,
      },
    })
  }

  res.send({})
})

const PORT = 4003

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
