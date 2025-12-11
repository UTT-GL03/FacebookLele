import { useState, useEffect } from 'react'
import Post from './Post.jsx'

function HomePage() {
  const [posts, setPosts] = useState([])
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()

  useEffect(() => {
    //fetch('http://localhost:5984/facebooklele_database/_all_docs?include_docs=true')
    fetch('http://localhost:5984/facebooklele_database/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { date: { "$gt": null } },
          sort: [{ date: "desc" }],
          fields: [ "_id", "title", "author", "date", "id", "content", "commentsSection" ],
          bookmark: requestedBookmark,
          limit: 20
        })
    })
      .then(response => response.json())
      .then(data => {

        // Ajouter les nouveaux posts aux posts existants
        setPosts(prevPosts => [...prevPosts, ...data.docs])
        // Sauvegarder le bookmark pour la prochaine page
        setNextBookmark(data.bookmark)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error)
      })
  }, [requestedBookmark])

  return (
    <>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
      
      {nextBookmark && (
        <button 
          type="button" 
          onClick={() => setRequestedBookmark(nextBookmark)}
          className="load-more-btn"
        >
          Charger plus de posts
        </button>
      )}
    </>
  )
}

export default HomePage