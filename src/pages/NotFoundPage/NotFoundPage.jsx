import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad, HiOutlineHome, HiOutlineBriefcase } from 'react-icons/hi';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page page-enter">
      <div className="not-found-content">
        <div className="not-found-code">
          <span>4</span>
          <div className="not-found-icon">
            <HiOutlineEmojiSad />
          </div>
          <span>4</span>
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            <HiOutlineHome />
            Go Home
          </Link>
          <Link to="/jobs" className="btn btn-secondary">
            <HiOutlineBriefcase />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
