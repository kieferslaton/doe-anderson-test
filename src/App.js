import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios'
import moment from 'moment'

import Info from './Info'
import Contact from './Contact'

function App() {

  const [user, setUser] = useState(null)

  const getNewUser = () => {
    axios.get('https://www.randomuser.me/api').then(res => {
    let newUser = {}
    let data = res.data.results[0]
    console.log(data)
    newUser.name = `${data.name.title} ${data.name.first} ${data.name.last}`
    newUser.addr1 = `${data.location.street.number} ${data.location.street.name}`
    newUser.addr2 = `${data.location.city}, ${data.location.state} ${data.location.postcode}`
    newUser.country = data.location.country
    newUser.email = data.email
    newUser.phone = data.phone
    newUser.cell = data.cell
    newUser.birthday = moment(data.dob.date).format('MMMM D YYYY')
    newUser.username = data.login.username
    newUser.password = data.login.password
    newUser.image = data.picture.large
    setUser(newUser)
  }).catch(err => console.log(err))
  }

  useEffect(() => {
    getNewUser()
  }, [])

  return (
    <>
    {user ? 
    <div className="container">
      <Info user={user} />
      <Contact />
    </div>
    : ''}
    </>
  );
}

export default App;
