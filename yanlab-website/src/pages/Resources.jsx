import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBook, FaFlask, FaDatabase, FaTools, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Resources.css';

const Resources = () => {
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

  const resources = [
    {
      category: "Lab Protocols",
      icon: FaFlask,
      items: [
        { name: "Photoredox Catalysis Protocol", description: "Standard procedure for photoredox reactions" },
        { name: "Organocatalysis Setup", description: "Protocol for organocatalytic reactions" },
        { name: "Column Chromatography", description: "Purification techniques and procedures" },
        { name: "NMR Sample Preparation", description: "Guidelines for NMR analysis" }
      ]
    },
    {
      category: "Safety Information",
      icon: FaTools,
      items: [
        { name: "Chemical Safety Guidelines", description: "Safety protocols for chemical handling" },
        { name: "Emergency Procedures", description: "Emergency contact information and procedures" },
        { name: "Waste Disposal", description: "Proper disposal of chemical waste" },
        { name: "PPE Requirements", description: "Personal protective equipment guidelines" }
      ]
    },
    {
      category: "Software & Tools",
      icon: FaDatabase,
      items: [
        { name: "ChemDraw", description: "Chemical structure drawing software" },
        { name: "MestReNova", description: "NMR data processing software" },
        { name: "SciFinder", description: "Chemical literature database" },
        { name: "Lab Inventory System", description: "Chemical inventory management" }
      ]
    },
    {
      category: "Useful Links",
      icon: FaBook,
      items: [
        { name: "ACS Publications", description: "American Chemical Society journals" },
        { name: "Chemical Abstracts", description: "Chemical literature database" },
        { name: "University Library", description: "Access to scientific literature" },
        { name: "Department Website", description: "Chemistry department resources" }
      ]
    }
  ];

  return (
    <div className="page-wrapper">
      <motion.div 
        className="resources-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="resources-hero"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            RESOURCES
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
            Essential resources, protocols, and tools for research in the Yan Lab.
          </motion.p>
        </motion.section>

        {/* Resources Grid */}
        <motion.section 
          className="resources-grid-section"
          ref={ref}
          variants={itemVariants}
        >
          <motion.div 
            className="resources-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            {resources.map((category, index) => (
              <motion.div 
                key={index}
                className="resource-category"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: isInView ? "none" : "translateY(50px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + index * 0.1}s`
                }}
              >
                <h3 className="category-title">
                  <category.icon className="category-icon" />
                  {category.category}
                </h3>
                <div className="resource-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="resource-item">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-description">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="contact-section"
          variants={itemVariants}
        >
          <motion.div 
            className="contact-card"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            <h3>Need Help?</h3>
            <p>
              If you need access to any of these resources or have questions about lab procedures, 
              please contact Dr. Yan or any senior lab member.
            </p>
            <div className="contact-info">
              <p>Email: yan@university.edu</p>
              <p>Phone: (555) 123-4567</p>
              <p>Office: Chemistry Building, Room 301</p>
            </div>
          </motion.div>
        </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Resources; 