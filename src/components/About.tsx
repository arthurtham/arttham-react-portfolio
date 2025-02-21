import '../assets/styles/About.scss';
import imgArthurThamReal from "../assets/images/arthur-tham-real.jpg";

function About() {

  return (
    <div className="container" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about about-item1" id="headshot-div">
            <img id="headshot" src={imgArthurThamReal} alt="Arthur Tham Summer headshot"></img>
          </div>
          <div className="about about-item2">
            <h1>About</h1>
            <p>I am a software engineer and media broadcaster based in the San Francisco Bay Area, California with a computer science Masters and Bachelor's degree from the University of California, Irvine. My experience revolves around back-end web development and deployment using the PHP/MySQL LAMP stack and various cloud platforms. I also assist in media broadcasting as a producer or streaming assistant, utilizing software tools like OBS Studio, Voicemeeter, and VDO.Ninja to create viewing experiences for esports and podcasts.</p>
            <p>I am currently pursing full-time work as a software engineer, software support, or broadcasting support. I hope you will consider me as a candidate for your next project!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;