import React from 'react'

import logo from '../assets/images/footer-logo.png';

const AppFooter = () => {
  return (
    <div className="container-fluid">
        <div className="footer">
            <div className="logoName">
              <h2>Polyglot Pages Preschool</h2>
            </div>
            <ul className="socials">
              <li><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
            </ul>
            <div className="copyright">
              <p>created by quynguy || all rights reserved.</p>
              <p>for portfolio purposes only</p>
            </div>
        </div>
    </div>
  );
};

export default AppFooter;