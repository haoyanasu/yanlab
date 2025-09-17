import React from 'react';
import { motion } from 'framer-motion';
import './HomeLayout.css';
import { FaDna, FaMicroscope, FaAtom } from 'react-icons/fa';

const Home = () => {
  return (
    <React.Fragment>
      <main className="home-main-container" style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
        {/* 1. Yan Lab Hero Title */}
        <motion.div
          className="yanlab-hero-section"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            width: '100vw',
            maxWidth: '100vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            position: 'relative',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            marginTop: '3rem',
            marginBottom: '1.5rem',
          }}
        >
          {/* Background image */}
          <img src="/biod.jpg" alt="Background" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            minWidth: '100vw',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.55,
            pointerEvents: 'none',
            userSelect: 'none',
          }} />
          {/* Semi-transparent overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,0.45)',
            zIndex: 1,
          }} />
          {/* Foreground text */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#111', letterSpacing: '-1px', marginBottom: '0.5rem' }}>YAN LAB</h1>
            <div style={{ fontSize: '1.1rem', color: '#111', fontWeight: 500, marginBottom: '0.5rem' }}>Molecular engineers drawing inspiration from nature, we build programmable medicines for advanced sensing, computation, and responsive functions in biology.</div>
          </div>
        </motion.div>

        {/* Video Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ width: '100%', height: '50vh', overflow: 'hidden', position: 'relative', background: '#000', marginBottom: '0' }}
        >
          <video
            src="/nanobots.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              background: '#000',
            }}
          />
        </motion.div>

        {/* Gap above 1.jpg section */}
        <div style={{ width: '100%', height: '2.5rem' }}></div>
        {/* Blank Section 1 with image */}
        <div style={{ width: '100%', height: '50vh', background: '#f3f4f6', position: 'relative', overflow: 'hidden', marginBottom: '2.5rem' }}>
          <img src="/1.jpg" alt="Yan Lab" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', display: 'block' }} />
        </div>
        {/* Blank Section 2 */}
        <div style={{ width: '100%', height: '50vh', background: '#e0e7ef', marginBottom: '2.5rem' }}></div>

        {/* 2. Video Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ width: '100%', height: '50vh', overflow: 'hidden', position: 'relative', background: '#000', marginBottom: '2rem' }}
        >
          <video
            src="/nanobots.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              background: '#000',
            }}
          />
        </motion.div>

        {/* 3. Description */}

        {/* 4. Selected Publications */}
        <motion.section
          className="selected-publications-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ marginTop: '1.5rem', marginBottom: '2rem', width: '100%' }}
        >
          <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', color: '#22223b', marginBottom: '1.2rem', textShadow: '0 2px 8px rgba(255,255,255,0.10)' }}>Selected Publications</h2>
          <div className="publications-list" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(30,41,59,0.85)', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '1.5rem', color: '#f3f4f6' }}>
                <strong>Smith, J., Doe, J., & Yan, H.</strong> (2023). <em>Programmable DNA nanorobots for targeted drug delivery.</em> <span style={{ color: '#60a5fa' }}>Nature Nanotechnology</span>.
              </li>
              <li style={{ marginBottom: '1.5rem', color: '#f3f4f6' }}>
                <strong>Lee, A., Wang, X., & Yan, H.</strong> (2022). <em>DNA origami for biosensing applications.</em> <span style={{ color: '#60a5fa' }}>Science Advances</span>.
              </li>
              <li style={{ marginBottom: '1.5rem', color: '#f3f4f6' }}>
                <strong>Patel, R., Kim, S., & Yan, H.</strong> (2021). <em>Engineering molecular logic circuits with DNA tiles.</em> <span style={{ color: '#60a5fa' }}>ACS Nano</span>.
              </li>
              {/* Add more publications as needed */}
            </ul>
          </div>
        </motion.section>
      </main>
  </React.Fragment>
  );
};

export default Home;