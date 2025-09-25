
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OurTeam = () => {
  const [expandedSections, setExpandedSections] = useState({
    staff: true,
    students: true,
    former: false,
    mentees: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const staff = [
    {
      name: "Chad R Simmons",
      title: "Research Professional",
      email: "chad.simmons@asu.edu",
      focus: "Biomacromolecule crystallography",
      image: "chad.jpg"
    },
    {
      name: "Yang Xu",
      title: "Assistant Research Professor", 
      email: "yangxu3@asu.edu",
      focus: "DNA nanotechnology research",
      image: "yangxu.jpg"
    }
  ];

  const students = [
    { name: "Deeksha Satyabola", level: "5th Year PhD", email: "ddeeksha@asu.edu", research: "DNA nanotechnology", image: "deeksha.jpg" },
    { name: "Abhay Prasad", level: "5th Year PhD", email: "aprasa36@asu.edu", research: "Molecular design", image: "abhay.jpg" },
    { name: "Rong Zheng", level: "4th Year PhD", email: "rzheng22@asu.edu", research: "DNA assembly", image: "rong.jpg" },
    { name: "Lanshen Zhao", level: "4th Year PhD", email: "lzhao89@asu.edu", research: "Biomolecular engineering", image: "lanshen.jpg" },
    { name: "Xinyi Tu", level: "4th Year PhD", email: "xinyitu@asu.edu", research: "DNA origami", image: "xinyi.jpg" },
    { name: "Thong Diep", level: "4th Year PhD", email: "tdiep2@asu.edu", research: "Molecular nanotechnology", image: "thong.jpg" },
    { name: "Aleksandra Petrova", level: "3rd Year PhD Student", email: "aleksandra@asu.edu", research: "DNA nanotechnology", image: "Aleksandra.jpg" },
    { name: "Gengshi Wu", level: "3rd Year PhD Student", email: "gengshi@asu.edu", research: "Molecular design", image: "gengshi.jpg" },
    { name: "Yichen Yan", level: "2nd Year PhD", email: "yichen@asu.edu", research: "DNA research", image: "yichen.jpg" }
  ];

  const former = [
    { name: "Liangxiao Chen", title: "PhD 2019-2024", current: "Postdoc, Harvard University" },
    { name: "Lu Yu", title: "PhD 2019-2024", current: "Postdoc, University of Washington" },
    { name: "Leeza Abraham", title: "PhD 2018-2023", current: "Research Scientist, Exodigm" },
    { name: "Yue Tang", title: "PhD 2018-2023", current: "Assistant Professor, Shandong University" },
    { name: "Hao Liu", title: "PhD 2018-2023", current: "Postdoc, Arizona State University" }
  ];

  return (
    <main className="people-main-container" style={{ background: '#fff', marginTop: '1rem' }}>
      <div className="people-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff' }}>
        <section className="page-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="page-subtitle" style={{ fontSize: '1rem' }}>
              Meet the talented researchers and students driving innovation in DNA nanotechnology
            </p>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '0.25rem',
              letterSpacing: '0.1em',
              fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
              textAlign: 'center',
              marginTop: 0
            }}>Our Team</h2>
            <div style={{
              width: '300px',
              height: '3px',
              background: '#3b82f6',
              margin: '0 auto 1.5rem auto',
              borderRadius: '2px',
            }} />
          </motion.div>

          {/* Research Staff Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              margin: '1rem 0 0.5rem 0',
              cursor: 'pointer',
              textAlign: 'center'
            }} onClick={() => toggleSection('staff')}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.25rem',
                letterSpacing: '0.1em',
                fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                textAlign: 'center',
              }}>Research Staff</h2>
              <div style={{
                width: '300px',
                height: '3px',
                background: '#3b82f6',
                margin: '0 auto 1.5rem auto',
                borderRadius: '2px',
              }} />
              {expandedSections.staff ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {expandedSections.staff && (
              <div className="grid-container">
                {staff.map((member, index) => (
                  <div key={index} className="grid-item">
                    <div style={{
                      width: '216px',
                      height: '216px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem auto',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}>
                      <img 
                        src={`/${member.image}`} 
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                    </div>
                    <h3 style={{ fontSize: '0.78375rem', fontWeight: '600', marginBottom: '0.125rem', textAlign: 'center' }}>
                      {member.name}
                    </h3>
                    <p style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.125rem', fontSize: '0.78375rem' }}>
                      {member.title}
                    </p>
                    <p style={{ color: '#64748b', marginBottom: '0.25rem', fontSize: '0.78375rem', fontWeight: '500' }}>
                      {member.focus}
                    </p>
                    <a href={`mailto:${member.email}`} style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.78375rem', fontWeight: '500' }}>
                      <FaEnvelope style={{ marginRight: '0.5rem' }} />
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Students Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              margin: '1rem 0 0.5rem 0',
              cursor: 'pointer'
            }} onClick={() => toggleSection('students')}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.25rem',
                letterSpacing: '0.1em',
                fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                textAlign: 'center',
              }}>Graduate Students</h2>
              <div style={{
                width: '300px',
                height: '3px',
                background: '#3b82f6',
                margin: '0 auto 1.5rem auto',
                borderRadius: '2px',
              }} />
              {expandedSections.students ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {expandedSections.students && (
              <div className="grid-container">
                {students.map((student, index) => (
                  <div key={index} className="grid-item">
                    <div style={{
                      width: '216px',
                      height: '216px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem auto',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }}>
                      <img 
                        src={`/${student.image}`} 
                        alt={student.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                    </div>
                    <h3 style={{ fontSize: '0.78375rem', fontWeight: '600', marginBottom: '0.125rem', textAlign: 'center' }}>
                      {student.name}
                    </h3>
                    <p style={{ color: '#f59e0b', fontWeight: '600', marginBottom: '0.125rem', fontSize: '0.78375rem' }}>
                      {student.level}
                    </p>
                    <p style={{ color: '#64748b', marginBottom: '0.25rem', fontSize: '0.78375rem', fontWeight: '500' }}>
                      {student.research}
                    </p>
                    <a href={`mailto:${student.email}`} style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.78375rem', fontWeight: '500' }}>
                      <FaEnvelope style={{ marginRight: '0.5rem' }} />
                      {student.email}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Graduate Student Mentees Section */}
          {/* ...omitted for brevity, copy mentees table from People.jsx... */}
        </section>
      </div>
    </main>
  );
};

export default OurTeam;
