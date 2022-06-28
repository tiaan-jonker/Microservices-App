import React from 'react'

function CommentList({ comments }) {
  // const [comments, setComments] = useState([])
  // const api = 'http://localhost:4001/posts'

  // const fetchComments = async () => {
  //   const res = await axios.get(`${api}/${postId}/comments`)

  //   setComments(res.data)
  // }

  // useEffect(() => {
  //   fetchComments()
  // }, [])

  const renderComments = comments.map((comment) => {
    let content

    if (comment.status === 'approved') {
      content = comment.content
    } else if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation'
    } else if (comments.status === 'rejected') {
      content = 'This comment has been rejected'
    }

    return <li key={comment.id}>{content}</li>
  })

  return <ul>{renderComments}</ul>
}

export default CommentList
