import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OurTeam = () => {
  // Remove dropdown/expand logic; always show all sections

  // PI Yan profile for grid
  const piYan = {
    name: "Hao Yan",
    title: "Regents Professor",
    subtitle: "Milton D. Glick Distinguished Professor",
    department: "School of Molecular Sciences and School of Medicine",
    office: "BDA 124B",
    phone: "(480) 727-8570",
    email: "hao.yan@asu.edu",
    image: "hyan.jpg",
    awards: [
      "Foresight Institute Feynman Prize in Nanotechnology",
      "Rozenberg Tulip Award in DNA Computing",
      "Humboldt Research Award"
    ]
  };

  const staff = [
    piYan,
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

  // Combine staff and students for unified grid
  const team = [...staff, ...students];

  return (
    <main className="resources-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
      <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946', paddingLeft: '2.5rem' }}>
        <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>Current Team</h1>
          </motion.div>

          {/* Unified Team Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid-container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              justifyItems: 'center',
              alignItems: 'flex-start',
              gap: '3.5rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {team.map((member, index) => (
                <div key={index} className="grid-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '3.5rem' }}>
                  <div style={{
                    width: '259px',
                    height: '259px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 0.5rem auto',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    display: 'block'
                  }}>
                    <img 
                      src={`/${member.image}`} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.125rem', textAlign: 'center', color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>
                    {member.name}
                  </h3>
                  {/* Special formatting for PI Yan */}
                  {member.name === 'Hao Yan' ? (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.title}</p>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>Biomolecular Programmer and Engineer</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center', marginBottom: '0.125rem' }}>
                        Email
                      </a>
                    </>
                  ) : member.focus ? (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.title}</p>
                      <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.focus}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  ) : (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.level}</p>
                      <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.research}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Graduate Student Mentees Section */}
          {/* ...omitted for brevity, copy mentees table from People.jsx... */}
        </section>
      </div>
    </main>
  );
};

export default OurTeam;
