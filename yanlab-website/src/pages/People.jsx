import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaUser, FaGraduationCap, FaFlask, FaEnvelope, FaPhone, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaAward, FaUniversity, FaResearchgate, FaOrcid, FaLinkedin } from 'react-icons/fa';
import './People.css';

const People = () => {
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

  // Faculty data
  const faculty = {
    name: "Hao Yan",
    title: "Regents Professor Milton D. Glick Distinguished Professor",
    position: "Director, Center for Molecular Design and Biomimetics",
    department: "Professor, School of Molecular Sciences and School of Medicine and Advanced Medical Engineering",
    office: "BDA 124B",
    phone: "(480) 727-8570",
    email: "hao.yan@asu.edu",
    researchInterests: [
      "Structural DNA nanotechnology",
      "DNA-directed self-assembly"
    ],
    bio: "Dr. Hao Yan is a leading expert in DNA nanotechnology and molecular design. His research focuses on structural DNA nanotechnology and DNA-directed self-assembly."
  };

  // Research professionals
  const researchProfessionals = [
    {
      name: "Chad R Simmons",
      title: "Research Professional",
      email: "chad.simmons@asu.edu",
      researchFocus: "Biomacromolecule crystallography"
    },
    {
      name: "Yang Xu",
      title: "Assistant Research Professor",
      email: "yangxu3@asu.edu",
      researchFocus: "DNA nanotechnology research"
    }
  ];

  // Graduate students
  const graduateStudents = [
    {
      name: "Deeksha Satyabola",
      level: "5th Year Graduate Student",
      email: "ddeeksha@asu.edu",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Abhay Prasad",
      level: "5th Year Graduate Student",
      email: "aprasa36@asu.edu",
      researchArea: "Molecular design"
    },
    {
      name: "Rong Zheng",
      level: "4th Year Graduate Student",
      email: "rzheng22@asu.edu",
      researchArea: "DNA assembly"
    },
    {
      name: "Lanshen Zhao",
      level: "4th Year Graduate Student",
      email: "lzhao89@asu.edu",
      researchArea: "Biomolecular engineering"
    },
    {
      name: "Xinyi Tu",
      level: "4th Year Graduate Student",
      email: "xinyitu@asu.edu",
      researchArea: "DNA origami"
    },
    {
      name: "Thong Diep",
      level: "3rd Year Graduate Student",
      email: "tdiep2@asu.edu",
      researchArea: "Molecular nanotechnology"
    },
    {
      name: "Gengshi Wu",
      level: "2nd Year Graduate Student",
      email: "gengshiw@asu.edu",
      researchArea: "DNA-based systems"
    },
    {
      name: "Alexsandra Petrova",
      level: "2nd Year Graduate Student",
      email: "apetrova@asu.edu",
      researchArea: "Structural biology"
    },
    {
      name: "Yichen Yang",
      level: "1st Year Graduate Student",
      email: "yyan62@asu.edu",
      researchArea: "Molecular design"
    }
  ];

  // Undergraduate and exchange students
  const undergraduateStudents = [
    {
      name: "Joel Joseph",
      program: "Barrett Honors Thesis Student",
      duration: "2022-2023",
      researchArea: "DNA nanotechnology research"
    },
    {
      name: "Lan Liu",
      program: "Exchange Student",
      duration: "2018-2020",
      researchArea: "Molecular assembly studies"
    },
    {
      name: "Zhilei Ge",
      program: "Exchange Student (2011-2013); Exchange Scholar (2016-2017)",
      currentPosition: "Assistant Professor, Shanghai Institute of Applied Physics, Chinese Academy of Sciences",
      researchArea: "Applied physics research"
    },
    {
      name: "Yuanchen Dong",
      program: "Exchange Student",
      duration: "2013-2014",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Guoliang Ke",
      program: "Exchange Student",
      duration: "2014-2015",
      researchArea: "Molecular assembly"
    },
    {
      name: "Xingyu Luo",
      program: "Exchange Student",
      duration: "2018-2019",
      researchArea: "DNA structures"
    },
    {
      name: "Eric Smith",
      program: "Undergraduate Student",
      duration: "2013-2015",
      researchArea: "Laboratory research"
    },
    {
      name: "Lucas Johnson",
      program: "Undergraduate Student",
      duration: "2017-2017",
      researchArea: "Research assistant"
    },
    {
      name: "Ashley Hunt",
      program: "Undergraduate Student",
      duration: "2013-2015",
      researchArea: "Lab work"
    },
    {
      name: "Shaun Wootten",
      program: "Undergraduate Student",
      duration: "2013-2016",
      researchArea: "Research support"
    },
    {
      name: "Matthew Vrbanac",
      program: "Undergraduate Student",
      duration: "2018-2019",
      researchArea: "Lab research"
    },
    {
      name: "Bryan Wei",
      program: "Exchange Student",
      duration: "Summer 2008-Spring 2009",
      currentPosition: "Professor, Tsinghua University, Beijing, P. R. China",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Kasper Jahn",
      program: "Exchange Student",
      duration: "2008-2009",
      researchArea: "Molecular research"
    },
    {
      name: "Casper Andersen",
      program: "Exchange Student",
      duration: "2007-2008",
      researchArea: "Nanotechnology"
    }
  ];

  // Former members
  const formerMembers = [
    {
      name: "Liangxiao Chen",
      title: "Ph.D. student (2019-2024)",
      currentPosition: "Postdoc Fellow, Harvard University",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Lu Yu",
      title: "Ph.D. student (2019-2024)",
      currentPosition: "Postdoc Fellow, University of Washington",
      researchArea: "Molecular engineering"
    },
    {
      name: "Leeza Abraham",
      title: "Ph.D. student (2018-2023)",
      currentPosition: "Research Scientist, Exodigm",
      researchArea: "Biotechnology applications"
    },
    {
      name: "Yue Tang",
      title: "Ph.D. student (2018-2023)",
      currentPosition: "Assistant Professor, Shandong University",
      researchArea: "Academic research"
    },
    {
      name: "Hao Liu",
      title: "Ph.D. student (2018-2023)",
      currentPosition: "Postdoc Fellow, Arizona State University",
      researchArea: "DNA assembly"
    },
    {
      name: "Bo Ning",
      title: "Assistant Research Professor (2018-2019)",
      currentPosition: "Assistant Professor, Tulane University",
      researchArea: "Molecular design"
    },
    {
      name: "Guangbao Yao",
      title: "Postdoc (2017-2020)",
      currentPosition: "Associate Professor, Shanghai Jiao Tong University",
      researchArea: "Nanotechnology"
    },
    {
      name: "Xu Zhou",
      title: "Ph.D. student (2016-2021)",
      currentPosition: "Postdoc Fellow, University of Wisconsin, Madison",
      researchArea: "DNA origami"
    },
    {
      name: "Raghu Pradeep",
      title: "Ph.D. student (2015-2021)",
      currentPosition: "Postdoc Fellow, University of California San Francisco",
      researchArea: "Biomolecular systems"
    },
    {
      name: "Swarup Dey",
      title: "Ph.D. student (2015-2021)",
      currentPosition: "Postdoc Fellow, Harvard University",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Fan Hong",
      title: "Ph.D. student (2014-2019)",
      currentPosition: "Postdoc Fellow, Harvard University",
      researchArea: "Molecular engineering"
    },
    {
      name: "Saswata Banerjee",
      title: "Ph.D. student (2012-2018)",
      currentPosition: "Postdoc Fellow, Columbia University",
      researchArea: "Structural biology"
    },
    {
      name: "Yuhe Yang",
      title: "Ph.D. student (2011-2016)",
      currentPosition: "Postdoc Fellow, Scripps Research Institute",
      researchArea: "Chemical biology"
    },
    {
      name: "Shuoxing Jiang",
      title: "Ph.D. student (2011-2016)",
      currentPosition: "Associate Professor, Nanjing University",
      researchArea: "Materials science"
    },
    {
      name: "Fei Zhang",
      title: "Ph.D. student (2010-2015)",
      currentPosition: "Assistant Professor, Rutgers University",
      researchArea: "DNA nanotechnology"
    },
    {
      name: "Jinglin Fu",
      title: "Postdoc (2010-2013)",
      currentPosition: "Assistant Professor, Rutgers University",
      researchArea: "Molecular assembly"
    },
    {
      name: "Yang Yang",
      title: "Postdoc (2010-2012)",
      currentPosition: "Postdoc, Yale",
      researchArea: "Chemical research"
    },
    {
      name: "Palash Dutta",
      title: "Ph.D. student (2009-2014)",
      currentPosition: "Postdoc Fellow, Georgia Tech and Emory University",
      researchArea: "Nanotechnology"
    },
    {
      name: "Zhengtao Deng",
      title: "Assistant Research Professor (2009-2012)",
      currentPosition: "Professor, Nanjing University",
      researchArea: "Materials chemistry"
    },
    {
      name: "Wei Li",
      title: "Ph.D. student (2009-2014)",
      currentPosition: "Postdoc Fellow, California Institute of Technology",
      researchArea: "Molecular systems"
    },
    {
      name: "Anirban Samanta",
      title: "Ph.D. student (2009-2014)",
      currentPosition: "Postdoc Fellow, Naval Research Laboratory",
      researchArea: "Materials research"
    },
    {
      name: "Dongran Han",
      title: "Ph.D. student (2009-2013)",
      currentPosition: "Professor, Beijing University of Chinese Medicine",
      researchArea: "Biomedical applications"
    },
    {
      name: "Zhao Zhao",
      title: "Ph.D. student (2008-2013)",
      currentPosition: "Postdoc Fellow, Harvard Medical School",
      researchArea: "Medical research"
    },
    {
      name: "Xiaowei Liu",
      title: "Ph.D. student (2008-2013)",
      currentPosition: "Postdoc Fellow, Arizona State University",
      researchArea: "DNA engineering"
    },
    {
      name: "Suchetan Pal",
      title: "Ph.D. student (2008-2012)",
      currentPosition: "Postdoc Fellow, Sloan Kettering Cancer Research Institute",
      researchArea: "Cancer research"
    },
    {
      name: "Zhe Li",
      title: "Ph.D. student (2007-2012)",
      currentPosition: "Postdoc Fellow, Yale University",
      researchArea: "Molecular biology"
    },
    {
      name: "Xixi Wei",
      title: "Ph.D. student (2008-2014)",
      currentPosition: "Research Scientist, Caris Life Sciences",
      researchArea: "Life sciences"
    },
    {
      name: "Qiangbin Wang",
      title: "Postdoc (2006-2008)",
      currentPosition: "Professor, Suzhou Institute of Nano-Tech and Nano-Bionics, Chinese Academy of Sciences",
      researchArea: "Nanobionics"
    },
    {
      name: "Junping Zhang",
      title: "Postdoc (2005-2006)",
      currentPosition: "Research Scientist, Carestream Company, Minnesota, USA",
      researchArea: "Materials science"
    }
  ];

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const PersonCard = ({ person, type }) => (
    <motion.div 
      className={`person-card ${type}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="person-avatar">
        <FaUser />
      </div>
      <div className="person-info">
        <h3 className="person-name">{person.name}</h3>
        <p className="person-title">{person.title || person.level}</p>
        
        {type === 'faculty' && (
          <>
            <p className="person-position">{person.position}</p>
            <p className="person-department">{person.department}</p>
            <p className="person-institute">{person.institute}</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{person.office}, {person.location}</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href={`tel:${person.phone}`}>{person.phone}</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            </div>

            <div className="research-interests">
              <h4>Research Interests</h4>
              <ul>
                {person.researchInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>

            <div className="awards">
              <h4>Selected Awards</h4>
              <ul>
                {person.awards.map((award, index) => (
                  <li key={index}><FaAward /> {award}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {type === 'research' && (
          <>
            <p className="research-focus">{person.researchFocus}</p>
            <p className="education">{person.education}</p>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{person.office}</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </div>
            </div>
          </>
        )}

        {type === 'graduate' && (
          <>
            <p className="student-year">{person.year}</p>
            <p className="advisor">Advisor: {person.advisor}</p>
            <p className="research-area">{person.researchArea}</p>
            <div className="contact-item">
              <FaEnvelope />
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          </>
        )}

        {type === 'undergraduate' && (
          <>
            <p className="student-details">{person.year} • {person.major}</p>
            <p className="program">{person.program}</p>
            {person.university && <p className="university">{person.university}</p>}
            <div className="contact-item">
              <FaEnvelope />
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </div>
          </>
        )}

        {type === 'former' && (
          <>
            <p className="current-position">{person.currentPosition}</p>
            <p className="research-area">{person.researchArea}</p>
          </>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="page-wrapper">
      <motion.div 
        className="people-page"
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
            PEOPLE
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
            Meet the researchers advancing the frontiers of DNA nanotechnology and molecular design
          </motion.p>
        </motion.section>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
        {/* Faculty Section */}
        <motion.section className="team-section" variants={itemVariants}>
          <h2 className="section-title">
            <FaUniversity className="section-icon" />
            Faculty
          </h2>
          <div className="team-grid faculty-grid">
            <PersonCard person={faculty} type="faculty" />
          </div>
        </motion.section>

        {/* Research Professionals Section */}
        <motion.section className="team-section" variants={itemVariants}>
          <h2 className="section-title">
            <FaFlask className="section-icon" />
            Research Professionals
          </h2>
          <div className="team-grid">
            {researchProfessionals.map((person, index) => (
              <PersonCard key={index} person={person} type="research" />
            ))}
          </div>
        </motion.section>

        {/* Graduate Students Section */}
        <motion.section className="team-section" variants={itemVariants}>
          <h2 className="section-title">
            <FaGraduationCap className="section-icon" />
            Graduate Students
          </h2>
          <div className="team-grid">
            {graduateStudents.map((person, index) => (
              <PersonCard key={index} person={person} type="graduate" />
            ))}
          </div>
        </motion.section>

        {/* Undergraduate Students Section */}
        <motion.section className="team-section" variants={itemVariants}>
          <h2 className="section-title">
            <FaUser className="section-icon" />
            Undergraduate & Exchange Students
          </h2>
          <div className="team-grid">
            {undergraduateStudents.map((person, index) => (
              <PersonCard key={index} person={person} type="undergraduate" />
            ))}
          </div>
        </motion.section>

        {/* Former Members Section */}
        <motion.section className="team-section" variants={itemVariants}>
          <div className="expandable-section">
            <h2 
              className="section-title expandable-title"
              onClick={() => toggleSection('former')}
            >
              <FaAward className="section-icon" />
              Former Members
              {expandedSection === 'former' ? <FaChevronUp /> : <FaChevronDown />}
            </h2>
            
            {expandedSection === 'former' && (
              <motion.div 
                className="team-grid"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formerMembers.map((person, index) => (
                  <PersonCard key={index} person={person} type="former" />
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Lab Information Section */}
        <motion.section className="lab-info-section" variants={itemVariants}>
          <div className="lab-info-content">
            <h2>Join Our Team</h2>
            <p>
              We are always looking for motivated researchers to join our interdisciplinary team. 
              If you're interested in DNA nanotechnology, molecular design, or bio-inspired materials, 
              we'd love to hear from you.
            </p>
            
            <div className="opportunities">
              <div className="opportunity-card">
                <h3>Postdoctoral Positions</h3>
                <p>We have openings for postdoctoral researchers with backgrounds in chemistry, bioengineering, or materials science.</p>
              </div>
              <div className="opportunity-card">
                <h3>Graduate Students</h3>
                <p>We welcome Ph.D. and M.S. students interested in molecular nanotechnology and programmable materials.</p>
              </div>
              <div className="opportunity-card">
                <h3>Undergraduate Research</h3>
                <p>Undergraduate students can gain research experience through directed study courses and summer programs.</p>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Get in Touch</h3>
              <p>Contact Dr. Hao Yan to discuss research opportunities and learn more about our work.</p>
              <a href="mailto:hao.yan@asu.edu" className="contact-button">
                <FaEnvelope />
                Contact Us
              </a>
            </div>
          </div>
        </motion.section>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default People;