import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { authService } from '../../services/authService';
import { getErrorMessage } from '../../utils/helpers';
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed, HiOutlineIdentification } from 'react-icons/hi';
import '../AuthPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'CANDIDATE'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.register(formData);
      toast.success('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page page-enter">
      <div className="container container-sm">
        <div className="glass-card auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join SmartHire and start your journey.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name</label>
              <div className="input-with-icon">
                <HiOutlineUser className="input-icon" />
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-input" 
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <HiOutlineMail className="input-icon" />
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-input" 
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-with-icon">
                <HiOutlineLockClosed className="input-icon" />
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  className="form-input" 
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="role">I am a</label>
              <div className="input-with-icon">
                <HiOutlineIdentification className="input-icon" />
                <select 
                  id="role" 
                  name="role"
                  className="form-input"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="CANDIDATE">Candidate</option>
                  <option value="RECRUITER">Recruiter</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
              id="register-submit"
            >
              {loading ? (
                <>
                  <span className="spinner spinner-sm"></span>
                  <span>Creating account...</span>
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login" className="auth-link">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
