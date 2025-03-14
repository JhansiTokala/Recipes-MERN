import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/verify', {
      withCredentials: true  // ✅ Automatically sends Cookies
    })
    .then(response => {
      setUsername(response.data.username);
    })
    .catch(error => {
      console.error('Error fetching user:', error);
      setUsername('');
    });
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:5000/api/logout', {
      withCredentials: true
    })
    .then(() => {
      setUsername('');
      window.location.href = '/login';
    });
  };

  return (
    <div>
      <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
        <img src="/logo.png" alt="Tasty Recipes" width="50" />
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/register">Register</Link> | 
          {username ? (
            <>
              <span>Welcome, {username}!</span> |
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          | <Link to="/createrecipe">CreateRecipe</Link> | 
          <Link to="/recipelist">Recipelist</Link> | 
          <Link to="/about">About Us</Link>
        </nav>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {username ? <h1>Welcome back, {username}!</h1> : <h1>Loading...</h1>}
      </div>
    </div>
  );
}

export default Home;
