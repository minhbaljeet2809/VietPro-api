import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
     render() {
          return (
                    <header>
                         <div className="container-fluid position-relative no-side-padding">
                              <a href="google.com" className="logo"><img src="images/logo.png" alt="Logo" /></a>
                              <div className="menu-nav-icon" data-nav-menu="#main-menu"><i className="ion-navicon" /></div>
                              <ul className="main-menu visible-on-click" id="main-menu">
                                   <li><Link to="/">Home</Link></li>
                                   <li><a href="google.com">Categories</a></li>
                                   <li><a href="google.com">Features</a></li>
                              </ul>
                              <div className="src-area">
                                   <form>
                                        <button className="src-btn" type="submit"><i className="ion-ios-search-strong" /></button>
                                        <input className="src-input" type="text" placeholder="Type of search" />
                                   </form>
                              </div>
                         </div>
                    </header>
          )
     }
}
