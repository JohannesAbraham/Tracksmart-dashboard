import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './pages/homepage'
import Trackpage from './pages/trackpage';
import './App.css'
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/auth/me', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setUser(data.user); // use this in your app
        } else {
          window.location.href = 'http://localhost:5000/auth/google'; // not logged in
        }
      })
      .catch(() => {
        window.location.href = 'http://localhost:5000/auth/google';
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!user) return <h2>Logging in...</h2>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/trackorder" element={<Trackpage/>}/>
      </Routes>
    </Router>
  )
}

export default App
