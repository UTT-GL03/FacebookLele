import { useState, useEffect } from 'react'
import Post from './Post.jsx'

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data.posts)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error)
      })
  }, [])

  return (
    <>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </>
  )
}

export default HomePage