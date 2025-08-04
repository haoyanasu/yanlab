import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaOrcid, FaGraduationCap, FaUsers } from 'react-icons/fa';
import './Team.css';

const Team = () => {
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

  const teamMembers = [
    {
      name: "Dr. Yan",
      role: "Principal Investigator",
      image: "placeholder",
      research: "Catalysis and Chemical Synthesis",
      email: "yan@university.edu"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Postdoctoral Researcher",
      image: "placeholder",
      research: "Photoredox Catalysis",
      email: "schen@university.edu"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Postdoctoral Researcher",
      image: "placeholder",
      research: "Organocatalysis",
      email: "mrodriguez@university.edu"
    },
    {
      name: "Alex Johnson",
      role: "Graduate Student",
      image: "placeholder",
      research: "Total Synthesis",
      email: "ajohnson@university.edu"
    },
    {
      name: "Emily Wang",
      role: "Graduate Student",
      image: "placeholder",
      research: "Cascade Reactions",
      email: "ewang@university.edu"
    },
    {
      name: "David Kim",
      role: "Graduate Student",
      image: "placeholder",
      research: "Metallaphotoredox Catalysis",
      email: "dkim@university.edu"
    }
  ];

  return (
    <div className="page-wrapper">
      <motion.div 
        className="team-page"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="page-container">
        {/* Hero Section */}
        <motion.section 
          className="team-hero"
          variants={itemVariants}
        >
          <motion.h1 
            className="page-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            TEAM
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
            Meet the researchers and students who make our groundbreaking discoveries possible.
          </motion.p>
        </motion.section>

        {/* Principal Investigator */}
        <motion.section 
          className="pi-section"
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
            PRINCIPAL INVESTIGATOR
          </motion.h2>
          <motion.div 
            className="pi-card"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <div className="pi-image">
              <div className="placeholder-image">PI Photo</div>
            </div>
            <div className="pi-info">
              <h3>Dr. Yan</h3>
              <p className="pi-role">Principal Investigator</p>
              <p className="pi-research">Research Focus: Catalysis and Chemical Synthesis</p>
              <p className="pi-description">
                Dr. Yan leads our research group in developing innovative catalytic methodologies 
                for complex molecule synthesis. With expertise in organocatalysis, photoredox 
                catalysis, and total synthesis, Dr. Yan has published over 100 papers and 
                received numerous awards for contributions to the field.
              </p>
              <div className="pi-contact">
                <p>Email: yan@university.edu</p>
                <p>Office: Chemistry Building, Room 301</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Team Members */}
        <motion.section 
          className="team-members"
          ref={ref}
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
            RESEARCH TEAM
          </motion.h2>
          <motion.div 
            className="team-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            {teamMembers.slice(1).map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="member-image">
                  <div className="placeholder-image">Photo</div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-research">{member.research}</p>
                  <p className="member-email">{member.email}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section 
          className="join-section"
          variants={itemVariants}
        >
          <motion.div 
            className="join-card"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            }}
          >
            <h3>Join Our Team</h3>
            <p>
              We are always looking for motivated graduate students and postdoctoral researchers 
              to join our group. If you are interested in catalysis, chemical synthesis, or 
              related areas, please contact Dr. Yan for more information about available positions.
            </p>
            <div className="join-contact">
              <p>Email: yan@university.edu</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </motion.div>
        </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Team; 