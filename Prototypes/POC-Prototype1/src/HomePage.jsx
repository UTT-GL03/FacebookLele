import { useState, useEffect } from 'react'
import Post from './Post.jsx'

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5984/facebooklele_database/_all_docs?include_docs=true')
      .then(response => response.json())
      .then(data => {
        const posts = data.rows.map(row => row.doc)
        setPosts(posts)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error)
      })
  }, [])

  return (
    <>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </>
  )
}

export default HomePage