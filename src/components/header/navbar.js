import React from "react";
import NavBarName from "./navbarname"
import NavBarLink from "./narbarlink";

function NavBar(){
  return (
    <div className="nav-bar">
      <NavBarName />
      <div className="nav-bar-nav">
        <ul className="nav-link-list">
          <li><NavBarLink className="active" href="" >Home</NavBarLink></li>
          <li><NavBarLink href="" >Resume</NavBarLink></li>
          <li><NavBarLink href="" >Services</NavBarLink></li>
          <li><NavBarLink href="" >Blog</NavBarLink></li>
          <li><NavBarLink href="" >Contact</NavBarLink></li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;