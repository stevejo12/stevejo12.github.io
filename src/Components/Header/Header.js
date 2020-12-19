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
            <div className="header__sidebarOption"><button>Home</button></div>
            <div className="header__sidebarOption"><button>About</button></div>
            <div className="header__sidebarOption"><button>CV</button></div>
          </div>
        </div>
        <div className={`header__menu`}>
          <div className="header__option"><button>Home</button></div>
          <div className="header__option"><button>About</button></div>
          <div className="header__option"><button>Project</button></div>
          <div className="header__option"><button>Contact</button></div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
