
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="home-main-container">
      <div className="home-content-wrapper fade-in" style={{ background: 'rgba(255,255,255,0.65)', backdropFilter: 'blur(6px)', borderRadius: 0 }}>
        <section className="page-content">
          {/* Contact Info Section */}
          <div style={{ width: '100%', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
            <h1 style={{ fontSize: '2.2rem', color: '#1a237e', margin: 0 }}>Contact Us</h1>
          </div>
          <p style={{ fontSize: '0.78375rem', fontWeight: '500', color: '#64748b', marginBottom: '2rem', textAlign: 'center' }}>
            We'd love to hear from you! Reach out to us using the information below.
          </p>

          {/* Main Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '2.5rem',
              flexWrap: 'wrap',
              width: '100%'
            }}>
              {/* Contact Info Left */}
              <div style={{ minWidth: 280, maxWidth: 350, textAlign: 'left', flex: '1 1 320px' }}>
                <h2 style={{ color: '#283593', marginBottom: '0.5rem', textAlign: 'left', fontWeight: 700 }}>Yan Lab</h2>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Office: Biodesign A 124B</p>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Lab: Biodesign A 131</p>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Phone: (480) 727-8570</p>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Lab Phone: (480) 727-0428</p>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Fax: (480) 965-2747</p>
                <p style={{ margin: '6px 0', color: '#222', fontSize: '1.15rem' }}>Email: <a href="mailto:hao.yan@asu.edu" style={{ color: '#1a237e', textDecoration: 'underline' }}>hao.yan@asu.edu</a></p>
              </div>
              {/* Google Map Right */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 350px', minWidth: 280, maxWidth: 400 }}>
                <iframe
                  title="Biodesign Institute, Building A115 Location"
                  src="https://www.google.com/maps?q=Biodesign+Institute,+Building+A115,+Arizona+State+University&output=embed"
                  width="350"
                  height="300"
                  style={{ border: 0, borderRadius: '12px', marginBottom: '0.5rem', width: '100%', maxWidth: 400 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://www.google.com/maps/place/Biodesign+Institute,+Building+A115,+Arizona+State+University/@33.4212049,-111.9313337,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1a237e', fontWeight: 500, textDecoration: 'underline', fontSize: '1rem', marginBottom: '1.5rem' }}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
        </section>
        {/* Join the Lab Section */}
        <section style={{
          marginTop: '0',
          padding: '0',
          borderTop: '1px solid #e0e7ef',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(60,60,90,0.04)',
            padding: '1.5rem 2rem 1.5rem 2rem',
            maxWidth: 1000,
            width: '100%',
            margin: '0 auto',
          }}>
            <p style={{
              color: '#374151',
              fontSize: '1.15rem',
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              margin: 0,
              textAlign: 'justify',
              textAlignLast: 'center',
              letterSpacing: '0.01em',
              lineHeight: 1.6
            }}>
              We are always seeking to recruit highly motivated individuals who are interested in joining our team. Whether you are an undergraduate or graduate student, postdoctoral researcher, or visiting scholar interested in joining our team, please send your application materials including your CV with a list of references and cover letter describing your background and interests to: <a href="mailto:Hao.Yan@asu.edu" style={{ color: '#1a237e', textDecoration: 'underline', fontWeight: 500 }}>Hao.Yan@asu.edu</a>
            </p>
          </div>
        </section>
        <div style={{ paddingBottom: '60px' }}></div>
      </div>
    </main>
  );
};

export default Contact;
