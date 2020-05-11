import React, { Component } from 'react'

export default class Footer extends Component {
     render() {
          return (
               <footer>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-4 col-md-6">
                                   <div className="footer-section">
                                        <a className="logo" href="google.com"><img src="images/logo.png" alt="Logo" /></a>
                                        <p className="copyright">Bona @ 2017. All rights reserved.</p>
                                        <p className="copyright">Designed by <a href="https://colorlib.com" >Colorlib</a></p>
                                        <ul className="icons">
                                             <li><a href="facebook.com"><i className="ion-social-facebook-outline" /></a></li>
                                             <li><a href="facebook.com"><i className="ion-social-twitter-outline" /></a></li>
                                             <li><a href="facebook.com"><i className="ion-social-instagram-outline" /></a></li>
                                             <li><a href="facebook.com"><i className="ion-social-vimeo-outline" /></a></li>
                                             <li><a href="facebook.com"><i className="ion-social-pinterest-outline" /></a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                   <div className="footer-section">
                                        <h4 className="title"><b>CATAGORIES</b></h4>
                                        <ul>
                                             <li><a href="google.com">BEAUTY</a></li>
                                             <li><a href="google.com">HEALTH</a></li>
                                             <li><a href="google.com">MUSIC</a></li>
                                        </ul>
                                        <ul>
                                             <li><a href="google.com">SPORT</a></li>
                                             <li><a href="google.com">DESIGN</a></li>
                                             <li><a href="google.com">TRAVEL</a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                   <div className="footer-section">
                                        <h4 className="title"><b>SUBSCRIBE</b></h4>
                                        <div className="input-area">
                                             <form>
                                                  <input className="email-input" type="text" placeholder="Enter your email" />
                                                  <button className="submit-btn" type="submit"><i className="icon ion-ios-email-outline" /></button>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          )
     }
}
