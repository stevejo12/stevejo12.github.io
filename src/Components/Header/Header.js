import React, { useState } from 'react';

import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const handleOptionClicked = (respState, callback) => {
    setOpen(respState);
    callback();
  }

  return (
    <div className="header">
      <div className="header__text"><h1>Welcome to My Portfolio</h1></div>
      <div className="header__menu">
        <i class="fas fa-bars fa-2x" onClick={() => setOpen(true)}></i>
        {/* the sidebar */}
        <div className="header__sidebar" style={{ visibility: open ? 'visible' : 'hidden' }}>
          <div className="header__sidebarClose"><i class="fas fa-times" onClick={() => handleOptionClicked(false, () => {})}></i></div>
          <div className="header__sidebarOption"><button>Home</button></div>
          <div className="header__sidebarOption"><button>About</button></div>
          <div className="header__sidebarOption"><button>CV</button></div>
        </div>
      </div>
    </div>
  )
}

export default Header;
