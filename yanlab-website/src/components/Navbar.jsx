import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDna, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/research', label: 'Research' },
    { 
      label: 'People',
      dropdown: [
        { path: '/team/pi-yan', label: 'PI Yan' },
        { path: '/team/our-team', label: 'Our Team' }
      ]
    },
    { path: '/news', label: 'News' },
    { path: '/publications', label: 'Publications' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav style={{
      background: '#8C1D40',
      borderBottom: 'none',
      padding: '0.85rem 0',
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
                fontSize: '1.9305rem', // 1.60875rem * 1.2
                fontWeight: '800',
                color: '#fff',
                letterSpacing: '-0.01em'
              }}>
                Yan Lab
              </div>
              {/* Removed 'Molecular Engineering' subtitle as requested */}
            </div>
          </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          position: 'relative'
        }} className="desktop-nav">
          {navItems.map((item, idx) => (
            item.dropdown ? (
              <div key={item.label} className="nav-dropdown" style={{ position: 'relative' }}>
                <span
                  style={{
                    color: '#fff',
                    fontWeight: '500',
                    fontSize: '1.2227rem',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    fontFamily: 'Inter, Arial, sans-serif',
                    borderBottom: 'none'
                  }}
                  tabIndex={0}
                >
                  {item.label}
                </span>
                <div className="dropdown-content" style={{
                  display: 'none',
                  position: 'absolute',
                  top: '2.2rem',
                  left: 0,
                  background: '#8D1C3F',
                  borderRadius: 0,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  minWidth: '160px',
                  width: '180px',
                  zIndex: 1000,
                  padding: '0.15rem 0',
                }}>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      style={{
                        display: 'block',
                        color: '#fff',
                        textDecoration: 'none',
                        padding: '0.45rem 1.1rem',
                        fontWeight: location.pathname === sub.path ? '700' : '500',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '1.08rem',
                        fontFamily: 'Inter, Arial, sans-serif',
                        transition: 'all 0.18s',
                        textAlign: 'left',
                        marginBottom: 0,
                        boxSizing: 'border-box',
                        outline: 'none',
                      }}
                      onMouseOver={e => e.currentTarget.style.textDecoration = 'none'}
                      onMouseOut={e => e.currentTarget.style.textDecoration = 'none'}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
                <style>{`
                  .nav-dropdown:hover .dropdown-content, .nav-dropdown:focus-within .dropdown-content {
                    display: block !important;
                  }
                  .dropdown-content a:hover, .dropdown-content a:focus {
                    color: #8C1D40 !important;
                    text-decoration: none !important;
                    background: #F7C800 !important;
                  }
                `}</style>
              </div>
            ) : (
              <div key={item.path} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    fontWeight: location.pathname === item.path ? '600' : '500',
                    fontSize: '1.2227rem', // 20% larger than 1.0189rem
                    transition: 'color 0.2s ease',
                    padding: '0.5rem 0',
                    fontFamily: 'Arial, sans-serif',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {item.label}
                </Link>
                {/* Maroon underline for active, attached to navbar border */}
                {location.pathname === item.path && (
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: '-1px', // overlaps the navbar border so the lines touch
                    width: 120,
                    height: 10,
                    background: '#FFC627',
                    borderRadius: 0,
                    zIndex: 3
                  }} />
                )}
              </div>
            )
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
            color: '#fff',
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
            background: '#fff',
            borderTop: '1px solid #222',
            padding: '1rem 0',
            display: 'none'
          }}
          className="mobile-nav"
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.label} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ color: '#fff', fontWeight: '600', fontSize: '1.0725rem', marginBottom: '0.25rem' }}>{item.label}</div>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'block',
                        textDecoration: 'none',
                        color: '#fff',
                        fontWeight: location.pathname === sub.path ? '600' : '500',
                        padding: '0.75rem 1.5rem',
                        borderBottom: '1px solid #333',
                        fontSize: '1.0725rem',
                        fontFamily: 'Inter, Arial, sans-serif',
                        background: location.pathname === sub.path ? '#3b82f6' : 'transparent',
                        borderRadius: '0.5rem',
                        marginBottom: '0.15rem'
                      }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#fff',
                    fontWeight: location.pathname === item.path ? '600' : '500',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #333',
                    fontSize: '1.0725rem',
                    fontFamily: 'Inter, Arial, sans-serif'
                  }}
                >
                  {item.label}
                </Link>
              )
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