import React from 'react'
import '../App.css';
import logo from '../assets/logo.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="social-icons">
                <i class="fi fi-brands-twitter"></i>
                <i class="fi fi-brands-facebook"></i>
                <i class="fi fi-brands-instagram"></i>
            </div>
            <p className="copyright">Copyright 2023 Bella Onojie.com</p>
          
        </footer>
      );
}

export default Footer