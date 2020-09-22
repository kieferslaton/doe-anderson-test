import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios'

function App() {

  const [user, setUser] = useState(null)

  const getNewUser = () => {
    axios.get('https://www.randomuser.me/api').then(res => setUser(res.data.results)).catch(err => console.log(err))
  }

  useEffect(() => {
    getNewUser()
  }, [])

  return (
    <div className="container">
      {user ? JSON.stringify(user) : 'Error fetching data'}
    </div>
  );
}

export default App;
