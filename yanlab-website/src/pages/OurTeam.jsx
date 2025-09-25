import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const OurTeam = () => {
  // Remove dropdown/expand logic; always show all sections

  // PI Yan profile for grid
  const piYan = {
  name: "Hao Yan",
  title: "Principal Investigator",
    subtitle: "Milton D. Glick Distinguished Professor",
    department: "School of Molecular Sciences and School of Medicine",
    office: "BDA 124B",
    phone: "(480) 727-8570",
    email: "hao.yan@asu.edu",
  image: "hyan_3.jpg",
    awards: [
      "Foresight Institute Feynman Prize in Nanotechnology",
      "Rozenberg Tulip Award in DNA Computing",
      "Humboldt Research Award"
    ]
  };

  const staff = [
    piYan,
    {
      name: "Chad R Simmons",
      title: "Assistant Research Professor",
      email: "chad.simmons@asu.edu",
  focus: "Biomacromolecular Crystallographer",
      image: "chad.jpg"
    },
    {
      name: "Yang Xu",
      title: "Assistant Research Professor", 
      email: "yangxu3@asu.edu",
  focus: "Biomolecular Therapeutics and Diagnostics",
      image: "yangxu.jpg"
    },
    {
      name: "Kun Dai",
      title: "Assistant Research Professor",
      email: "",
  focus: "RNA origami Therapeutics",
      image: "kun.jpg"
    }
  ];

  const students = [
  { name: "Deeksha Satyabola", level: "5th Year PhD Candidate", email: "ddeeksha@asu.edu", research: "DNA Photonic Systems", image: "deeksha.jpg" },
  { name: "Abhay Prasad", level: "5th Year PhD Candidate", email: "aprasa36@asu.edu", research: "Chemical Biology and PROTACs", image: "abhay.jpg" },
  { name: "Rong Zheng", level: "4th Year PhD Candidate", email: "rzheng22@asu.edu", research: "Molecular Biology and PROTACs", image: "rong.jpg" },
  { name: "Lanshen Zhao", level: "4th Year PhD Candidate", email: "lzhao89@asu.edu", research: "Diaganostics and Cancer Therapy", image: "lanshen.jpg" },
  { name: "Xinyi Tu", level: "4th Year PhD Candidate", email: "xinyitu@asu.edu", research: "RNA/DNA nanotechnology for Cancer Therapy", image: "xinyi.jpg" },
  { name: "Thong Diep", level: "4th Year PhD Candidate", email: "tdiep2@asu.edu", research: "Finite size DNA lattice", image: "thong.jpg" },
  { name: "Aleksandra Petrova", level: "3rd Year PhD Candidate", email: "aleksandra@asu.edu", research: "RNA Nanomedicine", image: "Aleksandra.jpg" },
  { name: "Gengshi Wu", level: "3rd Year PhD Candidate", email: "gengshi@asu.edu", research: "RNA Nanotechnology Design and Assembly", image: "gengshi.jpg" },
  { name: "Yichen Yan", level: "2nd Year PhD Candidate", email: "yichen@asu.edu", research: "RNA Nanomedicine", image: "yichen.jpg" }
  ];

  const former = [
    { name: "Liangxiao Chen", title: "PhD 2019-2024", current: "Postdoc, Harvard University" },
    { name: "Lu Yu", title: "PhD 2019-2024", current: "Postdoc, University of Washington" },
    { name: "Leeza Abraham", title: "PhD 2018-2023", current: "Research Scientist, Exodigm" },
    { name: "Yue Tang", title: "PhD 2018-2023", current: "Assistant Professor, Shandong University" },
    { name: "Hao Liu", title: "PhD 2018-2023", current: "Postdoc, Arizona State University" }
  ];

  // Combine staff and students for unified grid
  const team = [...staff, ...students];

  return (
    <main className="resources-main-container" style={{ background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
  <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff', fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
        <section className="page-content" style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '1.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif', textAlign: 'center' }}>Current Team</h1>
          </motion.div>

          {/* Unified Team Grid Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid-container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              justifyItems: 'center',
              alignItems: 'flex-start',
              gap: '3.5rem',
              maxWidth: '900px',
              margin: '0 auto',
              justifyContent: 'center'
            }}>
              {team.map((member, index) => (
                <div key={index} className="grid-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3.5rem' }}>
                  <div style={{
                    width: '259px',
                    height: '259px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 0.5rem auto',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    display: 'block'
                  }}>
                    <img 
                      src={`/${member.image}`} 
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        margin: '0 auto'
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.125rem', textAlign: 'center', color: '#232946', fontFamily: 'Inter, Arial, sans-serif' }}>
                    {member.name}
                  </h3>
                  {/* Special formatting for PI Yan */}
                  {member.name === 'Hao Yan' ? (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.title}</p>
                      <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>Biomolecular Programmer and Engineer</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center', marginBottom: '0.125rem' }}>
                        Email
                      </a>
                    </>
                  ) : member.focus ? (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center' }}>{member.title}</p>
                      <p style={{ color: member.name === 'Kun Dai' ? '#64748b' : '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.focus}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  ) : (
                    <>
                      <p style={{ color: '#232946', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.125rem', textAlign: 'center', fontStyle: 'italic' }}>{member.level}</p>
                      <p style={{ color: '#64748b', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, marginBottom: '0.25rem', textAlign: 'center' }}>{member.research}</p>
                      <a href={`mailto:${member.email}`} style={{ color: '#232946', textDecoration: 'none', fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.2rem', fontWeight: 400, lineHeight: 1.3, display: 'block', textAlign: 'center' }}>
                        Email
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Graduate Student Mentees Section */}
          {/* ...omitted for brevity, copy mentees table from People.jsx... */}
        </section>

        {/* Group Alumni Section */}
  <section className="alumni-section" style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#232946',
            marginBottom: '1.5rem',
            letterSpacing: '-1px',
            fontFamily: 'Inter, Arial, sans-serif',
            textAlign: 'center',
            width: '100%'
          }}>GROUP ALUMNI</h2>
          <div style={{ margin: '2rem 0 0 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ fontWeight: 600, fontSize: '1.5rem', color: '#232946', marginBottom: '0.5rem', textAlign: 'center' }}>Graduate Students and Postdoctoral Fellows</div>
            <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              <b>41. Junping Zhang (Postdoc, 2005-2006)</b><br />Research Scientist, Nanomaterial Scientist<br />Carestream Company, Minnesota, USA<br /><br />
              <b>40. Qiangbin Wang (Postdoc, 2006-2008)</b><br />Professor<br />Suzhou Institute of Nano-Tech and Nano-Bionics, Chinese Academy of Sciences, Suzhou, P. R. China<br /><br />
              <b>39. National Center for Nanosciences and Technology, Chinese Academy of Science, Beijing, P. R. China</b><br /><br />
              <b>38. Xixi Wei (Ph.D. student, 2008-2014)</b><br />Research Scientist<br />Caris Life Sciences<br /><br />
              <b>37. Zhe Li (Ph.D. student, 2007-2012)</b><br />Postdoc Fellow<br />Yale Universtiy<br /><br />
              <b>36. Suchetan Pal (Ph.D. student, 2008-2012)</b><br />Postdoc Fellow<br />Sloan Kettering Cancer research Institute<br /><br />
              <b>35. Xiaowei Liu (Ph.D. student, 2008-2013)</b><br />Postdoc Fellow<br />Arizona State University<br /><br />
              <b>34. Zhao Zhao (Ph.D. student, 2008-2013)</b><br />Postdoc Fellow<br />Harvard Medical School<br /><br />
              <b>33. Dongran Han (Ph.D. student, 2009-2013)</b><br />Professor<br />Beijing University of Chinese Medicine<br /><br />
              <b>32. Anirban Samanta (Ph.D. student, 2009-2014)</b><br />Postdoc Fellow<br />Naval Research Laboratory<br /><br />
              <b>31. Wei Li (Ph.D. student, 2009-2014)</b><br />Postdoc Fellow<br />California Institute of Technology<br /><br />
              <b>30. Baoquan Ding (Assistant research professor, 2009-2010)</b><br />Professor<br /><br />
              <b>29. Andre Pinheiro (Postdoc, 2009-2012)</b><br /><br />
              <b>28. Zhengtao Deng (Assistant research professor, 2009-2012)</b><br />Professor<br />Nanjing University<br /><br />
              <b>27. Palash Dutta (Ph.D. student, 2009-2014)</b><br />Postdoc Fellow<br />Georgia Tech and Emory University<br /><br />
              <b>26. Reji Vargahes (Postdoc, 2010-2011)</b><br />Assitant Professor<br />Indian Institute of Science Education and Research<br /><br />
              <b>25. Jinglin Fu (Postdoc, 2010-2013)</b><br />Assistant Professor<br />Rutgers University<br /><br />
              <b>24. Yang Yang (Postdoc, 2010-2012)</b><br />Postdoc<br />Yale<br /><br />
              <b>23. Fei Zhang (Ph.D. student, 2010-2015)</b><br />Assistant Professor<br />Rutgers University<br /><br />
              <b>22. Yang Xu (Postdoc, 2011-2012)</b><br />Associate Professor<br />Cancer Institute and Hospital, Chinese Academy of Medical Science, Beijing, P.R. China.<br /><br />
              <b>21. Jeanette Nangreave (Research Scientist, 2011-2014)</b><br />Teaching Staff<br />ASU Lake Havasu<br /><br />
              <b>20. Shuoxing Jiang (Ph.D. student, 2011-2016)</b><br />Associate Professor<br />Nanjing University<br /><br />
              <b>19. Yuhe Yang (Ph.D. student, 2011-2016)</b><br />Postdoc Fellow<br />Scripps Research Institute<br /><br />
              <b>18. Ryan Nangreave (Postdoc, 2012-2013)</b><br />Teaching Staff<br />ASU Lake Havasu<br /><br />
              <b>17. Saswata Banerjee (Ph.D. student, 2012-2018)</b><br />Postdoc Fellow<br />Columbia University<br /><br />
              <b>16. Sarah Henry (Postdoc, 2013-2015)</b><br /><br />
              <b>15. Alessio Andreoni (Postdoc, 2013-2016)</b><br /><br />
              <b>14. Yen-ting Lai (Postdoc, 2014-2015)</b><br />Postdoc<br />National Institute of Health<br /><br />
              <b>13. Fan Hong (Ph.D. student, 2014-2019)</b><br />Postdoc Fellow<br />Harvard University<br /><br />
              <b>12. Swarup Dey (Ph.D. student, 2015-2021)</b><br />Postdoc Fellow<br />Harvard University<br /><br />
              <b>11. Raghu Pradeep (Ph.D. student, 2015-2021)</b><br />Postdoc Fellow<br />University of California San Francisco<br /><br />
              <b>10. Xiang Lan (Postdoc, 2016-2018)</b><br /><br />
              <b>9. Nour Eddine Fahmi (Research Scientist, 2016-2020)</b><br /><br />
              <b>8. Xu Zhou (Ph.D. student, 2016-2021)</b><br />Postdoc Fellow<br />University of Wisconsin, Madison<br /><br />
              <b>7. Guangbao Yao (Postdoc, 2017-2020)</b><br />Associate Professor<br />Shanghai Jiao Tong University<br /><br />
              <b>6. Bo Ning (Assistant research professor, 2018-2019)</b><br />Assistant Professor<br />Tulane University<br /><br />
              <b>5. Zhi Zhao (Postdoc, 2018-2019)</b><br /><br />
              <b>4. Hao Liu (Ph.D. student, 2018-2023)</b><br />Pstdoc Felow<br />Arizona State University<br /><br />
              <b>3. Yue Tang (Ph.D. student, 2018-2023)</b><br />Assistant Professor<br />Shandong University<br /><br />
              <b>2. Leeza Abraham (Ph.D. student, 2018-2023)</b><br />Research Scientist<br />Exodigm<br /><br />
              <b>1. Lu Yu (Ph.D. student, 2019-2024)</b><br />Postdoc Felow<br />University of Washington<br /><br />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurTeam;
