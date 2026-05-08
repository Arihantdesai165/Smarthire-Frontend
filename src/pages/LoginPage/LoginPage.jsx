import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { authService } from '../../services/authService';
import { getErrorMessage } from '../../utils/helpers';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import '../AuthPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.login(formData);
      toast.success('Welcome back!');
      navigate('/jobs');
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
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Login to access your dashboard and apply for jobs.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
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

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
              id="login-submit"
            >
              {loading ? (
                <>
                  <span className="spinner spinner-sm"></span>
                  <span>Logging in...</span>
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/register" className="auth-link">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
