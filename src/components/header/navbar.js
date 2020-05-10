import React from "react";
import NavBarName from "./navbarname";
import NavBarLink from "./narbarlink";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activePage:"Home"
    };
  }

  activeMe(page){
    this.setState({activePage:page});
  }

  render(){
    const navStyle = {textDecoration:"none"};
    return (
      <div className="nav-bar">
        <NavBarName />
        <div className="nav-bar-nav">
          <ul className="nav-link-list">
            <Link style={navStyle} to="/react-gh-pages/">
              <li><NavBarLink 
                    className={this.state.activePage === "Home"? "active":"" }
                    onClick={this.activeMe.bind(this)}
                    >Home
                  </NavBarLink>
                </li>
            </Link>
            <Link style={navStyle} to="/react-gh-pages/resume">
              <li><NavBarLink 
                    className={this.state.activePage === "Resume"? "active":"" }
                    onClick={this.activeMe.bind(this)}
                    >Resume
                  </NavBarLink>
                </li>
            </Link>
            <Link style={navStyle} to="/react-gh-pages/services">
              <li><NavBarLink 
                    className={this.state.activePage === "Services"? "active":"" }
                    onClick={this.activeMe.bind(this)}
                    >Services
                  </NavBarLink>
                </li>
            </Link>
            <Link style={navStyle} to="/react-gh-pages/blog">
              <li><NavBarLink 
                    className={this.state.activePage === "Blog"? "active":"" }
                    onClick={this.activeMe.bind(this)}
                    >Blog
                  </NavBarLink>
                </li>
            </Link>
            <Link style={navStyle} to="/react-gh-pages/contactme">
              <li><NavBarLink 
                    className={this.state.activePage === "Contact"? "active":"" }
                    onClick={this.activeMe.bind(this)}
                    >Contact
                  </NavBarLink>
                </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
export default NavBar;