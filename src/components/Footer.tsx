import React from "react";
import SocialLinks from "./SocialLinks";
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <hr></hr>
      <br></br>
      <div>
        <SocialLinks/>
      </div>
      <div id="contact">
        <p><strong>Contact via email: <a href="mailto:arttham@arttham.com">arttham@arttham.com</a></strong></p>
      </div>
      <p>This base portfolio template was designed & built in React by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜<br></br>The "Arthur" avatar is drawn by the talented <a href="https://www.janinecarpena.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Janine Carpena</a>.</p>
    </footer>
  );
}

export default Footer;