import React, { useState } from 'react'
import axios from 'axios'

function CommentCreate({ postId }) {
  const [content, setContent] = useState('')
  const api = 'http://localhost:4001/posts'

  const handleChange = (evt) => {
    setContent(evt.target.value)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    await axios.post(`${api}/${postId}/comments`, {
      content,
    })

    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>New comment</label>
          <input
            value={content}
            onChange={handleChange}
            type='text'
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
