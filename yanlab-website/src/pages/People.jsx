import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const People = () => {
  const [expandedSections, setExpandedSections] = useState({
    faculty: true,
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

  const faculty = {
    name: "Hao Yan",
    title: "Regents Professor",
    subtitle: "Milton D. Glick Distinguished Professor",
    department: "School of Molecular Sciences and School of Medicine",
    office: "BDA 124B",
    phone: "(480) 727-8570",
    email: "hao.yan@asu.edu",
    bio: "Dr. Hao Yan is a leading expert in DNA nanotechnology and molecular design. His research focuses on structural DNA nanotechnology and DNA-directed self-assembly.",
    awards: [
      "Foresight Institute Feynman Prize in Nanotechnology",
      "Rozenberg Tulip Award in DNA Computing",
      "Humboldt Research Award"
    ]
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
    <main className="people-main-container">
      <div className="people-content-wrapper fade-in" style={{ borderRadius: 0 }}>
        <section className="page-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Removed page title 'People' as requested */}
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
                marginTop: '1.5rem'
            }}>PI Yan</h2>
            <div style={{
              width: '300px',
              height: '3px',
              background: '#3b82f6',
                margin: '0 auto 1.5rem auto',
              borderRadius: '2px',
            }} />
          </motion.div>

          {/* Faculty Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >


              <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <img 
                    src="/hyan.jpg" 
                    alt="Dr. Hao Yan"
                    style={{
                      width: '280px',
                      height: '300px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '4px'
                    }}
                  />
                  <div style={{ textAlign: 'left', flex: '1', minWidth: '300px' }}>
                    <h3 style={{ fontSize: '1.2375rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                      {faculty.name}
                    </h3>
                    <p style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '0.25rem' }}>
                      {faculty.title}
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.7425rem' }}>
                      {faculty.subtitle}
                    </p>
                  </div>
                </div>

                <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
                  <p style={{ marginBottom: '0.5rem', color: '#475569', fontSize: '0.78375rem', fontWeight: '500' }}>{faculty.bio}</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem', fontSize: '0.78375rem', fontWeight: '500' }}>
                    <div>
                      <strong style={{ fontWeight: '600' }}>Department:</strong><br />
                      {faculty.department}
                    </div>
                    <div>
                      <strong style={{ fontWeight: '600' }}>Office:</strong> {faculty.office}<br />
                      <strong style={{ fontWeight: '600' }}>Phone:</strong> {faculty.phone}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaEnvelope style={{ color: '#3b82f6' }} />
                      <a href={`mailto:${faculty.email}`} style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.78375rem', fontWeight: '500' }}>
                        {faculty.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.78375rem', fontWeight: '500' }}>
                    <strong style={{ fontWeight: '600' }}>Selected Awards:</strong>
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                      {faculty.awards.map((award, index) => (
                        <li key={index} style={{ marginBottom: '0.15rem', color: '#475569', fontSize: '0.78375rem', fontWeight: '500' }}>{award}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
          </motion.div>

          {/* Research Staff Section */}
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
            transition={{ duration: 0.8, delay: 0.6 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              margin: '1.5rem 0 0.7rem 0',
              cursor: 'pointer'
            }} onClick={() => toggleSection('mentees')}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.25rem',
                letterSpacing: '0.1em',
                fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
                textAlign: 'center',
              }}>Graduate Student Mentees</h2>
              <div style={{
                width: '300px',
                height: '3px',
                background: '#3b82f6',
                margin: '0 auto 1.5rem auto',
                borderRadius: '2px',
              }} />
              {expandedSections.mentees ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {expandedSections.mentees && (
              <div style={{ textAlign: 'left', overflow: 'auto', background: 'transparent', padding: 0 }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '0.78375rem',
                  minWidth: '600px'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: '600', color: '#1e293b' }}>Name</th>
                      <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: '600', color: '#1e293b' }}>Year Enrolled</th>
                      <th style={{ padding: '12px 10px', textAlign: 'left', fontWeight: '600', color: '#1e293b' }}>Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Kyle Lund</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2004</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Medical Director, Clinical Pathology, Landmark Regional Medical Center</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Rahul Chhabra</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2004</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Family Physician, Forest Lane Medical</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Sherri Rinker</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2004</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Director at B2S Life Sciences</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yonggang Ke</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2005</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Emory-Georgia Tech joint Wallace H. Coulter Department of Biomedical Engineering</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Chenxiang Lin</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2005</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Yale University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jaswinder Sharma</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2005</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Senior R&D Staff and Leader, Energy Storage and Conversion Manufacturing Group, Oak Ridge National Lab, TN</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jeanette Nangreave</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2007</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Teaching Professor, Arizona State</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Zhe Li</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2007</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor and Vice Dean, College of Engineering and Applied Sciences, Nanjing University, Chief Technology Office, Neoscura</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Zhao Zhao</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2008</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Senior Research Scientist, Curis Life Sciences</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>XiXi Wei</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2008</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Senior Research Scientist, Curis Life Sciences</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yan Liu</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2009</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Mingqiang Li</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2009</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Central China Normal University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Suchetan Pal</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2009</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Indian Institute of Science Education and Research</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Dongran Han</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2010</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, University of Science and Technology of China</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yuhe Yang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2010</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Principal Research Scientist, Pacific Northwest National Laboratory</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Banani Chakraborty</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2010</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Research Scientist, Molecular Vista Inc.</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yonggang Ke</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2010</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Emory University and Georgia Tech</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Luvena Ong</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2011</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Senior Research Scientist, Institute of Materials Research and Engineering, Singapore</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Anchi Cheng</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2011</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Research Scientist, Simons Foundation</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Zhiyong Shen</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2011</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, Shanghai University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Alexander Kuzuya</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2011</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Kansai University, Japan</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Minghui Liu</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2012</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, University of Central Florida</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Sui Wang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2012</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Tianjin University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Pengfei Wang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2012</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Dalian University of Technology</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jie Chao</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2012</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Nanjing University of Posts and Telecommunications</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Shuoxing Jiang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2013</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, National University of Singapore</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Nicholas Stephanopoulos</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2013</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Feng Li</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2013</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Beijing Institute of Technology</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yongxi Zhao</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2013</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, University of Science and Technology Beijing</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jeanette Nangreave</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2013</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Clinical Assistant Professor, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jianbang Wang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2014</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Hunan University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Tao Zhang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2014</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Beijing University of Chemical Technology</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Chao Zhang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2014</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, University of Illinois at Urbana-Champaign</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Lifeng Zhou</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2014</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Xi'an Jiaotong University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Fei Zhang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2015</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Nanjing University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yijin Zhang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2015</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, University of Connecticut</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yang Yang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2015</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, University of Central Florida</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Guizhi Zhu</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2015</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Henan University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yung Chang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2016</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Mo Li</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2016</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Macau University of Science and Technology</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yuvraj Singh Negi</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2016</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, Indian Institute of Technology Roorkee</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Jing Pan</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2016</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Senior Research Scientist, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Risheng Wang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Spring 2017</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Associate Professor, Shanghai University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Xiaolei Zuo</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2017</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Professor, Shanghai Jiao Tong University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Leeza Abraham</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2018</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Research Scientist, Exodigm</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Yue Tang</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2018</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Assistant Professor, Shandong University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Hao Liu</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2018</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Postdoc, Arizona State University</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Liangxiao Chen</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2019</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Postdoc, Harvard University</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 10px', fontWeight: '500' }}>Lu Yu</td>
                      <td style={{ padding: '10px 10px', color: '#64748b' }}>Fall 2019</td>
                      <td style={{ padding: '10px 10px', color: '#3b82f6' }}>Postdoc, University of Washington</td>
                    </tr>
                  </tbody>
                </table>
                  </div>
              </div>
            )}
          </motion.div>

        </section>
      </div>
    </main>
  );
};

export default People;