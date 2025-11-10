import { Link, useParams } from 'react-router-dom'

function PostPage({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Post introuvable</p>;
  }

  return (
    <div className="post-page">
      <h2>{post.title}</h2>
      <p className="post-meta">
        Publié par {post.author} le {post.date}
      </p>
      <p>{post.content}</p>
      {/* {post.image && <img src={post.image} alt={post.title} />} */}
      <p>{post.comment}</p>
      <Link to="/" className="back-button">RetourPP</Link>
    </div>
  )
}

export default PostPage