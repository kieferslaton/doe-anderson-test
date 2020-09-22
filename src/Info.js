import React, { useState } from "react";
import {
  FaAddressBook,
  FaMap,
  FaEnvelope,
  FaPhoneAlt,
  FaBirthdayCake,
  FaKey,
} from "react-icons/fa";

const Info = ({ user }) => {
  //Store reference to whatever info we want to display in the header
  const [activeInfo, setActiveInfo] = useState("Name");

  //Takes reference from each div and passes it in
  const handleClick = (id) => {
    setActiveInfo(id);
  };

  return (
    <div className="info">
      <div className="row w-100 no-wrap">
        <div className="row w-50">
          <img src={user.image} alt="Profile" className="user-image" />
        </div>
        <div className="row w-50 wrap">
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Name")}
              >
                <FaAddressBook className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Address")}
              >
                <FaMap className="icon-button" />
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Email")}
              >
                <FaEnvelope className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Phone")}
              >
                <FaPhoneAlt className="icon-button" />
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Birthday")}
              >
                <FaBirthdayCake className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("Login")}
              >
                <FaKey className="icon-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 no-wrap header-wrapper">
        <div className="info-header">
          {
            //For a couple of these headers, it looks much cleaner to display on multiple lines. That's what this logic is going with several ternary operators
            activeInfo === "Phone" ? (
              <>
                <strong>Phone</strong>: {user.phone}
                <br />
                <strong>Cell</strong>: {user.cell}
              </>
            ) : activeInfo === "Login" ? (
              <>
                <strong>Username</strong>: {user.username}
                <br />
                <strong>Password</strong>: {user.password}
              </>
            ) : activeInfo === "Address" ? (
              <>
                <strong>Address</strong> : {user.addr1}
                <br />
                {user.addr2}, {user.country}
              </>
            ) : (
              <>
                <strong>{activeInfo}</strong>: {user[activeInfo.toLowerCase()]}
              </>
            )
          }
        </div>
      </div>
      <div className="row w-100 no-wrap">
        <div className="info-blurb">
          <p>
            Hi! My name is {user.name}. I am from {user.country}. If you need to
            reach me, you can do so by emailing me at {user.email} or calling me
            at {user.phone}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
