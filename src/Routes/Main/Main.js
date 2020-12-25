import React from 'react';
import Home from '../Home/Home';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './Main.css';
import Quotes from '../../Components/Quotes/Quotes';

function Main() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Contact />
      <Quotes />
      <Footer />
    </div>
  )
}

export default Main;
