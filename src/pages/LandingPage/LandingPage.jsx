import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page page-enter">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero__content">
          <div className="badge badge-primary mb-16">
            <HiOutlineLightningBolt />
            <span>Next-Gen Recruitment</span>
          </div>
          <h1 className="hero__title">
            Find the <span className="text-gradient">Perfect Match</span> <br /> 
            for Your Career.
          </h1>
          <p className="hero__subtitle">
            SmartHire uses AI-driven recommendations to connect top talent with industry-leading companies. Experience a seamless hiring journey today.
          </p>
          <div className="hero__actions">
            <Link to="/jobs" className="btn btn-primary btn-lg">
              Explore Jobs
              <HiOutlineArrowRight />
            </Link>
            <Link to="/register" className="btn btn-secondary btn-lg">
              Post a Job
            </Link>
          </div>
          
          <div className="hero__stats">
            <div className="stat-item">
              <span className="stat-value">12k+</span>
              <span className="stat-label">Active Jobs</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="visual-circle circle-1"></div>
          <div className="visual-circle circle-2"></div>
          <div className="glass-card visual-card">
            <div className="card-skeleton">
              <div className="skeleton-line w-40"></div>
              <div className="skeleton-line w-80"></div>
              <div className="skeleton-line w-60"></div>
              <div className="skeleton-row">
                <div className="skeleton-pill"></div>
                <div className="skeleton-pill"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="section-header">
          <h2 className="section-title">Why SmartHire?</h2>
          <p className="section-subtitle">Revolutionizing the way you search and apply for jobs.</p>
        </div>
        
        <div className="features__grid">
          <div className="glass-card feature-card">
            <div className="feature-icon icon-1">
              <HiOutlineLightningBolt />
            </div>
            <h3>AI Recommendations</h3>
            <p>Our intelligent engine matches your skills with the most relevant job openings automatically.</p>
          </div>
          
          <div className="glass-card feature-card">
            <div className="feature-icon icon-2">
              <HiOutlineShieldCheck />
            </div>
            <h3>Verified Companies</h3>
            <p>Every company on our platform undergoes a rigorous verification process for your safety.</p>
          </div>
          
          <div className="glass-card feature-card">
            <div className="feature-icon icon-3">
              <HiOutlineUserGroup />
            </div>
            <h3>Direct Connection</h3>
            <p>Communicate directly with hiring managers and get real-time updates on your applications.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
