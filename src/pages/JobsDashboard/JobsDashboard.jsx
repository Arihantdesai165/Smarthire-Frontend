import React, { useState, useEffect } from 'react';
import { jobService } from '../../services/jobService';
import { getErrorMessage } from '../../utils/helpers';
import JobCard from '../../components/JobCard/JobCard';
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineChip, HiOutlineX } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import './JobsDashboard.css';

const JobsDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    title: '',
    location: '',
    skill: ''
  });
  const [activeSearch, setActiveSearch] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await jobService.getAllJobs();
      setJobs(response.data);
      setActiveSearch(null);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = async (type) => {
    const value = searchParams[type];
    if (!value) {
      toast.error(`Please enter a ${type} to search`);
      return;
    }

    setLoading(true);
    try {
      let response;
      if (type === 'title') {
        response = await jobService.searchByTitle(value);
      } else if (type === 'location') {
        response = await jobService.searchByLocation(value);
      } else if (type === 'skill') {
        response = await jobService.searchBySkill(value);
      }
      setJobs(response.data);
      setActiveSearch(`${type}: ${value}`);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchParams({ title: '', location: '', skill: '' });
    fetchJobs();
  };

  return (
    <div className="jobs-dashboard container page-enter">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Explore <span className="text-gradient">Opportunities</span></h1>
        <p className="dashboard-subtitle">Find your next big role from thousands of listings.</p>
      </div>

      {/* Search Section */}
      <div className="search-section glass-card">
        <div className="search-grid">
          <div className="search-item">
            <div className="search-input-wrapper">
              <HiOutlineSearch className="search-icon" />
              <input 
                type="text" 
                name="title"
                placeholder="Job title or keyword" 
                className="form-input"
                value={searchParams.title}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch('title')}
              />
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => handleSearch('title')}>Search</button>
          </div>

          <div className="search-item">
            <div className="search-input-wrapper">
              <HiOutlineLocationMarker className="search-icon" />
              <input 
                type="text" 
                name="location"
                placeholder="Location" 
                className="form-input"
                value={searchParams.location}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch('location')}
              />
            </div>
            <button className="btn btn-secondary btn-sm" onClick={() => handleSearch('location')}>Search</button>
          </div>

          <div className="search-item">
            <div className="search-input-wrapper">
              <HiOutlineChip className="search-icon" />
              <input 
                type="text" 
                name="skill"
                placeholder="Skill (e.g. Java)" 
                className="form-input"
                value={searchParams.skill}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch('skill')}
              />
            </div>
            <button className="btn btn-secondary btn-sm" onClick={() => handleSearch('skill')}>Search</button>
          </div>
        </div>

        {activeSearch && (
          <div className="active-search-info">
            <span className="badge badge-accent">
              Showing results for "{activeSearch}"
              <HiOutlineX className="clear-search-icon" onClick={clearSearch} />
            </span>
          </div>
        )}
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Fetching amazing jobs for you...</p>
        </div>
      ) : jobs.length > 0 ? (
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id || Math.random()} job={job} />
          ))}
        </div>
      ) : (
        <div className="empty-state glass-card">
          <div className="empty-icon">
            <HiOutlineSearch />
          </div>
          <h2>No jobs found</h2>
          <p>We couldn't find any jobs matching your search. Try different keywords or clear the filters.</p>
          <button className="btn btn-primary" onClick={clearSearch}>View All Jobs</button>
        </div>
      )}
    </div>
  );
};

export default JobsDashboard;
