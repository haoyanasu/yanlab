import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaNewspaper, FaCalendar, FaTag, FaEnvelope, FaBell } from 'react-icons/fa';
import './News.css';

const News = () => {
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

  const newsItems = [
    {
      date: "March 15, 2024",
      title: "New Publication in JACS",
      content: "Our latest work on visible light photoredox catalysis has been published in the Journal of the American Chemical Society.",
      category: "Publication"
    },
    {
      date: "February 28, 2024",
      title: "Dr. Chen Receives Postdoctoral Fellowship",
      content: "Congratulations to Dr. Sarah Chen for receiving the prestigious NSF Postdoctoral Fellowship for her work on organocatalysis.",
      category: "Award"
    },
    {
      date: "January 15, 2024",
      title: "Lab Welcomes New Graduate Students",
      content: "We are excited to welcome three new graduate students to the Yan Lab: Alex Johnson, Emily Wang, and David Kim.",
      category: "People"
    },
    {
      date: "December 10, 2023",
      title: "Research Grant Awarded",
      content: "The Yan Lab has been awarded a $2.5M NIH grant for research on proximity labeling in biological systems.",
      category: "Funding"
    },
    {
      date: "November 20, 2023",
      title: "Conference Presentation",
      content: "Dr. Yan will present our latest findings at the ACS National Meeting in San Francisco next month.",
      category: "Conference"
    },
    {
      date: "October 5, 2023",
      title: "Patent Filed",
      content: "A new patent has been filed for our innovative catalytic methodology for complex molecule synthesis.",
      category: "Patent"
    }
  ];

  return (
    <div className="page-wrapper">
      <motion.div 
        className="news-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="news-hero"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            NEWS
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
            Stay updated with the latest news, awards, and achievements from the Yan Lab.
          </motion.p>
        </motion.section>

        {/* News Grid */}
        <motion.section 
          className="news-grid-section"
          ref={ref}
          variants={itemVariants}
        >
          <motion.div 
            className="news-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            {newsItems.map((item, index) => (
              <motion.div 
                key={index}
                className="news-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: isInView ? "none" : "translateY(50px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + index * 0.1}s`
                }}
              >
                <div className="news-date">{item.date}</div>
                <div className="news-category">{item.category}</div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-content">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Subscribe Section */}
        <motion.section 
          className="subscribe-section"
          variants={itemVariants}
        >
          <motion.div 
            className="subscribe-card"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            <h3>Stay Connected</h3>
            <p>
              Subscribe to our newsletter to receive updates about our latest research, 
              publications, and lab news directly to your inbox.
            </p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </motion.div>
        </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default News; 