import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/team', label: 'Team' },
    { path: '/publications', label: 'Publications' },
    { path: '/news', label: 'News' },
    { path: '/resources', label: 'Resources' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-main">THE YAN LAB</span>
            <span className="logo-sub">group</span>
          </div>
        </Link>
        
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navbar-icon">
          <motion.div 
            className="icon-circle"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <span className="icon-symbol">↻</span>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 