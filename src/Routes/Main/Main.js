import React from 'react';
import Home from '../Home/Home';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './Main.css';

function Main() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main;
