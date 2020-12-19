import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <div className="footer__icon">
          <a href="https://www.linkedin.com/in/stevevjo/" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className="footer__icon">
          <a href="https://www.instagram.com/josteve4" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="footer__text"><i className="fas fa-copyright"></i> 2020 - Steve Vinsensius Jo</div>
    </div>
  )
}

export default Footer
