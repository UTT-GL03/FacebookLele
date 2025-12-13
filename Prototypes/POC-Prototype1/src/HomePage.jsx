import { useState, useEffect } from 'react'
import Post from './Post.jsx'

function HomePage() {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [filteredAuthors, setFilteredAuthors] = useState([])
  const [authorSearch, setAuthorSearch] = useState("")
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()

  // Récupérer la liste des auteurs uniques
  useEffect(() => {
    fetch('http://localhost:5984/facebooklele_database/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { author: { "$gt": null } },
        fields: ["author"],
        limit: 3000
      })
    })
      .then(response => response.json())
      .then(data => {
        const uniqueAuthors = [...new Set(data.docs.map(doc => doc.author))]
        const sorted = uniqueAuthors.sort()
        setAuthors(sorted)
        setFilteredAuthors(sorted)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des auteurs:', error)
      })
  }, [])

  // Filtrer les auteurs selon la recherche
  useEffect(() => {
    if (authorSearch) {
      const filtered = authors.filter(author => 
        author.toLowerCase().includes(authorSearch.toLowerCase())
      )
      setFilteredAuthors(filtered)
    } else {
      setFilteredAuthors(authors)
    }
  }, [authorSearch, authors])

  // Récupérer les posts (avec filtre optionnel par auteur)
  useEffect(() => {
    const selector = { date: { "$gt": null } }
    if (selectedAuthor) {
      selector.author = selectedAuthor
    }

    fetch('http://localhost:5984/facebooklele_database/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: selector,
        sort: [{ date: "desc" }],
        fields: ["_id", "title", "author", "date", "id", "content", "commentsSection"],
        bookmark: requestedBookmark,
        limit: 20
      })
    })
      .then(response => response.json())
      .then(data => {
        setPosts(prevPosts => [...prevPosts, ...data.docs])
        setNextBookmark(data.bookmark)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error)
      })
  }, [requestedBookmark, selectedAuthor])

  // Fonction pour changer d'auteur
  const handleAuthorChange = (e) => {
    const author = e.target.value
    setSelectedAuthor(author)
    setPosts([])
    setRequestedBookmark(undefined)
    setNextBookmark(undefined)
  }

  return (
    <>
      {/* Filtre par auteur avec recherche */}
      <div className="author-filter">
        <label htmlFor="author-search">Rechercher un auteur :</label>
        <input
          id="author-search"
          type="text"
          placeholder="Taper pour rechercher..."
          value={authorSearch}
          onChange={(e) => setAuthorSearch(e.target.value)}
        />
        
        <label htmlFor="author-select">Auteur :</label>
        <select 
          id="author-select"
          value={selectedAuthor} 
          onChange={handleAuthorChange}
        >
          <option value="">Tous les auteurs ({filteredAuthors.length})</option>
          {filteredAuthors.map(author => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      {/* Affichage du filtre actif */}
      {selectedAuthor && (
        <p className="filter-info">
          Affichage des posts de : <strong>{selectedAuthor}</strong>
        </p>
      )}

      {/* Liste des posts */}
      {posts.length === 0 ? (
        <p>Chargement...</p>
      ) : (
        posts.map((p) => (
          <Post key={p._id} post={p} />
        ))
      )}
      
      {/* Bouton charger plus */}
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