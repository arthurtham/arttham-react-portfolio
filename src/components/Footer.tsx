import React from "react";
import SocialLinks from "./SocialLinks";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <SocialLinks/>
      </div>
      <p>This base portfolio was designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;