import React from 'react';
import Home from '../Home/Home';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import './Main.css';

function Main() {
  return (
    <div className="main">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  )
}

export default Main;
