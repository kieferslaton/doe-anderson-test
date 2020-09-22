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
  const [activeInfo, setActiveInfo] = useState("name");

  const handleClick = (id) => {
    console.log(id);
    setActiveInfo(id);
  };

  return (
    <div>
      <div className="row w-100 no-wrap">
        <div className="row w-50">
          <img src={user.image} alt="Profile" className="user-image" />
        </div>
        <div className="row w-50 wrap">
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("name")}
              >
                <FaAddressBook className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div className="icon-container" onClick={() => handleClick("address")}>
                <FaMap className="icon-button" />
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("email")}
              >
                <FaEnvelope className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("phone")}
              >
                <FaPhoneAlt className="icon-button" />
              </div>
            </div>
          </div>
          <div className="row w-100">
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("birthday")}
              >
                <FaBirthdayCake className="icon-button" />
              </div>
            </div>
            <div className="w-50 icon">
              <div
                className="icon-container"
                onClick={() => handleClick("login")}
              >
                <FaKey className="icon-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 no-wrap">
        <h2 className="info-header">{activeInfo}</h2>
      </div>
    </div>
  );
};

export default Info;
