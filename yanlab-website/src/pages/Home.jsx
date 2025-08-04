import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Home.css';

const Home = () => {
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
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="hero-section"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            WELCOME TO THE YAN LAB
          </motion.h1>
          <motion.div 
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="page-subtitle"
            variants={itemVariants}
          >
            Advancing the frontiers of catalysis and chemical synthesis through innovative research in organocatalysis, photoredox catalysis, and total synthesis of complex natural products.
          </motion.p>
        </motion.section>

        {/* Research Overview */}
        <motion.section 
          className="content-section"
          ref={ref}
          variants={itemVariants}
        >
          <motion.h2 
            className="section-title"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            RESEARCH OVERVIEW
          </motion.h2>
          <motion.div 
            className="placeholder-text"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <h3>Our Mission</h3>
            <p>
              The Yan Lab focuses on developing new catalytic methodologies and synthetic strategies 
              for the construction of complex molecules. Our research spans multiple areas including 
              organocatalysis, photoredox catalysis, cascade reactions, and the total synthesis of 
              biologically active natural products. We leverage cutting-edge techniques to investigate 
              complex biological environments and develop novel therapeutic agents.
            </p>
          </motion.div>
        </motion.section>

        {/* Research Areas Grid */}
        <motion.section 
          className="content-section"
          variants={itemVariants}
        >
          <motion.h2 
            className="section-title"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
          >
            RESEARCH AREAS
          </motion.h2>
          <motion.div 
            className="research-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon photoredox">PHOTOREDOX</div>
              <h3>Photoredox Catalysis</h3>
              <p>Development of visible light photoredox catalysts for sustainable chemical transformations.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon organocatalysis">ORGANOCATALYSIS</div>
              <h3>Organocatalysis</h3>
              <p>Design and application of organic catalysts for enantioselective synthesis.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon synthesis">TOTAL SYNTHESIS</div>
              <h3>Total Synthesis</h3>
              <p>Efficient synthesis of complex natural products and pharmaceutical targets.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon proximity">PROXIMITY LABELING</div>
              <h3>Proximity Labeling</h3>
              <p>Investigation of complex biological environments using advanced labeling techniques.</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Lab Image Placeholder */}
        <motion.section 
          className="content-section"
          variants={itemVariants}
        >
          <motion.div 
            className="placeholder-image"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
          >
            <div className="image-placeholder-content">
              <h3>Laboratory Facilities</h3>
              <p>State-of-the-art equipment and research facilities</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home; 