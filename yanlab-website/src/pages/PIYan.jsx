import React from 'react';
import { motion } from 'framer-motion';

const PIYan = () => {
  return (
    <main className="resources-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
      <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946', paddingLeft: '2.5rem' }}>
        <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>PI Yan</h1>
              <div style={{ maxWidth: 900, margin: '0 auto' }}>
                <img src="/hyan.jpg" alt="Dr. Hao Yan" style={{ width: 280, height: 300, objectFit: 'cover', objectPosition: 'center', borderRadius: 4, display: 'block', margin: '0 auto 1.5rem auto' }} />
                <h2 style={{ fontSize: '1.2375rem', fontWeight: 700, marginBottom: '0.25rem', textAlign: 'center' }}>Hao Yan</h2>
                <p style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '0.25rem', textAlign: 'center', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.5 }}>Regents Professor</p>
                <div style={{ textAlign: 'center', margin: '1.5rem 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, lineHeight: 1.5 }}>
                  <strong>Email:</strong> <a href="mailto:hao.yan@asu.edu" style={{ color: '#3b82f6', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}>hao.yan@asu.edu</a>
                </div>
              </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default PIYan;
