import React from 'react';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h4>Steve Vinsensius Jo</h4>
        <h2>I am a Web Developer</h2>
      </div>
      <div className="home__socials">
        <div className="home__icon">
          <a href="https://www.linkedin.com/in/stevevjo/" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="home__icon">
          <a href="https://www.instagram.com/josteve4" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="home__start">
        <a href="#about">Let's Get to Know me <i className="fas fa-terminal"></i></a>
      </div>
    </div>
  )
}

export default Home;
