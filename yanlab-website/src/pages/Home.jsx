
import React from 'react';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', width: '100vw', position: 'relative', background: '#fff' }}>
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
            Center for Molecular Design and Biomimetics
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.35rem', letterSpacing: '0.01em' }}>
            1001 S McAllister Ave, Tempe, Az, 85281
          </div>
          <div style={{ fontWeight: 600, fontSize: '1.0189rem', marginBottom: '0.35rem' }}>
            CELL: <span style={{ fontWeight: 400 }}>480.727.8570</span> / Fax: <span style={{ fontWeight: 400 }}>480.965.2747</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.0189rem', marginBottom: '0.35rem' }}>
            E: <span style={{ fontWeight: 400 }}>hao.yan@asu.edu</span>
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.35rem', color: '#ccc' }}>
            Copyright: Hao Yan
          </div>
          <div style={{ fontWeight: 400, fontSize: '1.0189rem', color: '#ccc' }}>
            Created by XX
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;