import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaAtom, FaDna, FaFlask, FaMicroscope } from 'react-icons/fa';
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
    <div className="page-wrapper">
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
            Advancing the frontiers of DNA nanotechnology and bioengineering through innovative research in DNA origami, nucleic acid devices, and programmable molecular systems.
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
              The Yan Lab focuses on developing programmable DNA and RNA nanostructures for applications 
              in bioengineering, nanotechnology, and medicine. Our research spans multiple areas including 
              DNA origami, nucleic acid computing, molecular robotics, and biomedical applications. We leverage 
              cutting-edge techniques to design and construct sophisticated molecular machines and devices 
              that can operate at the nanoscale with unprecedented precision.
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
              <div className="research-icon photoredox">
                <FaAtom />
              </div>
              <h3>DNA Nanotechnology</h3>
              <p>Design and construction of programmable DNA nanostructures for various applications.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon organocatalysis">
                <FaFlask />
              </div>
              <h3>DNA Origami</h3>
              <p>Engineering complex 3D DNA structures with nanometer precision and functionality.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon synthesis">
                <FaDna />
              </div>
              <h3>Bioengineering</h3>
              <p>Developing nucleic acid-based devices for biomedical and therapeutic applications.</p>
            </motion.div>
            
            <motion.div 
              className="research-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="research-icon proximity">
                <FaMicroscope />
              </div>
              <h3>Molecular Computing</h3>
              <p>Creating DNA and RNA-based computational systems for information processing.</p>
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
    </div>
  );
};

export default Home; 