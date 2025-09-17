import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDna, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/team', label: 'People' },
    { path: '/news', label: 'News' },
    { path: '/publications', label: 'Publications' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.65)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 0',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
          <Link 
            to="/" 
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <div>
              <div style={{
                fontSize: '1.2375rem',
                fontWeight: '800',
                color: '#0f172a',
                letterSpacing: '-0.01em'
              }}>
                YAN LAB
              </div>
              <div style={{
                fontSize: '0.61875rem',
                color: '#64748b',
                fontWeight: '400',
                marginTop: '-2px'
              }}>
                                Molecular Engineering
              </div>
            </div>
          </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }} className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === item.path ? '#3b82f6' : '#64748b',
                fontWeight: location.pathname === item.path ? '600' : '500',
                fontSize: '0.78375rem',
                transition: 'color 0.2s ease',
                padding: '0.5rem 0',
                borderBottom: location.pathname === item.path ? '2px solid #3b82f6' : '2px solid transparent'
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.2375rem',
            color: '#64748b',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '1rem 0',
            display: 'none'
          }}
          className="mobile-nav"
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: location.pathname === item.path ? '#3b82f6' : '#64748b',
                  fontWeight: location.pathname === item.path ? '600' : '500',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #f1f5f9',
                  fontSize: '0.825rem'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;