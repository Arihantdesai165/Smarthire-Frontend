import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { authService } from '../../services/authService'
import { HiOutlineBriefcase, HiOutlineSparkles, HiOutlinePlusCircle, HiOutlineLogout, HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isAuth = authService.isAuthenticated()
  const user = authService.getUser()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    authService.logout()
    navigate('/login')
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand">
          <div className="navbar__logo">
            <HiOutlineBriefcase aria-hidden="true" />
          </div>
          <span className="navbar__name">Smart<span className="text-gradient">Hire</span></span>
        </Link>

        {isAuth && (
          <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
            <Link to="/jobs" className={`navbar__link ${isActive('/jobs') ? 'navbar__link--active' : ''}`}>
              <HiOutlineBriefcase aria-hidden="true" />
              <span>Jobs</span>
            </Link>
            <Link to="/recommendations" className={`navbar__link ${isActive('/recommendations') ? 'navbar__link--active' : ''}`}>
              <HiOutlineSparkles aria-hidden="true" />
              <span>AI Match</span>
            </Link>
            <Link to="/create-job" className={`navbar__link ${isActive('/create-job') ? 'navbar__link--active' : ''}`}>
              <HiOutlinePlusCircle aria-hidden="true" />
              <span>Post Job</span>
            </Link>
          </div>
        )}

        <div className="navbar__actions">
          {isAuth ? (
            <>
              <div className="navbar__user">
                <div className="navbar__avatar">
                  {(user?.email?.[0] || 'U').toUpperCase()}
                </div>
                <span className="navbar__email">{user?.email}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-sm btn-secondary navbar__logout" id="logout-btn">
                <HiOutlineLogout aria-hidden="true" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <div className="navbar__auth-links">
              <Link to="/login" className="btn btn-sm btn-secondary" id="nav-login-btn">Login</Link>
              <Link to="/register" className="btn btn-sm btn-primary" id="nav-register-btn">Register</Link>
            </div>
          )}
          {isAuth && (
            <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
