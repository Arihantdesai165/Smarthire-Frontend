import React from 'react';
import './JobCardSkeleton.css';

const JobCardSkeleton = () => {
  return (
    <div className="job-card-skeleton glass-card">
      <div className="skeleton-header">
        <div className="skeleton-title skeleton-pulse"></div>
        <div className="skeleton-badge skeleton-pulse"></div>
      </div>
      <div className="skeleton-desc">
        <div className="skeleton-line skeleton-pulse"></div>
        <div className="skeleton-line skeleton-pulse"></div>
        <div className="skeleton-line short skeleton-pulse"></div>
      </div>
      <div className="skeleton-details">
        <div className="skeleton-detail skeleton-pulse"></div>
        <div className="skeleton-detail skeleton-pulse"></div>
      </div>
      <div className="skeleton-skills">
        <div className="skeleton-skill skeleton-pulse"></div>
        <div className="skeleton-skill skeleton-pulse"></div>
        <div className="skeleton-skill skeleton-pulse"></div>
      </div>
      <div className="skeleton-btn skeleton-pulse"></div>
    </div>
  );
};

export default JobCardSkeleton;
