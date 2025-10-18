import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import facebookLeleLogo from './assets/logoFacebooklele.svg'
import './App.css'

function App() {
  const [posts] = useState([
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
    <Router>
      <Header />
      <main className="posts-container">
        <Routes>
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/post/:id" element={<PostPage posts={posts} />} />
        </Routes>
      </main>
    </Router>
  );
}

function Header(){
  return (
    <header className="header">
      <div className="top-bar">
          <Link to="/">
          <img src={facebookLeleLogo} className="logo" alt="FacebookLele logo" />
        </Link>
        <input type="text" placeholder="Search..." className="search-bar" />
        {/* Faire un nav bar ici peut-être*/}
      </div>
        <button className='create-post-button'>Créer un Post</button>
    </header>
  );
}

function HomePage({ posts }) {
  return (
    <>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </>
  );
}


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
          {post.image && <img src={post.image} alt={post.title} className="post-image" />}
        </div>
      </div>
    </Link>
  );
}

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
      {post.image && <img src={post.image} alt={post.title} />}
      <Link to="/" className="back-button">Retour</Link>
    </div>
  );
}

export default App