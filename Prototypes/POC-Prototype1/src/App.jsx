import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import facebookLeleLogo from './assets/logoFacebooklele.png'
import HomePage from './HomePage.jsx'
import PostPage from './PostPage.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="top-bar">
          <Link to="/">
            <img src={facebookLeleLogo} className="logo" alt="FacebookLele logo" />
          </Link>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <button className='create-post-button'>Créer un Post</button>
      </header>
      <main className="posts-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App