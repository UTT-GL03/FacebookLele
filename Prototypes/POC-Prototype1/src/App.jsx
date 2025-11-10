import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import facebookLeleLogo from './assets/logoFacebooklele.svg'
import postsData from './data/sample_data.json'
import HomePage from './HomePage.jsx'
import PostPage from './PostPage.jsx'
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

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">
          <img src={facebookLeleLogo} className="logo" alt="FacebookLele logo" />
        </Link>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <button className='create-post-button'>Créer un Post</button>
    </header>
  );
}

export default App;