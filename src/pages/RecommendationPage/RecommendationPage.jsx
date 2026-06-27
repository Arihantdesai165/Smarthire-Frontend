import React, { useState } from 'react';
import { jobService } from '../../services/jobService';
import { getErrorMessage, getMatchColor } from '../../utils/helpers';
import Loader from '../../components/Loader/Loader';
import { HiOutlineSparkles, HiOutlineChip, HiOutlineBriefcase, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { toast } from 'react-hot-toast';
import './RecommendationPage.css';

const RecommendationPage = () => {
  const [skills, setSkills] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleGetRecommendations = async (e) => {
    e.preventDefault();
    if (!skills.trim()) {
      toast.error('Please enter your skills (comma separated)');
      return;
    }

    setLoading(true);
    setSearched(true);
    try {
      const response = await jobService.getRecommendations(skills);
      setRecommendations(response.data);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendation-page container page-enter">
      <div className="dashboard-header">
        <h1 className="dashboard-title">AI <span className="text-gradient">Matchmaker</span></h1>
        <p className="dashboard-subtitle">Our intelligent engine finds jobs that perfectly match your skill set.</p>
      </div>

      <div className="recommendation-input glass-card">
        <form onSubmit={handleGetRecommendations}>
          <div className="form-group">
            <label className="form-label">Your Core Skills</label>
            <div className="input-with-icon">
              <HiOutlineChip className="input-icon" />
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Java, Spring Boot, React, MySQL"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <p className="form-hint">Separate skills with commas for better accuracy.</p>
          </div>
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner spinner-sm"></span>
                <span>Analyzing Market...</span>
              </>
            ) : (
              <>
                <HiOutlineSparkles />
                <span>Get Recommendations</span>
              </>
            )}
          </button>
        </form>
      </div>

      {loading ? (
        <Loader text="Matching your skills with 10,000+ opportunities..." />
      ) : searched ? (
        <div className="recommendations-container">
          <h2 className="section-title">Top Matches for You</h2>
          
          {recommendations.length > 0 ? (
            <div className="recommendations-list">
              {recommendations.map((rec, index) => (
                <div key={index} className="recommendation-card glass-card">
                  <div className="rec-match-score">
                    <div 
                      className="rec-match-circle" 
                      style={{ borderTopColor: getMatchColor(rec.matchPercentage) }}
                    >
                      <span>{Math.round(rec.matchPercentage)}%</span>
                    </div>
                    <span className="rec-match-label">Match</span>
                  </div>

                  <div className="rec-info">
                    <h3 className="rec-title">{rec.jobTitle}</h3>
                    <div className="rec-company">
                      <HiOutlineOfficeBuilding />
                      <span>{rec.companyName || 'Confidential Company'}</span>
                    </div>
                    
                    <div className="rec-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${rec.matchPercentage}%`,
                            background: `linear-gradient(90deg, var(--primary-500), ${getMatchColor(rec.matchPercentage)})`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-secondary btn-sm rec-btn">
                    View Job
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state glass-card">
              <div className="empty-icon">
                <HiOutlineBriefcase />
              </div>
              <h2>No matches found</h2>
              <p>We couldn't find any jobs matching those specific skills. Try adding more general skills or common technology stacks.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="recommendation-placeholder">
          <div className="placeholder-content">
            <HiOutlineSparkles className="placeholder-icon" />
            <h3>Ready to find your match?</h3>
            <p>Enter your professional skills above to see how well you align with current job openings.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationPage;
