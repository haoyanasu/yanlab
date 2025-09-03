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
            style={{ textAlign: 'left' }}
          >
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
              description={<span style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.7' }}>
                Our research focuses on designing programmable DNA nanostructures by encoding structural and functional instructions directly into DNA sequences, leveraging predictable base-pairing and versatile junctions to create precise, tunable architectures. From early demonstrations of DNA as a scaffold for ordered lattices and 3D crystals to engineering assemblies with atomic-level precision, we have shown how DNA can organize matter and host molecules for structural studies. We pioneered complex DNA and RNA origami, folding long strands into intricate 2D and 3D shapes for applications in dynamic devices and biomedical platforms, and collaborated with computer scientists to develop automated design tools that streamline the creation of reconfigurable nanostructures, programmable patterns, and molecular computing devices. Together, these efforts have built an integrated design ecosystem—from simple DNA tiles to sophisticated crystalline lattices—that advances nanoscale control of matter and paves the way for future breakthroughs in nanotechnology, computation, and medicine.
              </span>}
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

          {/* Research Funded By - Only agencies from yanlab-asu.com */}
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
              Funding Agencies
            </h2>
            <div style={{
              width: '300px',
              height: '3px',
              background: '#3b82f6',
              margin: '0 auto 2.5rem auto'
            }} />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              alignItems: 'center',
              borderTop: '2px solid #e5e7eb',
              borderBottom: '2px solid #e5e7eb',
              padding: '2.5rem 0'
            }}>
              {/* Row 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/aro.png" alt="Army Research Office" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>Army Research Office</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/doe.png" alt="Department of Energy" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>Department of Energy</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/don.png" alt="Department of Navy" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>Department of Navy</div>
              </div>
              {/* Row 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/nih.png" alt="National Institutes of Health" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>National Institutes of Health</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/nsf.png" alt="National Science Foundation" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>National Science Foundation</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
                <img src="/pharma.png" alt="PhRMA Foundation" style={{ maxHeight: '80px', maxWidth: '100%' }} />
                <div style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#334155', fontWeight: '500', textAlign: 'center' }}>PhRMA Foundation</div>
              </div>
            </div>
          </motion.div>


        </section>
      </div>
    </main>
  );
};

export default Research;