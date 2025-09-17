
import React from 'react';
import './Publications.css';

const publications2025 = [
  {
    number: '249',
    authors: 'X. Jing, N. Kronebert, A. Peil, B. Renz, L. Ding, T. Heil, K. Hipp, P. A. van Aken, H. Yan, N. Liu*',
    title: 'DNA Moire Superlattices',
    journal: 'Nature Nanotechnology In press (2025).'
  },
  {
    number: '248',
    authors: 'R. Zheng#, A. Prasad#*, D. Satyabola, Y. Xu, H. Yan*',
    title: 'DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation',
    journal: 'J. Am. Chem. Soc. DOI: 10.1021/jacs.5c04918 (2025).'
  },
  {
    number: '247',
    authors: 'H. Liu, N. Liu*, H. Yan*',
    title: 'Programming Precise Nanoparticle Patterns',
    journal: 'Nature Materials. DOI: 10.1038/s41563-025-02262-2 (2025).'
  },
  {
    number: '246',
    authors: 'T. Yip, X. Tu, X. Qi, H. Yan*, Y. Chang*',
    title: 'Adjuvanted RNA Origami-A Tunable Peptide Assembly Platform for Constructing Cancer Nanovaccines',
    journal: 'Vaccines, 13 (6), 560 (2025).'
  }
];

const publications2024 = [
  {
    number: '245',
    authors: 'L. Yu#, L. Chen#, D. Satyabola, A. Prasad, H. Yan*',
    title: 'NucleoCraft: The art of stimuli-responsive precision in DNA and RNA bioengineering',
    journal: 'BME Frontiers. DOI: 10.34133/bmef.00 (2024).'
  },
  {
    number: '244',
    authors: 'D. Satyabola, A. Prasad, H. Yan*, X. Zhou*',
    title: 'Bioinspired photonic systems directed by designer DNA nanostructures',
    journal: 'ACS Applied Optical Materials. DOI: 10.1021/acsaom.4c00103 (2024).'
  },
  {
    number: '243',
    authors: 'P. Zhan, J. Yang, L. Ding, X. Jing, K. Hipp, S. Nussberger, H. Yan, N. Liu*',
    title: '3D DNA origami pincers that multitask on giant unilamellar vesicle Experiments',
    journal: 'Science Advances. 10, eadn8903 (2024).'
  },
  {
    number: '242',
    authors: 'H. Liu, M. Matthies, J. Russo, L. Rovigatti, R. Narayanan, T. Diep, D. McKeen, O. Gang, N. Stephanopoulos, F. Sciortino, H. Yan, F. Romano, P. Sulc*',
    title: 'Inverse Design of a Pyrochlore Lattice of DNA Origami Through Model-driven Experiments',
    journal: 'Science. 384, 776-781 (2024).'
  },
  {
    number: '241',
    authors: 'S. Fan, S. Wang, L. Ding, T. Speck, H. Yan*, S. Nussberger*, N. Liu*',
    title: 'Shape Matters: Autonomously Self-organized DNA Nanorobots as Masseur and Gatekeeper for Synthetic Cells',
    journal: 'Nature Materials. 24, 278-286 (2025).'
  },
  {
    number: '240',
    authors: 'C. Zhang*, R. Wu, F. Sun, Y. Lin, Y. Zhang, Y. Liang, Y. Chen., L. Liu, Q. Ouyang*, L. Qian*, H. Yan*.',
    title: 'Parallel DNA Storage by Programming and Printing Epigenetic Bits',
    journal: 'Nature. 634, 824-832 (2024).'
  },
  {
    number: '239',
    authors: 'Y. Gao, Y. Sha, Y. Liu, J. Chen, M. Li, S. Gao, Q. Li, X. Zuo, C. Chen, T. Zhang, K. Wang, P. Wang, G. Chen, X. Liu*, H. Yan*, C. Fan*',
    title: 'Massively Parallel sub-10-nanometer lithography of Graphene with DNA-silica Composite Masked Material Manufacturing',
    journal: 'Nature Nanotechnology. submitted (2024).'
  },
  {
    number: '238',
    authors: 'G. B. M. Wisna, D. Sukhareva, J. Zhao, D. Satyabola, H. Yan*, R. F. Hariadi*',
    title: 'DNA Origami Cryptography in 2D and 3D Space with Improved Detection and Fast Readout Enabled by HighSpeed DNA-PAINT and Unsupervised Clustering',
    journal: 'Nature Communications. submitted (2024).'
  },
  {
    number: '237',
    authors: 'Y. Xuǂ, R. Zhengǂ, A. Prasadǂ, M. Liu, X. Zhou, R. Porter, M. Sample, E. Poppleton,J. Procyk, H. Liu, H. Lee, H. Yan*, P. Sulc*, N. Stephanopoulos*',
    title: 'High-affinity binding to the SARS-CoV-2 spike trimer by a multivalent protein-DNA synthetic antibody',
    journal: 'J. Am. Chem. Soc. submitted (2024).'
  },
  {
    number: '236',
    authors: 'Y. Wang, H. Wang, Y. Li, C. Yang, Y. Tang, X. Lu, J. Fan, W. Tang, Y. Shang, H. Yan*, J. Liu*, B. Ding*',
    title: 'Chemically Conjugated Branched Staples for Super-DNA Origami',
    journal: 'J. Am. Chem. Soc. in press (2024).'
  },
  {
    number: '235',
    authors: 'T. Yip, X. Qi, H. Yan*, Y. Chang*',
    title: 'RNA Origami Functions as a Self-adjuvanted Nanovaccine Platform for Cancer Immunotherapy',
    journal: 'ACS Nano. in revision (2024).'
  }
];


const Publications = () => (
  <div className="publications-page">
    <div className="publications-container" style={{
      maxWidth: '900px',
      margin: '48px auto',
      background: 'rgba(255,255,255,0.65)',
      borderRadius: '0',
      boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
      padding: '0 32px 48px 32px',
      backdropFilter: 'blur(6px)'
    }}>
      <div className="publications-hero" style={{ padding: '48px 0 0 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#232946', marginBottom: '0.5rem', letterSpacing: '-1px', fontFamily: 'Inter, Arial, sans-serif' }}>Publications</h1>
        <p style={{ color: '#232946', fontSize: '1.08rem', fontWeight: 500, marginBottom: 0, fontFamily: 'Inter, Arial, sans-serif' }}>Recent research articles from the Yan Lab</p>
      </div>
      <div className="publications-list" style={{ marginTop: '32px' }}>
  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2025</h2>
        {publications2025.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                // Attempt to extract the journal name (first word or phrase before a comma or period)
                const journalText = item.journal.replace(/"/g, '');
                // Find the journal name (before first comma or period)
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                // DOI detection (handle 'DOI:' prefix)
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  // Replace only the DOI part with a clickable link
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2024</h2>
        {publications2024.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                // Attempt to extract the journal name (first word or phrase before a comma or period)
                const journalText = item.journal.replace(/"/g, '');
                // Find the journal name (before first comma or period)
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                // DOI detection (handle 'DOI:' prefix)
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
                  // Replace only the DOI part with a clickable link
                  const start = doiMatch.index || 0;
                  const end = start + doiMatch[0].length;
                  return (
                    <span>
                      <span style={{ fontWeight: 700 }}>{journalName}</span>
                      {restText.slice(0, start)}
                      {prefix}
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: 400 }}>{doi}</a>
                      {restText.slice(end)}
                    </span>
                  );
                }
                return <span><span style={{ fontWeight: 700 }}>{journalName}</span>{restText}</span>;
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Publications;