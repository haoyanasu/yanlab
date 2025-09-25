
import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';


const scientificTools = [
  { name: 'Mfold', link: 'http://frontend.bioinfo.rpi.edu/applications/mfold/', desc: 'by Michael Zuker at Rensselaer Polytechnic Institute.' },
  { name: 'Nanoengineer-1', link: 'http://nanoengineer-1.com/content/', desc: 'by Nanorex.' },
  { name: 'NUPACK', link: 'http://nupack.org/', desc: 'by Niles Pierce and Colleagues at Caltech.' },
  { name: 'Fluorescence SpectraViewer', link: 'http://www.invitrogen.com/site/us/en/home/support/Research-Tools/Fluorescence-SpectraViewer.html', desc: 'by Invitrogen.' },
  { name: 'Oligo Analyzer', link: 'http://www.idtdna.com/Scitools/Scitools.aspx', desc: 'by Integrated DNA Technologies.' },
  { name: 'caDNAno', link: 'http://cadnano.org/', desc: 'by Shawn Douglas and William Shih at Harvard.' },
  { name: 'CanDo', link: 'http://cando-dna-origami.org/', desc: 'by Mark Bathe at MIT.' },
  { name: 'SARSE-DNA origami', link: 'http://www.cdna.dk/index.php/software.html', desc: 'by Kurt Gothelf and Colleagues at Aarhus.' },
];

const dnaLabs = [
  { name: 'Paul Alivisatos Lab', link: 'http://www.cchem.berkeley.edu/pagrp/', inst: 'UC Berkeley' },
  { name: 'Mark Bathe Lab', link: 'http://lcbb.mit.edu/index.html', inst: 'MIT' },
  { name: 'Hendrik Dietz Lab', link: 'http://bionano.physik.tu-muenchen.de/', inst: 'TU Munchen' },
  { name: 'Chunhai Fan Lab', link: 'http://www.sinap.ac.cn/physbio/index-en.htm', inst: 'Shanghai Institute of Applied Physics' },
  { name: 'Deborah Fygenson Lab', link: 'http://www.physics.ucsb.edu/~deborah/', inst: 'UCSB' },
  { name: 'Kurt Gothelf Lab', link: 'http://www.cdna.dk/index.php/home.html', inst: 'Aarhus' },
  { name: 'Luc Jaeger Lab', link: 'http://www.chem.ucsb.edu/people/faculty/jaeger/', inst: 'UCSB' },
  { name: 'Makoto Komiyama', link: 'http://www.mkomi.rcast.u-tokyo.ac.jp/index_e_link_e.html', inst: 'U of Tokyo' },
  { name: 'Yamuna Krishnan Lab', link: 'http://www.ncbs.res.in/index.php?option=com_content&task=view&id=60&Itemid=69', inst: 'NCBS' },
  { name: 'Thom LaBean Lab', link: 'http://www.cs.duke.edu/~thl/', inst: 'Duke' },
  { name: 'Tim Liedl Lab', link: 'http://www.softmatter.physik.uni-muenchen.de/tiki-index.php?page=GroupLiedlHome', inst: 'LMU Munchen' },
  { name: 'Dongsheng Liu Lab', link: 'http://liuds.chem.tsinghua.edu.cn/LabTour.html', inst: 'Tsinghua' },
  { name: 'Dan Luo Lab', link: 'http://luolabs.bee.cornell.edu/index.html', inst: 'Cornell' },
  { name: 'Chengde Mao Lab', link: 'http://www.chem.purdue.edu/people/faculty/faculty.asp?itemID=46', inst: 'Purdue' },
  { name: 'Michael Mertig Lab', link: 'http://www.digs-bb.de/digs-bb/research-groups/Mertig', inst: 'Dresden' },
  { name: 'Yongli Mi Lab', link: 'http://ihome.ust.hk/~keymix/', inst: 'HKUST' },
  { name: 'Christof Niemeyer', link: 'http://www.chemie.uni-dortmund.de/groups/niemeyer/index.html', inst: 'Dortmund' },
  { name: 'Niles Pierce Lab', link: 'http://www.piercelab.caltech.edu/', inst: 'Caltech' },
  { name: 'John Reif Lab', link: 'http://www.cs.duke.edu/~reif/', inst: 'Duke' },
  { name: 'Paul Rothemund Lab', link: 'http://www.dna.caltech.edu/~pwkr/', inst: 'Caltech' },
  { name: 'Ned Seeman Lab', link: 'http://seemanlab4.chem.nyu.edu/', inst: 'NYU' },
  { name: 'William Shih Lab', link: 'http://research2.dfci.harvard.edu/shih/SHIH_LAB/Home.html', inst: 'Harvard' },
  { name: 'Fritz Simmel Lab', link: 'http://www.e14.ph.tum.de/', inst: 'LMU' },
  { name: 'Hanadi Sleiman Lab', link: 'http://www.hanadisleiman.com/', inst: 'McGill' },
  { name: 'Milan Stojanovic Lab', link: 'https://digamma.cs.unm.edu/wiki/bin/view/McogPublicWeb/WebHome', inst: 'Columbia' },
  { name: 'Hiroshi Sugiyama Lab', link: 'http://kuchem.kyoto-u.ac.jp/chembio/', inst: 'Kyoto U' },
  { name: 'Andrew Turberfield Lab', link: 'http://www.physics.ox.ac.uk/cm/people/turberfield.htm', inst: 'Oxford' },
  { name: 'Itamar Willner Lab', link: 'http://chem.ch.huji.ac.il/willner/', inst: 'Hebrew' },
  { name: 'Erik Winfree Lab', link: 'http://www.dna.caltech.edu/', inst: 'Caltech' },
  { name: 'Peng Yin Lab', link: 'http://yinlab.org/', inst: 'Harvard' },
  { name: 'Bernie Yurke Lab', link: 'http://coen.boisestate.edu/departments/faculty.asp?ID=134', inst: 'BSU' },
];

