
import React from 'react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', background: '#fff' }}>
      {/* Half-half section */}
      <div style={{
        display: 'flex',
        width: '100%',
        height: '400px',
        marginBottom: '0',
        marginTop: '112px', // 2rem navbar padding top + bottom (2*32px) + 48px approx
      }}>
        {/* Colored box */}
        <div style={{
          flex: 1,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '6vw',
          color: '#22223b',
          height: '100%',
        }}>
          {/* Top dark line */}
          <div style={{
            width: '220px',
            height: '6px',
            background: '#22223b',
            marginBottom: '2rem',
            marginTop: '0',
            borderRadius: '2px',
            opacity: 0.9
          }} />
          {/* Title */}
          <div style={{
            fontSize: '2.2rem', // 2rem * 1.1
            fontWeight: 400,
            marginBottom: '1.2rem',
            color: '#22223b',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.1
          }}>
            The Yan Research Group
          </div>
          {/* Description */}
          <div style={{
            fontSize: '1.1rem', // 1rem * 1.1
            fontWeight: 400,
            color: '#444',
            maxWidth: '90%',
            marginBottom: '2rem',
            fontFamily: 'Inter, Arial, sans-serif',
            lineHeight: 1.5
          }}>
            Nucleic Acid Biodesign and Biologics Lab using Nature's Design Rules as Inspiration to Expand the Frontiers of Biomedicine, Material Science and Nanotechnology
          </div>
        </div>
        {/* Image */}
        <div style={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src="/cancer.jpg" alt="Cancer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <footer style={{
        width: '100%',
        background: '#000',
        color: '#fff',
        height: '16rem',
        position: 'absolute',
        left: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1rem',
        letterSpacing: '0.02em',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', color: '#fff', fontFamily: 'Inter, Arial, sans-serif' }}>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.15rem', letterSpacing: '0.01em' }}>
            Biodesign Center for Molecular Design and Biomimetics
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.35rem', letterSpacing: '0.01em' }}>
            1001 S McAllister Ave, Tempe, Az, 85287
          </div>
          <div style={{ fontWeight: 600, fontSize: '1.0189rem', marginBottom: '0.35rem' }}>
            Phone: <span style={{ fontWeight: 400 }}>480.727.8570</span> / Fax: <span style={{ fontWeight: 400 }}>480.965.2747</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.0189rem', marginBottom: '0.35rem' }}>
            Email: <span style={{ fontWeight: 400 }}>hao.yan@asu.edu</span>
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.35rem', color: '#ccc' }}>
            @ Copywrite: Hao Yan
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', color: '#ccc' }}>
            @ Creation:
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;