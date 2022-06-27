const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()
server.use(bodyParser.json())
server.use(cors())

const posts = {}
// sample structure
/*
const posts = {
  id {
    id: number, 
    title: string,
    comments: [
      {commentId: number, content: string}
    ]
  }
}
*/

server.get('/posts', (req, res) => {
  res.send(posts)
})

server.post('/events', (req, res) => {
  const { type, data } = req.body

  if (type === 'PostCreated') {
    const { id, title } = data
    posts[id] = { id, title, comments: [] }
  }

  if (type === 'CommentCreated') {
    const { id, content, postId } = data
    const post = posts[postId]
    post.comments.push({ id, content })
  }

  res.send({})
})

const PORT = 4002

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
