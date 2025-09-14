
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
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ color: '#283593', marginBottom: '0.5rem' }}>Yan Lab</h2>
              <p style={{ margin: '6px 0', color: '#333' }}>Office: Biodesign A 124B</p>
              <p style={{ margin: '6px 0', color: '#333' }}>Lab: Biodesign A 131</p>
              <p style={{ margin: '6px 0', color: '#333' }}>Phone: (480) 727-8570</p>
              <p style={{ margin: '6px 0', color: '#333' }}>Lab Phone: (480) 727-0428</p>
              <p style={{ margin: '6px 0', color: '#333' }}>Fax: (480) 965-2747</p>
              <p style={{ margin: '6px 0', color: '#333' }}>Email: <a href="mailto:hao.yan@asu.edu">hao.yan@asu.edu</a></p>
            </div>
          </motion.div>

          {/* Contact Form */}

        </section>
      </div>
    </main>
  );
};

export default Contact;
