import { useState } from 'react'
import facebookLeleLogo from './assets/logoFacebooklele.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
  {
    id: 1,
    author: "Alice",
    date: "2025-10-15",
    title: "Mon premier post",
    content: "Voici le contenu de mon premier post.",
    image: null,
  },
  {
    id: 2,
    author: "Bob",
    date: "2025-10-14",
    title: "Deuxième post",
    content: "Un autre post avec un peu plus de texte.",
    image: null,
  },
]);


  return (
    <div className="app">
      <Header />
      <main className="posts-container">
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </main>
    </div>
  );
}

function Header(){
  return (
    <header className="header">
      <div className="top-bar">
          <a href="http://localhost:3000/"> {/* A changer peut-être*/}
            <img src={facebookLeleLogo} className="logo" alt="FacebookLele logo" />
          </a>
        <input type="text" placeholder="Search..." className="search-bar" />
        {/* Faire un nav bar ici peut-être*/}
      </div>
        <button className='create-post-button'>Créer un Post</button>
    </header>
  );
}

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-meta">Publié par {post.author} le {post.date}</p>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt={post.title} className="post-image" />}
      </div>
    </div>
  );
}

export default App