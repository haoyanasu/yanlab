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
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>Prof. Hao Yan, Ph.D.</h1>
              <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src="/hyan.jpg" alt="Dr. Hao Yan" style={{ width: 320, height: 480, objectFit: 'cover', objectPosition: 'center', borderRadius: 0, boxShadow: '0 4px 16px rgba(0,0,0,0.10)', marginBottom: '1.5rem' }} />
                </div>
                <div style={{ flex: '1 1 0', minWidth: 280, maxWidth: 600, fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontSize: '1.08rem', lineHeight: 1.7, fontWeight: 400, textAlign: 'justify' }}>
                  <p style={{
                    marginBottom: '1.2rem',
                    textAlign: 'justify',
                    fontSize: '1.1rem',
                    fontStyle: 'normal',
                    color: '#888',
                    fontWeight: 400,
                    lineHeight: 1.7
                  }}>
                    <span style={{ fontWeight: 400 }}>
                      Dr. Hao Yan is the <b>Regents Professor</b> and <b>Director of the Center for Molecular Design and Biomimetics</b> at Arizona State University, a world leader in molecular engineering, biomimetic chemistry, and nanotechnology innovation.
                    </span>
                  </p>
                  <p style={{ marginBottom: '1.2rem', textAlign: 'justify' }}>
                    He is a renowned chemist and nanotechnology innovator, best known for his pioneering advances in structural DNA and RNA nanotechnology, DNA-programmed molecular machines, and programmable bio-inspired materials. Yan’s research group has developed interdisciplinary approaches to design self-assembling molecular building blocks, enabling major biomedical, energy, and technological breakthroughs. He received his B.S. from Shandong University (1993) and Ph.D. from New York University (2001), worked at Duke University as an NSF Postdoctoral Fellow and joined ASU, where he became a full professor with early tenure.
                  </p>
                  <p style={{ marginBottom: '1.2rem', textAlign: 'justify' }}>
                    Yan has authored over 240 high-impact research papers and holds numerous patents related to programmable molecular systems and bioengineering. As a leader and educator, he has mentored more than 30 graduate students and postdocs who now hold faculty or senior industry positions worldwide. Yan is elected to multiple prestigious academies, has received over 20 major international awards (including the Feynman Prize, Humboldt Award, and Rozenberg Tulip Award), and serves as Associate Editor for Science Advances and ACS Applied Bio Materials. He continues to advance the frontiers of molecular engineering, inspire the next generation, and translate discoveries into startup innovations and global research leadership.
                  </p>
                </div>
              </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default PIYan;
