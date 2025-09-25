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
    image: "hyan.jpg",
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
          <h2 style={{ fontSize: '2.2rem', fontWeight: 600, background: '#cce2fc', display: 'inline-block', padding: '0.25em 0.75em', borderRadius: '0.2em', color: '#64748b', marginBottom: '1.5rem' }}>GROUP ALUMNI</h2>
          <div style={{ margin: '2rem 0 0 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ background: '#cce2fc', display: 'inline-block', padding: '0.25em 0.75em', borderRadius: '0.2em', fontWeight: 600, fontSize: '1.5rem', color: '#2d4a5a', marginBottom: '0.5rem' }}>Graduate Students</div>
            <div style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#2d4a5a', marginBottom: '1rem', background: '#cce2fc', display: 'inline-block', padding: '0.1em 0.5em', borderRadius: '0.2em' }}>
              McGill 1992–present<br />Toronto 1988–1992
            </div>
            <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              1. Alicia Montulet, M.Sc. 2024<br />
              2. James Thorpe, Ph.D. 2023<br />
              3. Roberto El Khoury, Ph.D. 2022<br />
              4. Ada McVean, M.Sc. 2022<br />
              5. Leonora Abdullahu, Ph.D. 2021<br />
              6. Daniel O'Reilly, Ph.D. 2019<br />
              7. Hala Abou Assi, Ph.D. 2018<br />
              8. Danielle Vlaho, Ph.D. 2017<br />
              9. Maryam Habibian, Ph.D. 2017<br />
              10. Elise Malek-Adamian, M.Sc. 2017<br />
              11. Jovanka Bogojeski, Ph.D. 2017<br />
              12. Maryam Yahyaee Anzahaee, Ph.D. 2015<br />
              13. Adam Katolik, Ph.D. 2015<br />
              14. Glen F. Deleavey, Ph.D 2013<br />
              15. Matthew Hassler, Ph.D. 2013<br />
              16. Fereshteh Azizi, M.Sc. 2013<br />
              17. Pascal Gallant, M.Sc. 2011<br />
              18. Robert A. Donga, Ph.D. 2010<br />
              19. Alexander S. Wahba, Ph.D. 2010<br />
              20. Jeremy G. Lackey, Ph.D. 2010<br />
              21. Siara Isaac, M.Sc. 2008<br />
              22. Jonathan K. Watts, Ph.D. 2008<br />
              23. David Sabatino, Ph.D. 2007<br />
              24. Debbie Mitra, Ph.D. 2008 (co-supervised with H. Sleiman)<br />
              25. Chang Geng Peng, Ph.D. 2007<br />
              26. Bénédicte Pâtureau, M.Sc. 2006<br />
              27. Maria M. Mangos, Ph.D. 2005<br />
              28. Anna Lisa Tedeschi, M.Sc. 2004<br />
              29. Sandra Carriero, Ph.D. 2003<br />
              30. Kazim A. Agha, Ph.D. 2003<br />
              31. Rami N. Hannoush, Ph.D. 2003<br />
              32. Rawan Mourani, M.Sc. 2002<br />
              33. Daniel R. Yazbeck, M.Sc. 2001<br />
              34. Anita Liscio, M.Sc. 2001<br />
              35. Christopher J. Wilds, Ph.D. 2000<br />
              36. Ravinderjit S. Braich, Ph.D. 1999<br />
              37. Anne M. Noronha, Ph.D. 1999<br />
              38. Sébastien Robidoux, Ph.D. 1999<br />
              39. Margherita Scartozzi, M.Sc. 1998<br />
              40. André H. Uddin, Ph.D. 1996<br />
              41. Miguel A. Roman, M.Sc. 1995<br />
              42. Kanjana Ganeshan, Ph.D. 1995<br />
              43. Robert H. E. Hudson, Ph.D. 1995<br />
              44. Yunkui Guo, M.Sc. 1992<br />
              45. Paul A. Giannaris, M.Sc. 1991<br />
              46. Steven V. Zabarylo, M.Sc. 1990
            </div>
            <div style={{ background: '#cce2fc', display: 'inline-block', padding: '0.25em 0.75em', borderRadius: '0.2em', fontWeight: 600, fontSize: '1.5rem', color: '#2d4a5a', marginBottom: '0.5rem' }}>Postdoctoral Fellows & Research Assistants</div>
            <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              James Thorpe, PDF 2024-2025<br />
              Adam Katolik, Research Scientist 2018-2022<br />
              Miguel Garavís Cabello, PDF 2019-2020<br />
              Sunit Jana, PDF 2018-2020; Research Associate 2022-2024<br />
              Elise Malek-Adamian, Research Assistant 2017-2018<br />
              Saùl Martinez-Montero, PDF 2012-2016<br />
              Jory Liétard, PDF 2013-2015<br />
              Ken Yamada, PDF 2012-2014<br />
              Richard Johnsson, PDF 2008-2011<br />
              Nandyala Mallikarjuna Reddy, PDF 2008-2011<br />
              Nuria Bayo-Puxan, PDF 2007-2009 (co-supervised)<br />
              Kyung-Lyum Min, PDF 2001-2002; Research Associate 2002-2004<br />
              Annie Galarneau, Research Assistant 2002-2003<br />
              Ekaterina Viazovkina, PDF 1997-2001; Research Associate 2001-2004<br />
              Mohamed Elzagheid, PDF 2002-2004; Research Associate 2004-2005<br />
              Marita Wasner, PDF 1996-1997
            </div>
            <div style={{ background: '#cce2fc', display: 'inline-block', padding: '0.25em 0.75em', borderRadius: '0.2em', fontWeight: 600, fontSize: '1.5rem', color: '#2d4a5a', marginBottom: '0.5rem' }}>Visiting Students</div>
            <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              Jack Barr, Ph.D. (Ghent University), 2025<br />
              Luca Pisano, Ph.D. (Sapienza Università di Roma), 2023-2024<br />
              Arnau Dominguez, Ph.D. (Universitat de Barcelona), 2023<br />
              Wiebke Teich, M.Sc. (University of Münster), 2022-2023<br />
              Cristina Cabrero Fernández, Ph.D. (Instituto de Química Física Rocasolano), 2022<br />
              Israel Serrano, Ph.D. (IInstituto de Química Física Rocasolano), 2019<br />
              Luisa Fernanda López De la Fuente, B.Sc. (Tecnológico de Monterrey), 2018<br />
              Annabelle Schofield, B.Sc. (U of Nottingham), 2017<br />
              Nobuhiro Tago, Ph.D. (Tokyo Institute of Technology), 2013<br />
              Saùl Martinez-Montero, Ph.D. (Universidad de Oviedo), 2012<br />
              Nerea Martin-Pintado Zugasti, Ph.D. (CSIC-Madrid), 2010<br />
              Paula Lopez Senin, Ph.D. (Universidad de Barcelona), 2009<br />
              Júlia Viladoms, Ph.D. (Universidad de Barcelona), 2008<br />
              Signe Inglev Steffansen, Ph.D. (University of Southern Denmark), 2005<br />
              Maxie Roessler, B.Sc. (Oxford University), 2004
            </div>
            <div style={{ background: '#cce2fc', display: 'inline-block', padding: '0.25em 0.75em', borderRadius: '0.2em', fontWeight: 600, fontSize: '1.5rem', color: '#2d4a5a', marginBottom: '0.5rem' }}>Undergraduate Students</div>
            <div style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#2d4a5a', marginBottom: '1rem', background: '#cce2fc', display: 'inline-block', padding: '0.1em 0.5em', borderRadius: '0.2em' }}>
              McGill 1992–present<br />Toronto 1988–1992
            </div>
            <div style={{ marginBottom: '2rem', display: 'inline-block', textAlign: 'left' }}>
              Lilass Ozturk, 2025<br />
              Richard Ilianu, 2025<br />
              Kathleen Maloney, 2025<br />
              Ali Baghirov, 2024<br />
              Nicolas Beauparlant, 2024-2025<br />
              Paige Roehrig, 2024<br />
              Kaixiang Wang, 2023<br />
              Diana McCorquodale, 2023<br />
              Vivian Zhang, 2022<br />
              David Friedland, 2022<br />
              Morgane Roman, 2021<br />
              Henri Zhu, 2019<br />
              Patrick Nathael Javorcik, 2019<br />
              Ada McVean, 2018<br />
              Jeff Guo, 2018<br />
              Anne Liao, 2016<br />
              James Thorpe, 2016<br />
              Yu Chen (Jimmy) Lin, 2016<br />
              Logan Di Giovanni, 2015<br />
              Arden Dierker Viik, 2014<br />
              Michael Thomson, 2013<br />
              Christine Button, 2012<br />
              Simon Wisnovsky, 2011<br />
              Erika Steels, 2011<br />
              Petra Lindovska, 2011<br />
              Volodymyr Hrabovskyy, 2010<br />
              Yi Qiao (Prudence) Wu, 2010<br />
              Kim Beauregard, 2008<br />
              Pascal Gallant, 2006<br />
              Jennifer Pfeiffer, 2006<br />
              Gail Fernandes, 2004<br />
              Michael Hunter, 2002<br />
              Ariel Breiner, 1999<br />
              Sherri Gavin, 1999<br />
              Isabelle Paquin, 1996<br />
              Chris Harrison, 1996<br />
              Sandra Carriero, 1996<br />
              Sarah Weeks, 1994<br />
              Janelle Anderson, 1994<br />
              Juanita Chan, 1993<br />
              Christopher Tomalty, 1993<br />
              Verna Salado, 1990<br />
              Laura Rubino, 1989<br />
              Louella Lobo, 1989<br />
              Dave Dindayal, 1989<br />
              Barb Helbrecht, 1988<br />
              Paul A. Giannaris, 1988<br />
              Adrian Bojko, 1988<br />
              Steven V. Zabarylo, 1987
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurTeam;
