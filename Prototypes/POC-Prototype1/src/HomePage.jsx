import Post from './Post.jsx'

function HomePage({ posts }) {
  return (
    <>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </>
  )
}

export default HomePage