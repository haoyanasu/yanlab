import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFlask, FaHome, FaUsers, FaFileAlt, FaNewspaper, FaBook } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/research', label: 'Research', icon: FaFlask },
    { path: '/team', label: 'Team', icon: FaUsers },
    { path: '/publications', label: 'Publications', icon: FaFileAlt },
    { path: '/news', label: 'News', icon: FaNewspaper },
    { path: '/resources', label: 'Resources', icon: FaBook }
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
          <div className="logo-container">
            <FaFlask className="logo-icon" />
            <div className="logo-text">
              <span className="logo-main">THE YAN LAB</span>
              <span className="logo-sub">group</span>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="nav-icon" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile">
          {/* Hamburger Menu Button */}
          <motion.button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            className={`mobile-menu ${isOpen ? 'open' : ''}`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  staggerChildren: 0.1
                }
              },
              closed: {
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.3
                }
              }
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 }
                }}
              >
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mobile-nav-icon" />
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
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