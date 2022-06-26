import React, { useState } from 'react'
import axios from 'axios'

function PostCreate() {
  const [title, setTitle] = useState('')
  const api = 'http://localhost:4000/posts'

  const handleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    await axios.post(api, {
      title,
    })

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-group'>
        <label>Title: </label>
        <input
          value={title}
          onChange={handleChange}
          type='text'
          className='form-control'
        />
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
