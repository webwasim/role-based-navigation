import React from 'react';
import { isAllowed } from '../auth';
import ToggleSwitch from '../Components/switch';

import { BrowserRouter, Link,  Route } from 'react-router-dom';


const Header = (props) => {
  const user = props.user;

  function toggleNav(e) {
    e.preventDefault();
    const nav = document.querySelector("nav ul");
    const style = getComputedStyle(nav);
    nav.style.display = style.display === 'none' ? 'block' : 'none';
   
  }
    return ( 
      <header className="pad5-25">
        <div className="logo">LOGO</div>
        <nav>
          <ToggleSwitch id="theme" setTheme={props.theme}></ToggleSwitch>
          <div className="title">Welcome {user.name}</div>
            <button id="navToggle"onClick={toggleNav}>
              <svg viewBox="0 0 90 60" width="20" height="20">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
          </button>
              <ul>
              {isAllowed(user, ['can_view_myLink1']) && <li><Link to="/mylink1">MyLink 1</Link></li>}
              {isAllowed(user, ['can_view_myLink2']) && <li><Link to="/mylink2">MyLink 2</Link></li>}
              {isAllowed(user, ['can_view_myLink3']) && <li><Link to="/mylink3">MyLink 3</Link></li>}
              {isAllowed(user, ['can_view_myLink4']) && <li><Link to="/mylink4">MyLink 4</Link></li>}
              </ul>
          </nav>
        </header>
     );
}
 
export default Header;
