import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

function PostList() {
  const [posts, setPosts] = useState({})
  const api = 'http://localhost:4000/posts'

  const fetchPosts = async () => {
    const res = await axios.get(api)

    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div className='card post-card' key={post.id}>
        <div className='card-body'>
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    )
  })

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderPosts}
    </div>
  )
}

export default PostList
