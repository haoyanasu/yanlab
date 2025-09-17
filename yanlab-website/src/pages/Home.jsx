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
          style={{ width: '100%', textAlign: 'center', marginTop: '3rem', marginBottom: '1.5rem' }}
        >
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#22223b', letterSpacing: '-1px', marginBottom: '0.5rem' }}>YAN LAB</h1>
    <div style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: 500, marginBottom: '0.5rem' }}>Molecular engineers drawing inspiration from nature, we build programmable medicines for advanced sensing, computation, and responsive functions in biology.</div>
        </motion.div>

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}
        >
          <p style={{ fontSize: '1.05rem', fontWeight: '500', color: '#64748b', marginBottom: '1.2rem', textAlign: 'center', maxWidth: '900px' }}>
            Advancing structural DNA nanotechnology and molecular design for biomedical applications
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: '400', lineHeight: '1.7', color: '#22223b', background: 'none', textAlign: 'center', margin: '0 auto', maxWidth: '1000px' }}>
            Our laboratory focuses on the rational design and engineering of DNA nanostructures 
            for applications in biotechnology, medicine, and materials science. We develop innovative 
            approaches to create programmable molecular systems that can sense, compute, and respond 
            to their environment.
          </p>
        </motion.div>

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