import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Research.css';

const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="research-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="page-container">
        {/* Main Title Section */}
        <motion.section 
          className="research-hero"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            RESEARCH
          </motion.h1>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.section>

        {/* Research Description */}
        <motion.section 
          className="research-description"
          variants={itemVariants}
        >
          <motion.p 
            className="research-text"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            The pursuit of new concepts in catalysis: organocatalysis, cascade, synergistic, 
            photoredox and metallaphotoredox catalysis and the application of such to the total 
            synthesis of natural products and pharmaceuticals. Leveraging photocatalysis to 
            investigate complex biological environments.
          </motion.p>
        </motion.section>

        {/* Research Areas Flow */}
        <motion.section 
          className="research-areas"
          ref={ref}
          variants={itemVariants}
        >
          <motion.div 
            className="research-flow"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
          >
            {/* Photoredox */}
            <motion.div 
              className="research-area photoredox"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>PHOTOREDOX</h3>
              <div className="area-circle">
                <div className="chemical-structure">
                  <div className="molecule">
                    <span className="atom">Ir</span>
                    <div className="bonds">
                      <div className="bond"></div>
                      <div className="bond"></div>
                      <div className="bond"></div>
                    </div>
                  </div>
                </div>
                <p className="catalyst-desc">visible light photoredox catalyst</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div 
              className="flow-arrow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              →
            </motion.div>

            {/* Proximity Labeling */}
            <motion.div 
              className="research-area proximity"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>PROXIMITY LABELING</h3>
              <div className="area-circle">
                <div className="network-diagram">
                  <div className="node node-1"></div>
                  <div className="node node-2"></div>
                  <div className="node node-3"></div>
                  <div className="node node-4"></div>
                  <div className="node node-5"></div>
                  <div className="target-blob">?</div>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div 
              className="flow-arrow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              →
            </motion.div>

            {/* Organocatalysis */}
            <motion.div 
              className="research-area organocatalysis"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>ORGANOCATALYSIS</h3>
              <div className="area-circle">
                <div className="chemical-structure">
                  <div className="molecule organic">
                    <div className="ring">
                      <span className="atom">N</span>
                      <span className="atom">C</span>
                      <span className="atom">O</span>
                    </div>
                  </div>
                </div>
                <div className="catalyst-types">
                  <span>iminium</span>
                  <span>enamine</span>
                  <span>cascade</span>
                  <span>synergistic</span>
                </div>
              </div>
            </motion.div>

            {/* Arrow */}
            <motion.div 
              className="flow-arrow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              →
            </motion.div>

            {/* Total Synthesis */}
            <motion.div 
              className="research-area synthesis"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>TOTAL SYNTHESIS</h3>
              <div className="area-circle">
                <div className="synthesis-steps">
                  <div className="step step-1">Im</div>
                  <div className="step step-2">En</div>
                  <div className="step step-3">Cu</div>
                  <div className="step step-4">Im</div>
                </div>
                <div className="complex-molecule">
                  <div className="polycyclic">
                    <div className="ring-system">
                      <div className="ring-1"></div>
                      <div className="ring-2"></div>
                      <div className="ring-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Arrow */}
            <motion.div 
              className="flow-arrow final-arrow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Research Details */}
        <motion.section 
          className="research-details"
          variants={itemVariants}
        >
          <motion.div 
            className="grid-container"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Photoredox Catalysis</h3>
              <p>
                Development of visible light photoredox catalysts for sustainable chemical 
                transformations. Our research focuses on iridium and ruthenium complexes 
                that enable novel bond-forming reactions under mild conditions.
              </p>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Organocatalysis</h3>
              <p>
                Design and application of organic catalysts for enantioselective synthesis. 
                We develop iminium and enamine catalysis strategies for complex molecule 
                construction with high stereocontrol.
              </p>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Total Synthesis</h3>
              <p>
                Efficient synthesis of complex natural products and pharmaceutical targets. 
                Our approach combines multiple catalytic strategies to access challenging 
                molecular architectures.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Research; 