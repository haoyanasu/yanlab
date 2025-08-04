import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Publications.css';

const Publications = () => {
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

  const publications = [
    {
      year: "2024",
      title: "Visible Light Photoredox Catalysis in Complex Molecule Synthesis",
      authors: "Yan, L.; Chen, S.; Rodriguez, M.",
      journal: "Journal of the American Chemical Society",
      doi: "10.1021/jacs.2024.xxxxx",
      category: "Photoredox Catalysis"
    },
    {
      year: "2024",
      title: "Organocatalytic Cascade Reactions for Natural Product Synthesis",
      authors: "Yan, L.; Johnson, A.; Wang, E.",
      journal: "Angewandte Chemie International Edition",
      doi: "10.1002/anie.2024xxxxx",
      category: "Organocatalysis"
    },
    {
      year: "2023",
      title: "Metallaphotoredox Catalysis: A New Paradigm for C-C Bond Formation",
      authors: "Yan, L.; Kim, D.; Chen, S.",
      journal: "Nature Chemistry",
      doi: "10.1038/nchem.2023.xxxxx",
      category: "Metallaphotoredox"
    },
    {
      year: "2023",
      title: "Total Synthesis of Complex Natural Products via Synergistic Catalysis",
      authors: "Yan, L.; Rodriguez, M.; Johnson, A.",
      journal: "Chemical Reviews",
      doi: "10.1021/acs.chemrev.2023.xxxxx",
      category: "Total Synthesis"
    },
    {
      year: "2023",
      title: "Proximity Labeling in Biological Systems: New Applications",
      authors: "Yan, L.; Wang, E.; Kim, D.",
      journal: "Science",
      doi: "10.1126/science.2023.xxxxx",
      category: "Proximity Labeling"
    },
    {
      year: "2022",
      title: "Enantioselective Organocatalysis: Recent Advances and Applications",
      authors: "Yan, L.; Chen, S.; Rodriguez, M.",
      journal: "Accounts of Chemical Research",
      doi: "10.1021/acs.accounts.2022.xxxxx",
      category: "Organocatalysis"
    }
  ];

  return (
    <motion.div 
      className="publications-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="publications-hero"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            PUBLICATIONS
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
            Recent publications from the Yan Lab showcasing our research in catalysis and chemical synthesis.
          </motion.p>
        </motion.section>

        {/* Publications List */}
        <motion.section 
          className="publications-list"
          ref={ref}
          variants={itemVariants}
        >
          <motion.div 
            className="publications-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            {publications.map((pub, index) => (
              <motion.div 
                key={index}
                className="publication-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: isInView ? "none" : "translateY(50px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + index * 0.1}s`
                }}
              >
                <div className="pub-year">{pub.year}</div>
                <div className="pub-category">{pub.category}</div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal}</p>
                <p className="pub-doi">DOI: {pub.doi}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section 
          className="stats-section"
          variants={itemVariants}
        >
          <motion.h2 
            className="section-title"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            PUBLICATION STATISTICS
          </motion.h2>
          <motion.div 
            className="stats-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
          >
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">100+</div>
              <div className="stat-label">Publications</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">5000+</div>
              <div className="stat-label">Citations</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">15</div>
              <div className="stat-label">Patents</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">25</div>
              <div className="stat-label">Years of Research</div>
            </motion.div>
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
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s"
            }}
          >
            <h3>Request Reprints</h3>
            <p>
              For reprints of our publications or additional information about our research, 
              please contact Dr. Yan directly.
            </p>
            <div className="contact-info">
              <p>Email: yan@university.edu</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Publications; 