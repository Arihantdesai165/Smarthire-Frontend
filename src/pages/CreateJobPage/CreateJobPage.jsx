import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobService } from '../../services/jobService';
import { getErrorMessage } from '../../utils/helpers';
import { EXPERIENCE_LEVELS } from '../../utils/constants';
import { HiOutlineBriefcase, HiOutlineDocumentText, HiOutlineChip, HiOutlineCurrencyDollar, HiOutlineLocationMarker, HiOutlineCollection } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import './CreateJobPage.css';

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    skillsRequired: '',
    salary: '',
    location: '',
    experienceRequired: ''
  });

  const handleChange = (e) => {
    const value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await jobService.createJob(formData);
      toast.success('Job posted successfully!');
      navigate('/jobs');
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-job-page container page-enter">
      <div className="container-md">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Post a <span className="text-gradient">New Job</span></h1>
          <p className="dashboard-subtitle">Fill in the details to attract the best talent for your team.</p>
        </div>

        <div className="glass-card create-job-card">
          <form className="create-job-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group flex-2">
                <label className="form-label">Job Title</label>
                <div className="input-with-icon">
                  <HiOutlineBriefcase className="input-icon" />
                  <input 
                    type="text" 
                    name="title"
                    className="form-input" 
                    placeholder="e.g. Senior Java Developer"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">Location</label>
                <div className="input-with-icon">
                  <HiOutlineLocationMarker className="input-icon" />
                  <input 
                    type="text" 
                    name="location"
                    className="form-input" 
                    placeholder="e.g. Pune / Remote"
                    required
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Job Description</label>
              <div className="input-with-icon items-start">
                <HiOutlineDocumentText className="input-icon mt-14" />
                <textarea 
                  name="description"
                  className="form-input min-h-120" 
                  placeholder="Describe the role, responsibilities, and team culture..."
                  required
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Required Skills</label>
              <div className="input-with-icon">
                <HiOutlineChip className="input-icon" />
                <input 
                  type="text" 
                  name="skillsRequired"
                  className="form-input" 
                  placeholder="e.g. Java, Spring Boot, MySQL (comma separated)"
                  required
                  value={formData.skillsRequired}
                  onChange={handleChange}
                />
              </div>
              <p className="form-hint">These skills will be used by our AI matching engine.</p>
            </div>

            <div className="form-row">
              <div className="form-group flex-1">
                <label className="form-label">Annual Salary (₹)</label>
                <div className="input-with-icon">
                  <HiOutlineCurrencyDollar className="input-icon" />
                  <input 
                    type="number" 
                    name="salary"
                    className="form-input" 
                    placeholder="e.g. 1200000"
                    required
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">Min. Experience (Years)</label>
                <div className="input-with-icon">
                  <HiOutlineCollection className="input-icon" />
                  <select 
                    name="experienceRequired"
                    className="form-input" 
                    required
                    value={formData.experienceRequired}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select experience level</option>
                    {EXPERIENCE_LEVELS.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => navigate('/jobs')}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner spinner-sm"></span>
                    <span>Posting...</span>
                  </>
                ) : (
                  'Publish Job'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPage;
