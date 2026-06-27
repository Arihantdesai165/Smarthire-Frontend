import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBriefcase, HiOutlineHeart } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon">
              <HiOutlineBriefcase />
            </div>
            <span>Smart<span className="text-gradient">Hire</span></span>
          </Link>
          <p className="footer__tagline">
            AI-powered recruitment for the modern workforce.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__col-title">Platform</h4>
            <ul>
              <li><Link to="/jobs">Browse Jobs</Link></li>
              <li><Link to="/recommendations">AI Match</Link></li>
              <li><Link to="/create-job">Post a Job</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">Account</h4>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {currentYear} SmartHire. All rights reserved.
        </p>
        <p className="footer__made">
          Made with <HiOutlineHeart className="footer__heart" /> for job seekers
        </p>
      </div>
    </footer>
  );
};

export default Footer;
