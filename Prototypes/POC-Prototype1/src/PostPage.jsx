import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [open, setOpen] = useState(false)  // <-- état du menu déroulant

  useEffect(() => {
    fetch(`http://localhost:5984/facebooklele_database/${id}`)
      .then(response => response.json())
      .then(post => {
        setPost(post)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error)
      })
  }, [id])

  if (!post) {
    return <p>Chargement...</p>
  }

  return (
    <div className="post-page">
      <h2>{post.title}</h2>

      <p className="post-meta">
        Publié par {post.author} le {post.date}
      </p>

      <p>{post.content}</p>

      {post.image && <img src={post.image} alt={post.title} />}

      {/* Section Commentaires */}
      {post.commentsSection && post.commentsSection.length > 0 && (
        <div className="comments-section">
          <button
            onClick={() => setOpen(!open)}
            className="accordion-btn"
          >
            Commentaires ({post.commentsSection.length})
            <span className={`arrow ${open ? "open" : ""}`}>▼</span>
          </button>

          <div className={`accordion-content ${open ? "show" : ""}`}>
            {post.commentsSection.map((comment, index) => (
              <div key={index} className="comment">
                <p className="comment-author">{comment.authorscomments}</p>
                <p>{comment.comments}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Link to="/" className="back-button">
        Retour
      </Link>
    </div>
  );
}

export default PostPage