import React, { useState } from 'react';

import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const handleOptionClicked = (respState, callback) => {
    setOpen(respState);
    callback();
  }

  // TO DO:
  // make burgerMenu responsive to window width (700px)

  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__text"><h1>Steve</h1></div>
        <div className={`header__burgerMenu hidden`}>
          <i className="fas fa-bars fa-2x" onClick={() => setOpen(true)}></i>
          <div className="header__sidebar" style={{ visibility: open ? 'visible' : 'hidden' }}>
            <div className="header__sidebarClose"><i className="fas fa-times" onClick={() => handleOptionClicked(false, () => {})}></i></div>
            <div className="header__sidebarOption"><a href="#home">Home</a></div>
            <div className="header__sidebarOption"><a href="#about">About</a></div>
            <div className="header__sidebarOption"><a href="#contact">Contact</a></div>
          </div>
        </div>
        <div className={`header__menu`}>
          {/* scroll to top 0 when hit home (?) */}
          <div className="header__option"><a href="#home">Home</a></div>
          <div className="header__option"><a href="#about">About</a></div>
          <div className="header__option"><a href="#contact">Contact</a></div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
