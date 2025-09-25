import React from 'react';
import { motion } from 'framer-motion';

const PIYan = () => {
  return (
    <main className="piyan-main-container" style={{ background: '#fff', marginTop: '1rem' }}>
      <div className="piyan-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff' }}>
        <section className="page-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>PI Yan</h1>
            <div style={{ maxWidth: 900, margin: '0 auto' }}>
              <img src="/hyan.jpg" alt="Dr. Hao Yan" style={{ width: 280, height: 300, objectFit: 'cover', objectPosition: 'center', borderRadius: 4, display: 'block', margin: '0 auto 1.5rem auto' }} />
              <h2 style={{ fontSize: '1.2375rem', fontWeight: 700, marginBottom: '0.25rem', textAlign: 'center' }}>Hao Yan</h2>
              <p style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '0.25rem', textAlign: 'center' }}>Regents Professor</p>
              <p style={{ color: '#64748b', fontSize: '0.7425rem', textAlign: 'center' }}>Milton D. Glick Distinguished Professor</p>
              <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
                <strong>Department:</strong> School of Molecular Sciences and School of Medicine<br />
                <strong>Office:</strong> BDA 124B<br />
                <strong>Phone:</strong> (480) 727-8570<br />
                <strong>Email:</strong> <a href="mailto:hao.yan@asu.edu" style={{ color: '#3b82f6', textDecoration: 'none' }}>hao.yan@asu.edu</a>
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, textAlign: 'center' }}>
                <strong>Selected Awards:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', display: 'inline-block', textAlign: 'left' }}>
                  <li>Foresight Institute Feynman Prize in Nanotechnology</li>
                  <li>Rozenberg Tulip Award in DNA Computing</li>
                  <li>Humboldt Research Award</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default PIYan;
