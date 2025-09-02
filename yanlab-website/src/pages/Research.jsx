import React from 'react';
import { motion } from 'framer-motion';
import { FaDna, FaMicroscope, FaAtom, FaRocket, FaLightbulb } from 'react-icons/fa';
import SectionBlock from '../components/SectionBlock';

const Research = () => {
  const researchAreas = [
    {
      icon: FaDna,
      title: "Design",
      description: "Rational design and engineering of DNA nanostructures with precise structural control and programmable functionality. Our research focuses on creating sophisticated molecular architectures using computational modeling and experimental validation.",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      detailedDescription: "Our research team creates structures from DNA and RNA as targeted medicines for the treatment of cancer. To do this, we study and control the fundamental self-assembly properties of DNA, polymers and supramolecular materials."
    },
    {
      icon: FaRocket,
      title: "Assembly",
      description: "Investigating the fundamental principles of molecular self-assembly to create complex hierarchical structures. Our work focuses on understanding and controlling the assembly pathways of DNA nanostructures for precise architectural control.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      detailedDescription: "We study the self-assembly mechanisms that govern the formation of DNA nanostructures, developing new strategies for controlling assembly kinetics and thermodynamics to achieve desired structural outcomes."
    },
    {
      icon: FaAtom,
      title: "Functionalization",
      description: "Incorporating functional elements and responsive capabilities into DNA nanostructures for therapeutic and diagnostic applications. We develop smart materials that can respond to environmental stimuli.",
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      detailedDescription: "Using only a minimal set of DNA strands, we build unique 3D structures for applications such as drug delivery and the organization of other materials. This strategy allows us to make complex constructs that will be useful for translation to clinical applications."
    },
    {
      icon: FaMicroscope,
      title: "Interface",
      description: "Developing interfaces between DNA nanostructures and biological systems for enhanced biocompatibility and functionality. We explore how DNA can be used to modify and organize biological systems.",
      color: "#4facfe",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      detailedDescription: "In the Sleiman lab, we work towards combining DNA with many other materials, including organic molecules, polymers, metal ions, and inorganic nanomaterials, to explore how DNA can be used to modify and organize these moieties. We make sequence-defined polymers with DNA, and study their ability to act as cancer therapies."
    }
  ];

  return (
    <main className="research-main-container">
      <div className="research-content-wrapper fade-in">
        <section className="page-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-title">Research</h1>
            <p className="page-subtitle">
              Exploring the frontiers of DNA nanotechnology and molecular design
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.2375rem', fontWeight: '600', marginBottom: '1rem', color: '#1e293b' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '0.9075rem', lineHeight: '1.8', color: '#475569', marginBottom: '1rem' }}>
              The Yan Lab focuses on the rational design and engineering of DNA nanostructures for applications 
              in biotechnology, medicine, and materials science. We develop innovative approaches to create 
              programmable molecular systems that can sense, compute, and respond to their environment.
            </p>
            <p style={{ fontSize: '0.9075rem', lineHeight: '1.8', color: '#475569' }}>
              Our interdisciplinary research combines principles from chemistry, biology, physics, and engineering 
              to push the boundaries of what's possible at the molecular scale.
            </p>
          </motion.div>

          {/* Research Areas */}
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Research Areas
          </motion.h2>

          {/* Research Areas - Flexbox Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            <SectionBlock
              image={'/design.jpg'}
              title={researchAreas[0].title}
              description={researchAreas[0].description}
            />
            <SectionBlock
              image={'/assembly.jpg'}
              title={researchAreas[1].title}
              description={researchAreas[1].description}
              reverse
            />
            <SectionBlock
              image={'/function.jpg'}
              title={researchAreas[2].title}
              description={researchAreas[2].description}
            />
            <SectionBlock
              image={'/interface.jpg'}
              title={researchAreas[3].title}
              description={researchAreas[3].description}
              reverse
            />
          </div>

          {/* Research Funded By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            style={{ textAlign: 'center', margin: '4rem 0' }}
          >
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#1e293b',
              marginBottom: '0.5rem',
              letterSpacing: '0.1em'
            }}>
              RESEARCH FUNDED BY:
            </h2>
            
            {/* Blue underline */}
            <div style={{
              width: '100px',
              height: '3px',
              background: '#3b82f6',
              margin: '0 auto 3rem auto'
            }} />

            {/* Logo Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto',
              alignItems: 'center'
            }}>
              {/* Row 1 */}
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* ONR Logo placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Office of Naval Research
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* NSF Logo placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  National Science Foundation
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* NIH Logo placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  National Institutes of Health
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* ENERGY.GOV Logo placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Department of Energy
                </div>
              </div>

              {/* Row 2 */}
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* Army Research Office placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Army Research Office
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* HFSP Logo placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Human Frontier Science Program
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* Alexander von Humboldt Foundation placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Alexander von Humboldt Foundation
                </div>
              </div>
              
              <div style={{
                border: '1px solid #e5e7eb',
                padding: '2rem',
                borderRadius: '8px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px'
              }}>
                {/* Stanley Center placeholder */}
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  Stanley Center for Psychiatric Research
                </div>
              </div>
            </div>
          </motion.div>


        </section>
      </div>
    </main>
  );
};

export default Research;