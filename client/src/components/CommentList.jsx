import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CommentList({ postId }) {
  const [comments, setComments] = useState([])
  const api = 'http://localhost:4001/posts'

  const fetchComments = async () => {
    const res = await axios.get(`${api}/${postId}/comments`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>{renderComments}</ul>
}

export default CommentList
