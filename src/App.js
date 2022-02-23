import React from 'react'
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="app">


      <div className="app-header">
        <img
          className="app-header-image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>

      {/* Header */}

      <Post />
      {/* Posts */}

      {/* Posts */}

      <h1> Hello Clever Programmers </h1>
    </div>
  );
}

export default App;
