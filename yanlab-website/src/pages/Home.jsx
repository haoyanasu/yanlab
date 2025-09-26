
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
  marginTop: '64px', // reduced to align image with navbar
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
            color: '#8D1C3F',
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
          justifyContent: 'flex-end',
          marginRight: 0,
        }}>
          <img src="/cancer.jpg" alt="Cancer" style={{ width: '105%', height: '105%', objectFit: 'cover', marginRight: 0, transform: 'translate(-3%, 4%)' }} />
        </div>
      </div>
      <footer style={{
        width: '100%',
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
        zIndex: 10,
        padding: 0,
      }}>
        {/* Black box for address/contact */}
        <div style={{
          width: '100%',
          background: '#000',
          color: '#fff',
          padding: '2.2rem 0 1.2rem 0',
          fontFamily: 'Inter, Arial, sans-serif',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
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
          </div>
        </div>
        {/* Yellow box for copyright/creation */}
        <div style={{
          width: '100%',
          background: '#FFC627',
          color: '#000',
          padding: '0.8rem 0 1.1rem 0',
          fontFamily: 'Inter, Arial, sans-serif',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontWeight: 400, fontSize: '1.0189rem', marginBottom: '0.35rem' }}>
              @ Copywrite: Hao Yan
            </div>
            <div style={{ fontWeight: 400, fontSize: '1.0189rem' }}>
              @ Creation:
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;