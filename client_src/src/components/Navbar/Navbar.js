import React, { Component } from 'react';
import { Link, NavLink} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="white darken-1 z-depth-0 nav-height p-l-20 p-r-20">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo nav-content-height">TRIZIASWEETS</a>
            <a data-target="main-menu" className="sidenav-trigger"><i className="fa fa-bars nav-color-black nav-content-height"></i></a>
            <ul className="right hide-on-med-and-down nav-content-height">
              <li><NavLink exact to="/" className="nav-link">HOME</NavLink></li>
              <li><NavLink to="/cakeshop" className="nav-link" activeClassName="active">CAKE SHOP</NavLink></li>
              <li><NavLink to="/customstudio" className="nav-link">CUSTOM STUDIO</NavLink></li>
              <li><NavLink to="/story" className="nav-link">OUR STORY</NavLink></li>
              <li><NavLink to="/designpolicy" className="nav-link">DESIGN POLICY</NavLink></li>
              <li><NavLink to="/shoppingcar" className=""><i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i></NavLink></li>
            </ul>
            <ul className="right hide-on-large-only nav-content-height">
              <li><NavLink to="/shoppingcar" className=""><i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i></NavLink></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="main-menu">
          <li><Link to="/" className="">HOME</Link></li>
          <li><Link to="/cakeshop" className="">CAKE SHOP</Link></li>
          <li><Link to="/customstudio" className="">CUSTOM STUDIO</Link></li>
          <li><Link to="/story" className="">OUR STORY</Link></li>
          <li><Link to="/designpolicy" className="">DESIGN POLICY</Link></li>
        </ul>
      </div>

    )
  }
}


export default Navbar;