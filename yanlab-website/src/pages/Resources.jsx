import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaDatabase, FaDownload, FaExternalLinkAlt, FaDna, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const Resources = () => {
  const resources = [
    {
      category: "Software & Tools",
      icon: FaLaptopCode,
      color: "#3b82f6",
      items: [
        {
          name: "DNA Designer",
          description: "Web-based tool for designing DNA origami structures and predicting folding patterns.",
          type: "Web Tool",
          link: "#"
        },
        {
          name: "Sequence Analyzer",
          description: "Python package for analyzing DNA sequences and optimizing strand design.",
          type: "Python Package",
          link: "#"
        },
        {
          name: "Nanostructure Simulator",
          description: "Molecular dynamics simulation software specifically designed for DNA nanostructures.",
          type: "Software",
          link: "#"
        }
      ]
    },
    {
      category: "Databases",
      icon: FaDatabase,
      color: "#10b981",
      items: [
        {
          name: "DNA Origami Library",
          description: "Comprehensive database of DNA origami designs with detailed structural information.",
          type: "Database",
          link: "#"
        },
        {
          name: "Sequence Repository",
          description: "Collection of optimized DNA sequences for various nanotechnology applications.",
          type: "Repository",
          link: "#"
        },
        {
          name: "Structure Gallery",
          description: "Visual gallery of DNA nanostructures with 3D models and experimental data.",
          type: "Gallery",
          link: "#"
        }
      ]
    },
    {
      category: "Protocols & Methods",
      icon: FaDna,
      color: "#f59e0b",
      items: [
        {
          name: "DNA Origami Synthesis",
          description: "Step-by-step protocol for synthesizing DNA origami structures in the laboratory.",
          type: "Protocol",
          link: "#"
        },
        {
          name: "Purification Methods",
          description: "Advanced techniques for purifying and characterizing DNA nanostructures.",
          type: "Method",
          link: "#"
        },
        {
          name: "Imaging Guidelines",
          description: "Best practices for AFM and TEM imaging of DNA nanostructures.",
          type: "Guide",
          link: "#"
        }
      ]
    },
    {
      category: "Educational Materials",
      icon: FaGraduationCap,
      color: "#8b5cf6",
      items: [
        {
          name: "Introduction to DNA Nanotechnology",
          description: "Comprehensive course materials covering the fundamentals of DNA nanotechnology.",
          type: "Course",
          link: "#"
        },
        {
          name: "Video Lectures",
          description: "Collection of recorded lectures on advanced topics in molecular design.",
          type: "Videos",
          link: "#"
        },
        {
          name: "Interactive Tutorials",
          description: "Hands-on tutorials for learning DNA structure design and analysis.",
          type: "Tutorial",
          link: "#"
        }
      ]
    }
  ];

  const publications = [
    {
      title: "DNA Nanotechnology: Foundations and Applications",
      authors: "Yan, H., et al.",
      journal: "Nature Reviews Materials",
      year: "2024",
      type: "Review"
    },
    {
      title: "Programmable DNA Nanostructures for Biomedical Applications",
      authors: "Yan, H., et al.",
      journal: "Science",
      year: "2023",
      type: "Research"
    },
    {
      title: "Advances in DNA Origami Design and Synthesis",
      authors: "Yan, H., et al.",
      journal: "Chemical Reviews",
      year: "2023",
      type: "Review"
    }
  ];

  return (
    <main className="resources-main-container">
      <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0 }}>
        <section className="page-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Resources</h1>
            <p className="page-subtitle">
              Tools, databases, protocols, and educational materials for DNA nanotechnology research
            </p>
          </motion.div>

          {/* Quick Access */}
          <motion.div
            className="card"
            style={{ background: 'linear-gradient(135deg, #1e293b, #334155)', color: 'white' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.2375rem', marginBottom: '1.5rem' }}>Quick Access</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <a 
                href="#software" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FaLaptopCode style={{ fontSize: '1.2375rem' }} />
                <div>
                  <div style={{ fontWeight: '600' }}>Software Tools</div>
                  <div style={{ fontSize: '0.70125rem', opacity: '0.8' }}>Design & Analysis</div>
                </div>
              </a>
              
              <a 
                href="#databases" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FaDatabase style={{ fontSize: '1.2375rem' }} />
                <div>
                  <div style={{ fontWeight: '600' }}>Databases</div>
                  <div style={{ fontSize: '0.70125rem', opacity: '0.8' }}>Structures & Sequences</div>
                </div>
              </a>
              
              <a 
                href="#protocols" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                                    <FaDna style={{ fontSize: '1.2375rem' }} />
                <div>
                  <div style={{ fontWeight: '600' }}>Protocols</div>
                  <div style={{ fontSize: '0.70125rem', opacity: '0.8' }}>Methods & Procedures</div>
                </div>
              </a>
              
              <a 
                href="#education" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '1rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FaGraduationCap style={{ fontSize: '1.2375rem' }} />
                <div>
                  <div style={{ fontWeight: '600' }}>Education</div>
                  <div style={{ fontSize: '0.70125rem', opacity: '0.8' }}>Courses & Tutorials</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Resource Categories */}
          {resources.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              id={category.category.toLowerCase().replace(/\s+/g, '')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                margin: '3rem 0 1.5rem 0'
              }}>
                <category.icon style={{ fontSize: '1.2375rem', color: category.color }} />
                <h2 className="section-title" style={{ margin: 0 }}>{category.category}</h2>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '1.5rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="card"
                    style={{ 
                      textAlign: 'left',
                      border: '1px solid #e2e8f0',
                      position: 'relative',
                      paddingBottom: '3rem'
                    }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '1rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.03125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        margin: 0
                      }}>
                        {item.name}
                      </h3>
                      <span style={{
                        background: `${category.color}20`,
                        color: category.color,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.78375rem',
                        fontWeight: '600'
                      }}>
                        {item.type}
                      </span>
                    </div>

                    <p style={{
                      color: '#64748b',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      {item.description}
                    </p>

                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '2rem',
                      right: '2rem'
                    }}>
                      <a
                        href={item.link}
                        className="btn"
                        style={{
                          background: category.color,
                          fontSize: '0.78375rem', fontWeight: '500',
                          padding: '0.5rem 1rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '0.78375rem', fontWeight: '500' }} />
                        Access Resource
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Key Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              margin: '3rem 0 1.5rem 0'
            }}>
              <FaBook style={{ fontSize: '1.2375rem', color: '#ef4444' }} />
              <h2 className="section-title" style={{ margin: 0 }}>Key Publications</h2>
            </div>

            <div className="card" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
              {publications.map((pub, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem 0',
                    borderBottom: index < publications.length - 1 ? '1px solid #e2e8f0' : 'none'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '0.5rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '0.78375rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      margin: 0,
                      flex: 1
                    }}>
                      {pub.title}
                    </h3>
                    <span style={{
                      background: pub.type === 'Review' ? '#f59e0b20' : '#3b82f620',
                      color: pub.type === 'Review' ? '#f59e0b' : '#3b82f6',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                        fontSize: '0.78375rem', fontWeight: '600'
                    }}>
                      {pub.type}
                    </span>
                  </div>
                  <p style={{ color: '#64748b', marginBottom: '0.25rem' }}>
                    {pub.authors}
                  </p>
                  <p style={{ color: '#1e293b', fontWeight: '600' }}>
                    {pub.journal} ({pub.year})
                  </p>
                </div>
              ))}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a href="/publications" className="btn">
                  View All Publications
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="card"
            style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', color: 'white' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h3 style={{ fontSize: '1.2375rem', marginBottom: '1rem' }}>Need Help?</h3>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Can't find what you're looking for? Contact us for assistance with protocols, 
              software usage, or access to additional resources.
            </p>
            <a href="mailto:hao.yan@asu.edu" className="btn" style={{ background: 'white', color: '#ef4444' }}>
              Contact Us
            </a>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default Resources;