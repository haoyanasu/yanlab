import React from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaMicroscope, FaAtom } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="home-main-container">
      <div className="home-content-wrapper fade-in">
        <section className="page-content">
          {/* Hero Video Section */}
          <div style={{ position: 'relative', width: '100%', borderRadius: '0', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
            <video
              src="/nanobots.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '0',
                background: '#000'
              }}
            />
          </div>
          <p style={{ fontSize: '0.78375rem', fontWeight: '500', color: '#64748b', marginBottom: '2rem', textAlign: 'center' }}>
            Advancing structural DNA nanotechnology and molecular design for biomedical applications
          </p>

          {/* Main Description */}
          <motion.div
            className="card mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '0.78375rem', fontWeight: '500', lineHeight: '1.8', color: '#475569' }}>
              Our laboratory focuses on the rational design and engineering of DNA nanostructures 
              for applications in biotechnology, medicine, and materials science. We develop innovative 
              approaches to create programmable molecular systems that can sense, compute, and respond 
              to their environment.
            </p>
          </motion.div>

          {/* Research Areas */}
          <motion.h2 
            style={{ fontSize: '1.2375rem', fontWeight: '700', color: '#1e293b', margin: '2rem 0 0.5rem 0', textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Research Areas
          </motion.h2>

          <motion.div 
            className="grid-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1000px' }}
          >
            <div className="grid-item">
              <div style={{
                width: '100%',
                height: '200px',
                backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaDna style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  color: 'white'
                }} />
              </div>
              <h3 style={{ 
                fontSize: '0.78375rem', 
                fontWeight: '600', 
                marginBottom: '0.75rem',
                lineHeight: '1.3',
                color: '#1e293b'
              }}>
                Design
              </h3>
              <p style={{ 
                color: '#64748b',
                fontSize: '0.78375rem',
                fontWeight: '500',
                lineHeight: '1.6',
                flex: 1,
                textAlign: 'center'
              }}>
                Rational design and engineering of DNA nanostructures with precise structural control and programmable functionality.
              </p>
            </div>

            <div className="grid-item">
              <div style={{
                width: '100%',
                height: '200px',
                backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '12px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaAtom style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  color: 'white'
                }} />
              </div>
              <h3 style={{ 
                fontSize: '0.78375rem', 
                fontWeight: '600', 
                marginBottom: '0.75rem',
                lineHeight: '1.3',
                color: '#1e293b'
              }}>
                Functionalization
              </h3>
              <p style={{ 
                color: '#64748b',
                fontSize: '0.78375rem',
                fontWeight: '500',
                lineHeight: '1.6',
                flex: 1,
                textAlign: 'center'
              }}>
                Incorporating functional elements and responsive capabilities into DNA nanostructures for therapeutic and diagnostic applications.
              </p>
            </div>

            <div className="grid-item">
              <div style={{
                width: '100%',
                height: '200px',
                backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                borderRadius: '12px',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FaMicroscope style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3rem)', 
                  color: 'white'
                }} />
              </div>
              <h3 style={{ 
                fontSize: '0.78375rem', 
                fontWeight: '600', 
                marginBottom: '0.75rem',
                lineHeight: '1.3',
                color: '#1e293b'
              }}>
                Interface
              </h3>
              <p style={{ 
                color: '#64748b',
                fontSize: '0.78375rem',
                fontWeight: '500',
                lineHeight: '1.6',
                flex: 1,
                textAlign: 'center'
              }}>
                Developing interfaces between DNA nanostructures and biological systems for enhanced biocompatibility and functionality.
              </p>
            </div>
          </motion.div>




        </section>
      </div>
    </main>
  );
};

export default Home;