import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import facebookLeleLogo from './assets/logoFacebooklele.svg'
import postsData from './data/sample_data.json'
import './App.css'

function App() {
  const [posts] = useState(postsData.posts);


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
          {/*{post.image && <img src={post.image} alt={post.title} className="post-image" />}*/}
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
      {/*{post.image && <img src={post.image} alt={post.title} />}*/}
      <Link to="/" className="back-button">Retour</Link>
    </div>
  );
}

export default App