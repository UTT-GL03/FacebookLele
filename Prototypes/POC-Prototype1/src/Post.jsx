import { Link } from 'react-router-dom'

function Post({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="post-link">
      <div className="post">
        <div className="post-header">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-meta">
            Publié par {post.author} le {post.date}
          </p>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          {/* {post.image && <img src={post.image} alt={post.title} className="post-image" />} */}
        </div>
      </div>
    </Link>
  )
}

export default Post