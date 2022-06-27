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
    return <li key={comment.id}>{comment.content}</li>
  })

  return <ul>{renderComments}</ul>
}

export default CommentList
