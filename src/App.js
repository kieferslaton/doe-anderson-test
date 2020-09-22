import React, { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import "./App.scss";
import axios from "axios";
import moment from "moment";

import Info from "./Info";
import Contact from "./Contact";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const getNewUser = () => {
    //Make the API call
    axios
      .get("https://www.randomuser.me/api")
      .then((res) => {
        //I don't want to sort through a ton of dot notation once I get into the children, so I'm creating a cleaned-up user object and only passing in the info we need for the app from the API result.
        let newUser = {};
        let data = res.data.results[0];
        newUser.name = `${data.name.title} ${data.name.first} ${data.name.last}`;
        newUser.addr1 = `${data.location.street.number} ${data.location.street.name}`;
        newUser.addr2 = `${data.location.city}, ${data.location.state} ${data.location.postcode}`;
        newUser.country = data.location.country;
        newUser.email = data.email;
        newUser.phone = data.phone;
        newUser.cell = data.cell;
        newUser.birthday = moment(data.dob.date).format("MMMM D YYYY");
        newUser.username = data.login.username;
        newUser.password = data.login.password;
        newUser.image = data.picture.large;
        setUser(newUser);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    getNewUser();
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="container">
            <Info user={user} />
            <Contact user={user} />
          </div>
          <footer>
            <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </footer>
        </>
      ) : error ? (
        <div className="container">
          <div className="message-wrapper">
            <p>
              An error occurred while retrieving the user. Please try again
              later.
            </p>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="message-wrapper">
            <p>Loading...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
