import React from "react";
import SocialLinks from "./SocialLinks";
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/arthur-tham-profile-yellow.jpg';

function Main() {

  return (
    <div className="container" id="main-container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <SocialLinks/>
          <h1>Arthur Tham</h1>
          <p>Software Engineer & Broadcast Expert</p>

          <SocialLinks mobile={true} />
        </div>
      </div>
    </div>
  );
}

export default Main;