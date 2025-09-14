import React from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaMicroscope, FaAtom } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="home-main-container">
      <div className="home-content-wrapper fade-in" style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(6px)', borderRadius: 0 }}>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p style={{ fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.7', color: '#374151', background: 'none', textAlign: 'center', margin: '0 auto', maxWidth: '1000px' }}>
              Our laboratory focuses on the rational design and engineering of DNA nanostructures 
              for applications in biotechnology, medicine, and materials science. We develop innovative 
              approaches to create programmable molecular systems that can sense, compute, and respond 
              to their environment.
            </p>
          </motion.div>





        </section>
      </div>
    </main>
  );
};

export default Home;