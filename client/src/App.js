import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {
  return (
    <div className='container-sm'>
      <h1>Add a post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  )
}

export default App
