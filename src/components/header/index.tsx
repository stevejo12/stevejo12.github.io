import React from 'react';
import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header_wrapper}>
    {/* <header className={`${styles.header_wrapper} middle-spacing`}> */}
      <div className='middle-spacing'>
        <h1 className={styles.header_name}>Steve Vinsensius Jo</h1>
        <div className={styles.header_links}>
          <a href="#" className='noDecoration-link'><h2>Home</h2></a>
          <a href="#projects" className='noDecoration-link'><h2>Projects</h2></a>
          <a href="#education" className='noDecoration-link'><h2>Education</h2></a>
          <a href="#contact" className='noDecoration-link'><h2>Contact</h2></a>
          <a
            href="https://res.cloudinary.com/dsy9zkqp2/image/upload/v1768439316/Steve_Vinsensius_Jo_Resume_UVic.docx_agnkaf.pdf"
            target='_blank'
            rel='noreferrer noopener'
            className='noDecoration-link'
            style={{ color: 'rgb(0, 102, 204)', textDecoration: 'bold'}}
          >
            <h2>Resume</h2>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header