const downloads = [
  { name: 'Tiamat (Windows)', link: 'https://www.yanlab-asu.com/Tiamat.exe', desc: 'Graphical user interface program for the design of DNA nanostructures and sequences.' },
  { name: 'Tiamat User Manual', link: 'http://link.springer.com/chapter/10.1007%2F978-3-642-03076-5_8', desc: 'User manual for Tiamat.' },
  { name: 'Tiamat 2.exe', link: 'https://www.yanlab-asu.com/Tiamat%202.exe', desc: 'New version of Tiamat with RNA design, user-defined constraints, and oxDNA-friendly export.' },
  { name: 'Double crossover (DAE) tile (.dna)', link: 'https://www.yanlab-asu.com/DX.dna', desc: 'DNA model file.' },
  { name: '4x4 tile (.dna)', link: 'https://www.yanlab-asu.com/4x4.dna', desc: 'DNA model file.' },
  { name: 'Four-helix tile (.dna)', link: 'https://www.yanlab-asu.com/4%20HT.dna', desc: 'DNA model file.' },
  { name: 'Tetrahedron (.dna)', link: 'https://www.yanlab-asu.com/tetrahedron.dna', desc: 'DNA model file.' },
  { name: 'Rectangular origami (.dna)', link: 'https://www.yanlab-asu.com/origami.dna', desc: 'DNA model file.' },
  { name: '4x4 tile animation (.asf)', link: 'https://www.yanlab-asu.com/4x4.asf', desc: 'Cartoon animation using Tiamat.' },
  { name: 'Three-helix bundle animation (.asf)', link: 'https://www.yanlab-asu.com/3%20helix%20bundle.asf', desc: 'Cartoon animation using Tiamat.' },
  { name: 'Tetrahedron animation (.asf)', link: 'https://www.yanlab-asu.com/tetrahedron.asf', desc: 'Cartoon animation using Tiamat.' },
];

const Resources = () => {
  return (
    <main className="resources-main-container" style={{ background: '#fff' }}>
      <div className="resources-content-wrapper fade-in" style={{ borderRadius: 0, background: '#fff' }}>
        <section className="page-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="page-title">Resources</h1>
            <p className="page-subtitle">Downloads, scientific tools, and links to labs in DNA nanotechnology</p>
            <div style={{ margin: '1.5rem 0 2.5rem 0', color: '#334155', fontSize: '1.05rem', maxWidth: 800 }}>
              In collaboration with Sean Williams (Programmer, now at UC Davis), Peter Wonka (ASU) and Stuart Lindsay (ASU), we developed a graphical user interface program for the design of DNA nanostructures and sequences. Please click to download this program and a user manual associated with it.
            </div>
          </motion.div>

          {/* Downloads */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="section-title" style={{ marginTop: '2.5rem' }}>Downloads</h2>
            <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0 }}>
              {downloads.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#3b82f6' }}>{item.name}</a>
                  {item.desc && <span style={{ marginLeft: 8, color: '#64748b' }}>— {item.desc}</span>}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Scientific Tools */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="section-title" style={{ marginTop: '2.5rem' }}>Scientific Tools</h2>
            <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0 }}>
              {scientificTools.map((tool, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#3b82f6' }}>{tool.name}</a>
                  {tool.desc && <span style={{ marginLeft: 8, color: '#64748b' }}>— {tool.desc}</span>}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Labs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <h2 className="section-title" style={{ marginTop: '2.5rem' }}>Labs Working on Structural DNA Nanotechnology</h2>
            <ul style={{ lineHeight: 2, listStyleType: 'none', paddingLeft: 0 }}>
              {dnaLabs.map((lab, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem' }}>
                  <a href={lab.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#3b82f6' }}>{lab.name}</a>
                  {lab.inst && <span style={{ marginLeft: 8, color: '#64748b' }}>@ {lab.inst}</span>}
                </li>
              ))}
            </ul>
          </motion.div>

        </section>
      </div>
    </main>
  );
};

export default Resources;