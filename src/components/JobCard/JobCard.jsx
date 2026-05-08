import React from 'react';
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar, HiOutlineBriefcase, HiOutlineChip } from 'react-icons/hi';
import { formatSalary } from '../../utils/helpers';
import './JobCard.css';

const JobCard = ({ job }) => {
  const { title, location, salary, skillsRequired, experienceRequired, description } = job;

  return (
    <div className="job-card glass-card">
      <div className="job-card__header">
        <h3 className="job-card__title">{title}</h3>
        <span className="badge badge-primary">{experienceRequired}Y Exp</span>
      </div>
      
      <p className="job-card__description">{description}</p>
      
      <div className="job-card__details">
        <div className="job-card__detail">
          <HiOutlineLocationMarker />
          <span>{location}</span>
        </div>
        <div className="job-card__detail">
          <HiOutlineCurrencyDollar />
          <span>{formatSalary(salary)}</span>
        </div>
      </div>

      <div className="job-card__skills">
        {skillsRequired.split(',').map((skill, index) => (
          <span key={index} className="badge badge-secondary">
            {skill.trim()}
          </span>
        ))}
      </div>

      <button className="btn btn-primary btn-sm job-card__btn">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
