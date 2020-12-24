import React from 'react';

import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <div className="contact__title">Contact Me</div>
      <div className="contact__description">Let's Connect</div>
      <div className="contact__logos">
        <div className="contact__option">
          <a href="https://www.linkedin.com/in/stevevjo/" target="_blank" rel="noreferrer noopener">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="contact__option">
          <a href={`mailto:steve.v.jo@gmail.com`}>
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
