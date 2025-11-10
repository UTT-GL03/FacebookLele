import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.posts.find((p) => p.id === Number(id))
        setPost(foundPost)
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
      {post.comment && <p>{post.comment}</p>}
      <Link to="/" className="back-button">Retour</Link>
    </div>
  )
}

export default PostPage