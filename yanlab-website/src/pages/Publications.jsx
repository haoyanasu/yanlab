import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo } from 'react';
import { FaFileAlt, FaExternalLinkAlt, FaQuoteLeft, FaCalendar, FaBook, FaStar, FaFilter } from 'react-icons/fa';
import './Publications.css';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedYear, setSelectedYear] = useState('All');

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
    // 2025
    {
      year: "2025",
      title: "DNA Moire Superlattices",
      authors: "X. Jing, N. Kronebert, A. Peil, B. Renz, L. Ding, T. Heil, K. Hipp, P. A. van Aken, H. Yan, N. Liu*",
      journal: "Nature Nanotechnology",
      doi: "In press",
      category: "DNA Nanotechnology"
    },
    {
      year: "2025",
      title: "DNA-templated spatially controlled proteolysis targeting chimera for CyclinD1-CDK4/6 complex protein degradation",
      authors: "R. Zheng#, A. Prasad#*, D. Satyabola, Y. Xu, H. Yan*",
      journal: "J. Am. Chem. Soc.",
      doi: "10.1021/jacs.5c04918",
      category: "Bioengineering"
    },
    {
      year: "2025",
      title: "Programming Precise Nanoparticle Patterns",
      authors: "H. Liu, N. Liu*, H. Yan*",
      journal: "Nature Materials",
      doi: "10.1038/s41563-025-02262-2",
      category: "Nanotechnology"
    },
    {
      year: "2025",
      title: "Adjuvanted RNA Origami-A Tunable Peptide Assembly Platform for Constructing Cancer Nanovaccines",
      authors: "T. Yip, X. Tu, X. Qi, H. Yan*, Y. Chang*",
      journal: "Vaccines",
      doi: "13 (6), 560",
      category: "RNA Technology"
    },
    {
      year: "2025",
      title: "Regulatory plasticity and metabolic trade-offs drive adaptive evolution of alternative flagellar configurations in Pseudomonas aeruginosa",
      authors: "A. Migueles-Lozano, M. Asp, S.T. Rocha, J. Li, G. Fanouraki, A.D. Sun, L. Zhang, J.R. Waldbauer, J. Hong, A. Shrivastava, J. Yan, S. Mukherjee",
      journal: "Submitted",
      doi: "In Review",
      category: "Biofilm"
    },
    {
      year: "2025",
      title: "Conformations and sequence determinants in the lipid binding of an adhesive peptide derived from Vibrio cholerae biofilm",
      authors: "X. Huang, R. Prasad, S. Saluja, Y. Yang, Q. Yan, S.O. Shuster, E. Karatekin, R. Olson, C. Lin, C.D. Davis, X. Jiang, H-X. Zhou, J. Yan*",
      journal: "Submitted",
      doi: "In Review",
      category: "Biofilm"
    },
    {
      year: "2025",
      title: "Single-cell imaging reveals spontaneous phenotypic sorting and bet-hedging in developing biofilms",
      authors: "J-S B. Tai, K.M. Nam, C. Li, J. Nijjer, S. Zhang, C.M. Waters, J. Yan*",
      journal: "Submitted",
      doi: "In Review",
      category: "Biofilm"
    },
    {
      year: "2025",
      title: "Dissecting the physics of bacterial biofilms with agent-based simulations",
      authors: "K.M. Nam, C. Li, B.J.R. Cockx, D.T. Nguyen, Y. Li, J-U. Kreft, J. Yan*",
      journal: "Current Opinion in Solid State & Materials Science",
      doi: "37, 101228",
      category: "Biofilm"
    },
    {
      year: "2025",
      title: "Morphogenesis of confined biofilms: how mechanical interactions determine cellular patterning and global geometry",
      authors: "K.M. Nam and J. Yan",
      journal: "Soft Matter",
      doi: "21, 1436-1450",
      category: "Biofilm"
    },
    {
      year: "2025",
      title: "Surface remodeling and inversion of cell-matrix interactions underlies community recognition and dispersal in Vibrio cholerae biofilms",
      authors: "A.P. Moreau, D.T. Nguyen, A. Hibest, A. Zamora, R. Weerasekera, K. Matej, X. Zhou, S. Sanchez, I.A. Rodriguez-Brenes, J-S.B. Tai, C.D. Nadell, W-L. Ng, V.D. Gordon, N.L. Komarova, R. Olson, Y. Li, J. Yan*",
      journal: "Nature Communications",
      doi: "16, 325",
      category: "Biofilm"
    },
    // 2024
    {
      year: "2024",
      title: "NucleoCraft: The art of stimuli-responsive precision in DNA and RNA bioengineering",
      authors: "L. Yu#, L. Chen#, D. Satyabola, A. Prasad, H. Yan*",
      journal: "BME Frontiers",
      doi: "10.34133/bmef.00",
      category: "Bioengineering"
    },
    {
      year: "2024",
      title: "Bioinspired photonic systems directed by designer DNA nanostructures",
      authors: "D. Satyabola, A. Prasad, H. Yan*, X. Zhou*",
      journal: "ACS Applied Optical Materials",
      doi: "10.1021/acsaom.4c00103",
      category: "Photonics"
    },
    {
      year: "2024",
      title: "3D DNA origami pincers that multitask on giant unilamellar vesicle Experiments",
      authors: "P. Zhan, J. Yang, L. Ding, X. Jing, K. Hipp, S. Nussberger, H. Yan, N. Liu*",
      journal: "Science Advances",
      doi: "10, eadn8903",
      category: "DNA Origami"
    },
    {
      year: "2024",
      title: "Inverse Design of a Pyrochlore Lattice of DNA Origami Through Model-driven Experiments",
      authors: "H. Liu, M. Matthies, J. Russo, L. Rovigatti, R. Narayanan, T. Diep, D. McKeen, O. Gang, N. Stephanopoulos, F. Sciortino, H. Yan, F. Romano, P. Sulc*",
      journal: "Science",
      doi: "384, 776-781",
      category: "DNA Origami"
    },
    {
      year: "2024",
      title: "Shape Matters: Autonomously Self-organized DNA Nanorobots as Masseur and Gatekeeper for Synthetic Cells",
      authors: "S. Fan, S. Wang, L. Ding, T. Speck, H. Yan*, S. Nussberger*, N. Liu*",
      journal: "Nature Materials",
      doi: "24, 278-286",
      category: "Nanorobotics"
    },
    {
      year: "2024",
      title: "Parallel DNA Storage by Programming and Printing Epigenetic Bits",
      authors: "C. Zhang*, R. Wu, F. Sun, Y. Lin, Y. Zhang, Y. Liang, Y. Chen., L. Liu, Q. Ouyang*, L. Qian*, H. Yan*",
      journal: "Nature",
      doi: "634, 824-832",
      category: "DNA Storage"
    },
    {
      year: "2024",
      title: "Chemically Conjugated Branched Staples for Super-DNA Origami",
      authors: "Y. Wang, H. Wang, Y. Li, C. Yang, Y. Tang, X. Lu, J. Fan, W. Tang, Y. Shang, H. Yan*, J. Liu*, B. Ding*",
      journal: "J. Am. Chem. Soc.",
      doi: "in press",
      category: "DNA Origami"
    },
    {
      year: "2024",
      title: "Vibrio cholerae RbmB is an α-1,4-polysaccharide lyase with biofilm-dispersal activity against Vibrio Polysaccharide (VPS)",
      authors: "R. Weeresekera, A. Moreau, X. Huang, K-M. Nam, A.J. Hinbest, H. Yun, X. Liu, C. Ashwood, L.E. Pepi, L. Cegelski, J. Yan*, R. Olson*",
      journal: "PLoS Pathogens",
      doi: "20(12): e1012750",
      category: "Biofilm"
    },
    {
      year: "2024",
      title: "Comprehensive Genomic and Evolutionary Analysis of Biofilm Matrix Clusters and Proteins in the Vibrio Genus",
      authors: "Y. Yang, J. Yan, R. Olson, X. Jiang",
      journal: "mSystems",
      doi: "10, e00060-25",
      category: "Biofilm"
    },
    {
      year: "2024",
      title: "Mechano-lithography: stress anisotropy driven nematic order in growing three-dimensional bacterial biofilms",
      authors: "C. Li, J. Nijjer, L. Feng, Q. Zhang, J. Yan*, S. Zhang*",
      journal: "Soft Matter",
      doi: "20, 3401",
      category: "Biofilm"
    },
    {
      year: "2024",
      title: "Lipoarabinomannan regulates septation in Mycobacterium smegmatis",
      authors: "I.L. Sparks, J. Nijjer, J. Yan, Y.S. Morita*",
      journal: "Nature Communications",
      doi: "15, 2191",
      category: "Biofilm"
    },
    // 2023
    {
      year: "2023",
      title: "Self-assembling DNA Crystal Hosted Minor Groove Binders and Their Structure Determination with Crystallography",
      authors: "C. Simmons, H. Skyler, P. Sulc, N. Stephanopoulos*, H. Yan*",
      journal: "J. Am. Chem. Soc.",
      doi: "145, 48, 26075–26085",
      category: "DNA Crystallography"
    },
    {
      year: "2023",
      title: "Supramolecular polymerization of DNA nanostructures using high-affinity host-guest interactions",
      authors: "R.P. Narayanan, A. Prasad, A. Buchberger, L. Zhou, J. Bernal-Chanchavac, T. MacCulloch, N.E. Fahmi, H. Yan, F. Zhang, M.J. Webber*, N. Stephanopoulos*",
      journal: "Small",
      doi: "230785",
      category: "DNA Assembly"
    },
    {
      year: "2023",
      title: "DNA-based Computation for Multiple Biomarkers",
      authors: "L. Yu, H. Yan*",
      journal: "Nature Biomedical Engineering",
      doi: "7, 1535-1536",
      category: "DNA Computing"
    },
    {
      year: "2023",
      title: "CytoDirect: a Nucleic Acid Nanodevice for Specific and Efficient Delivery of Functional Payloads to the Cytoplasm",
      authors: "L. Yu, Y. Xu, M. Al-Amin, S. Jiang, M. Sample, A. Prasad, N. Stephanopoulos, P. Sulc, H. Yan*",
      journal: "J. Am. Chem. Soc.",
      doi: "145, 50, 27336–27347",
      category: "Drug Delivery"
    },
    {
      year: "2023",
      title: "Modulating Lipid Membrane Morphology by Dynamic DNA Origami Networks",
      authors: "J. Yang, K. Jahnke, L. Xin, X. Jing, P. Zhan, A. Peil, A. Griffo, M. Skugor, D. Yang, S. Fan, K. Gopfrich*, H. Yan*, P. Wang*, N. Liu*",
      journal: "Nano Letters",
      doi: "23, 6330-6336",
      category: "Membrane Biology"
    },
    {
      year: "2023",
      title: "Single-Stranded RNA Origami-based Epigenetic Immunomodulation",
      authors: "K. Dai, C. Gong, Y. Xu, F. Ding, X. Qi, X. Tu, L. Yu, X. Liu, J. Li, C. Fan, H. Yan*, G. Yao*",
      journal: "Nano Letters",
      doi: "23, 7188-7196",
      category: "RNA Technology"
    },
    {
      year: "2023",
      title: "Biofilms as self-shaping growing nematics",
      authors: "J. Nijjer#, C. Li#, M. Kothari, T. Henzel, Q. Zhang, J-S B. Tai, S. Zhou, T. Cohen*, S. Zhang*, J. Yan*",
      journal: "Nature Physics",
      doi: "19, 1936-1944",
      category: "Biofilm"
    },
    {
      year: "2023",
      title: "Vibrio cholerae biofilms use modular adhesins with glycan-targeting and nonspecific surface binding domains for colonization",
      authors: "X. Huang#, T. Nero#, R. Weerasekera, K.H. Matej, A. Hinbest, Z. Jiang, R.F. Lee, L. Wu, C. Chak, J. Nijjer, I. Gibaldi, H. Yang, N. Gamble, W-L. Ng, S.A. Malaker, K. Sumigray, R. Olson*, J. Yan*",
      journal: "Nature Communications",
      doi: "14, 2104",
      category: "Biofilm"
    },
    {
      year: "2023",
      title: "New insights into Vibrio cholerae biofilms from molecular biophysics to microbial ecology",
      authors: "J-S B. Tai, M.J. Ferrell, J. Yan, C.M. Waters*",
      journal: "Vibrio spp. Infections, Advances in Experimental Medicine and Biology",
      doi: "pp 17-39",
      category: "Biofilm"
    },
    {
      year: "2023",
      title: "Mechanical characterization and single-cell imaging of bacterial biofilms",
      authors: "A. Moreau, S. Mukherjee*, J. Yan*",
      journal: "Israel Journal of Chemistry",
      doi: "Invited review",
      category: "Biofilm"
    },
    {
      year: "2023",
      title: "Bacteria surfing the elastic wave",
      authors: "J. Nijjer, T. Cohen, J. Yan*",
      journal: "Nature Physics (News&Views)",
      doi: "19, 6-7",
      category: "Biofilm"
    },
    // 2022
    {
      year: "2022",
      title: "Social evolution of shared biofilm matrix components",
      authors: "J-S B. Tai, S. Mukherjee, T. Nero, R. Olson, J. Tithof, C.D. Nadell*, J. Yan*",
      journal: "Proceedings of the National Academy of Sciences USA",
      doi: "119, e2123469119",
      category: "Biofilm"
    },
    {
      year: "2022",
      title: "Interfacial Cavitation",
      authors: "T. Henzel#, J. Nijjer#, C. Senthilnathan#, H. Wahdat, A.J. Crosby, J. Yan*, T. Cohen*",
      journal: "PNAS Nexus",
      doi: "pgac217",
      category: "Biofilm"
    },
    {
      year: "2022",
      title: "Mechanical resilience of biofilms towards environmental perturbations mediated by extracellular matrix",
      authors: "Q. Zhang, D. Nguyen, J-S B. Tai, X. Xu, J. Nijjer, X. Huang, Y. Li, J. Yan*",
      journal: "Advanced Functional Materials",
      doi: "32, 2110699",
      category: "Biofilm"
    },
    {
      year: "2022",
      title: "Nonlinear inclusion theory with application to the growth and morphogenesis of a confined body",
      authors: "J. Li#, M. Kothari#, C. Senthilnathan, T. Henzel, Q. Zhang, X. Li, J. Yan*, T. Cohen*",
      journal: "Journal of the Mechanics and Physics of Solids",
      doi: "159, 104709",
      category: "Biofilm"
    },
    // 2021
    {
      year: "2021",
      title: "Mechanical forces drive a reorientation cascade leading to biofilm self-patterning",
      authors: "J. Nijjer, C. Li, Q. Zhang, H. Lu, S. Zhang*, J. Yan*",
      journal: "Nature Communications",
      doi: "12, 6631",
      category: "Biofilm"
    },
    {
      year: "2021",
      title: "Morphogenesis and cell ordering in confined bacterial biofilms",
      authors: "Q. Zhang, J. Li, J. Nijjer, H. Lu, M. Kothari, R. Alert, T. Cohen*, J. Yan*",
      journal: "Proceedings of the National Academy of Sciences USA",
      doi: "118, e2107107118",
      category: "Biofilm"
    },
    {
      year: "2021",
      title: "Searching for the secret of stickiness: How biofilms adhere to surfaces",
      authors: "Z. Jiang, T. Nero, S. Mukherjee, R. Olson, J. Yan*",
      journal: "Frontiers in Microbiology",
      doi: "12, 686793",
      category: "Biofilm"
    },
    // 2020
    {
      year: "2020",
      title: "Nonuniform growth and surface friction determine bacterial biofilm morphology on soft substrates",
      authors: "C. Fei, S. Mao, J. Yan, R. Alert, H.A. Stone, B.L. Bassler, N.S. Wingreen, A. Košmrlj",
      journal: "Proceedings of the National Academy of Sciences USA",
      doi: "117, 7622",
      category: "Biofilm"
    },
    {
      year: "2020",
      title: "Surviving as a community: antibiotic tolerance and persistence in bacterial biofilms",
      authors: "J. Yan, B.L. Bassler",
      journal: "Cell Host & Microbe",
      doi: "26, 15",
      category: "Biofilm"
    },
    // 2019
    {
      year: "2019",
      title: "Mechanical instability and interfacial energy drive biofilm morphogenesis",
      authors: "J. Yan#, C. Fei#, S. Mao#, A. Moreau, N.S. Wingreen, A. Košmrlj, H.A. Stone, B.L. Bassler",
      journal: "eLife",
      doi: "8, e43920",
      category: "Biofilm"
    },
    // 2018
    {
      year: "2018",
      title: "Bacterial biofilm material properties enable removal and transfer by capillary peeling",
      authors: "J. Yan, A. Moreau, S. Khodaparast, A. Perazzo, J. Feng, C. Fei, S. Mao, S. Mukherjee, A. Košmrlj, N.S. Wingreen, B.L. Bassler, H.A. Stone",
      journal: "Advanced Materials",
      doi: "30, 1804153",
      category: "Biofilm"
    },
    {
      year: "2018",
      title: "Verticalization of bacterial biofilms",
      authors: "F. Beroz, J. Yan, Y. Meir, B. Sabass, H.A. Stone, B.L. Bassler, N.S. Wingreen",
      journal: "Nature Physics",
      doi: "14, 954",
      category: "Biofilm"
    },
    // 2017
    {
      year: "2017",
      title: "Extracellular-matrix-mediated osmotic pressure drives Vibrio cholerae biofilm expansion and cheater exclusion",
      authors: "J. Yan, C.D. Nadell, H.A. Stone, N.S. Wingreen, B.L. Bassler",
      journal: "Nature Communications",
      doi: "8, 327",
      category: "Biofilm"
    },
    {
      year: "2017",
      title: "Flow environment and matrix structure interact to determine spatial competition in Pseudomonas aeruginosa biofilms",
      authors: "C.D. Nadell#, D. Ricaurte#, J. Yan, K. Drescher, B.L. Bassler",
      journal: "eLife",
      doi: "6, e21855",
      category: "Biofilm"
    },
    {
      year: "2017",
      title: "Environmental fluctuation governs selection for plasticity in biofilm production",
      authors: "J. Yan#, C.D. Nadell#, B.L. Bassler",
      journal: "The ISME Journal",
      doi: "11, 1569",
      category: "Biofilm"
    },
    // 2016
    {
      year: "2016",
      title: "Vibrio cholerae biofilm growth program and architecture revealed by single-cell live imaging",
      authors: "J. Yan, A.G. Sharo, H.A. Stone, N.S. Wingreen, B.L. Bassler",
      journal: "Proceedings of the National Academy of Sciences USA",
      doi: "113, E5337",
      category: "Biofilm"
    },
    // 2015-2010 DNA Nanotechnology Publications
    {
      year: "2015",
      title: "Scaffolded DNA origami enables nanoscale mapping of molecular structures",
      authors: "S. Perera, L. Johnson, K. Göpfrich, C. Simmons, H. Yan*",
      journal: "Nature Nanotechnology",
      doi: "10, 1082",
      category: "DNA Origami"
    },
    {
      year: "2014",
      title: "Complex wireframe DNA origami nanostructures with multi-arm junction vertices",
      authors: "C. Zhang, M. Su, Y. He, X. Zhao, P.-A. Fang, A.E. Ribbe, W. Jiang, H. Yan*",
      journal: "Nature Nanotechnology",
      doi: "9, 594",
      category: "DNA Origami"
    },
    {
      year: "2013",
      title: "A tweezer-like enzyme and cofactor control circuit driven by DNA",
      authors: "M. Liu, J. Fu, C. Hejesen, Y. Yang, N.W. Woodbury, K. Gothelf, Y. Liu*, H. Yan*",
      journal: "Nature Communications",
      doi: "4, 2127",
      category: "DNA Devices"
    },
    {
      year: "2012",
      title: "Complex shapes self-assembled from single-stranded DNA tiles",
      authors: "Y. Ke, L.L. Ong, W.M. Shih, P. Yin*",
      journal: "Nature",
      doi: "488, 78",
      category: "DNA Assembly"
    },
    {
      year: "2011",
      title: "Self-assembly of a y-shaped dna nanostructure",
      authors: "W. Liu, H. Zhong, R. Wang, N.C. Seeman*",
      journal: "Angewandte Chemie International Edition",
      doi: "50, 264",
      category: "DNA Assembly"
    },
    {
      year: "2010",
      title: "Folding and cutting DNA into reconfigurable topological nanostructures",
      authors: "C. Mao, W. Sun, Z. Shen, N.C. Seeman*",
      journal: "Nature",
      doi: "386, 137",
      category: "DNA Topology"
    },
    {
      year: "2009",
      title: "A proximity-based programmable DNA nanoscale assembly line",
      authors: "H. Gu, J. Chao, S.-J. Xiao, N.C. Seeman*",
      journal: "Nature",
      doi: "465, 202",
      category: "DNA Devices"
    },
    {
      year: "2008",
      title: "Highly parallel construction of DNA nanostructure arrays",
      authors: "B. Ding, R. Sha, N.C. Seeman*",
      journal: "Journal of the American Chemical Society",
      doi: "130, 10908",
      category: "DNA Arrays"
    },
    {
      year: "2007",
      title: "DNA nanostructure engineering",
      authors: "H. Yan*, P. Yin, N.C. Seeman*",
      journal: "Science",
      doi: "318, 1276",
      category: "Review"
    },
    {
      year: "2006",
      title: "Designer DNA nanoarchitectures",
      authors: "N.C. Seeman*, H. Yan*",
      journal: "Biochemistry",
      doi: "45, 5218",
      category: "Review"
    },
    {
      year: "2005",
      title: "Programming DNA tube circumferences",
      authors: "P. Yin, R.F. Hariadi, S. Sahu, H.M.T. Choi, S.H. Park, T.H. LaBean, J.H. Reif*",
      journal: "Science",
      doi: "321, 824",
      category: "DNA Tubes"
    },
    // Notable early works
    {
      year: "2004",
      title: "An Autonomous Unidirectional DNA Walker",
      authors: "P. Yin, H. Yan*, X.J. Guan, A.J. Turberfield*, J. H. Reif*",
      journal: "Angew. Chem. Int. Ed.",
      doi: "43, 4906-4911",
      category: "DNA Nanotechnology"
    },
    {
      year: "2003",
      title: "DNA Templated Self-assembly of Protein Arrays and Highly Conductive Nanowires",
      authors: "H. Yan*, S. H. Park, G. Finkelstein, J. H. Reif & T. H. LaBean*",
      journal: "Science",
      doi: "301, 1882",
      category: "DNA Nanotechnology"
    },
    {
      year: "2003",
      title: "A Two-State DNA Lattice Switched By DNA Nanoactuator",
      authors: "L. Feng, S. H. Park, J. H. Reif, H. Yan*",
      journal: "Angew. Chem. Int. Ed.",
      doi: "42, 4342",
      category: "DNA Devices"
    },
    {
      year: "2002",
      title: "A Robust Sequence-dependent Rotary DNA Device",
      authors: "H. Yan, X. Yang, Z. Shen and N. C. Seeman*",
      journal: "Nature",
      doi: "415, 62-65",
      category: "DNA Devices"
    }
  ];

  // Get unique years from publications and sort in descending order
  const uniqueYears = useMemo(() => {
    const years = [...new Set(publications.map(pub => pub.year))];
    return years.sort((a, b) => parseInt(b) - parseInt(a));
  }, []);

  // Filter publications by selected year
  const filteredPublications = useMemo(() => {
    if (selectedYear === 'All') {
      return publications;
    }
    return publications.filter(pub => pub.year === selectedYear);
  }, [selectedYear]);

  // Calculate statistics
  const publicationStats = useMemo(() => {
    const totalPubs = publications.length;
    const currentYear = new Date().getFullYear();
    const currentYearPubs = publications.filter(pub => parseInt(pub.year) === currentYear).length;
    const lastYearPubs = publications.filter(pub => parseInt(pub.year) === currentYear - 1).length;
    
    const categories = [...new Set(publications.map(pub => pub.category))];
    const topJournals = publications.reduce((acc, pub) => {
      acc[pub.journal] = (acc[pub.journal] || 0) + 1;
      return acc;
    }, {});
    
    return {
      total: totalPubs,
      currentYear: currentYearPubs,
      lastYear: lastYearPubs,
      categories: categories.length,
      topJournal: Object.keys(topJournals).reduce((a, b) => topJournals[a] > topJournals[b] ? a : b)
    };
  }, []);

  return (
    <div className="page-wrapper">
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
            Recent publications from the Yan Lab showcasing our research in DNA nanotechnology, bioengineering, and nucleic acid-based devices.
          </motion.p>
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
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
          >
            PUBLICATION STATISTICS
          </motion.h2>
          <motion.div 
            className="stats-grid"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
            }}
          >
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{publicationStats.total}</div>
              <div className="stat-label">Total Publications</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{publicationStats.currentYear}</div>
              <div className="stat-label">2025 Publications</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{publicationStats.lastYear}</div>
              <div className="stat-label">2024 Publications</div>
            </motion.div>
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">{publicationStats.categories}</div>
              <div className="stat-label">Research Categories</div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Year Filter Section */}
        <motion.section 
          className="year-filter-section"
          variants={itemVariants}
        >
          <motion.h3 
            className="filter-title"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
            }}
          >
            <FaFilter className="filter-icon" />
            Filter by Year
          </motion.h3>
          <motion.div 
            className="year-filter-bar"
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
            }}
          >
            <button 
              className={`year-filter-btn ${selectedYear === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedYear('All')}
            >
              All ({publications.length})
            </button>
            {uniqueYears.map(year => {
              const yearCount = publications.filter(pub => pub.year === year).length;
              return (
                <button 
                  key={year}
                  className={`year-filter-btn ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year} ({yearCount})
                </button>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Publications List */}
        <motion.section 
          className="publications-list"
          ref={ref}
          variants={itemVariants}
        >
          {selectedYear === 'All' ? (
            // Show all publications grouped by year
            uniqueYears.map((year, yearIndex) => {
              const yearPublications = publications.filter(pub => pub.year === year);
              return (
                <motion.div 
                  key={year}
                  className="year-section"
                  style={{
                    transform: isInView ? "none" : "translateY(50px)",
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + yearIndex * 0.1}s`
                  }}
                >
                  <div className="year-header">
                    <h2 className="year-title">{year}</h2>
                    <div className="year-underline"></div>
                  </div>
                  
                  <div className="year-publications">
                    {yearPublications.map((pub, index) => (
                      <motion.div 
                        key={`${year}-${index}`}
                        className="publication-item"
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          transform: isInView ? "none" : "translateY(30px)",
                          opacity: isInView ? 1 : 0,
                          transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + index * 0.1}s`
                        }}
                      >
                        <div className="journal-badge">
                          <FaFileAlt className="journal-icon" />
                          <span className="journal-name">{pub.journal}</span>
                        </div>
                        
                        <div className="publication-content">
                          <div className="pub-text-content">
                            <h3 className="pub-title">{pub.title}</h3>
                            <p className="pub-authors">{pub.authors}</p>
                            <div className="pub-meta-inline">
                              <span className="pub-category">
                                <FaStar className="pub-icon" />
                                {pub.category}
                              </span>
                              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-doi">
                                <FaExternalLinkAlt className="pub-icon" />
                                DOI: {pub.doi}
                              </a>
                            </div>
                          </div>
                          <div className="pub-visual">
                            <div className="pub-image-placeholder">
                              <div className="pub-image-content">
                                <div className="pub-image-icon">
                                  <FaFileAlt />
                                </div>
                                <p>Graphical Abstract</p>
                                <span className="pub-image-subtitle">TOC Figure</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })
          ) : (
            // Show filtered publications for specific year
            <motion.div 
              className="year-section"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
              }}
            >
              <div className="year-header">
                <h2 className="year-title">{selectedYear}</h2>
                <div className="year-underline"></div>
              </div>
              
              <div className="year-publications">
                {filteredPublications.map((pub, index) => (
                  <motion.div 
                    key={index}
                    className="publication-item"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      transform: isInView ? "none" : "translateY(30px)",
                      opacity: isInView ? 1 : 0,
                      transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + index * 0.1}s`
                    }}
                  >
                    <div className="journal-badge">
                      <FaFileAlt className="journal-icon" />
                      <span className="journal-name">{pub.journal}</span>
                    </div>
                    
                    <div className="publication-content">
                      <div className="pub-text-content">
                        <h3 className="pub-title">{pub.title}</h3>
                        <p className="pub-authors">{pub.authors}</p>
                        <div className="pub-meta-inline">
                          <span className="pub-category">
                            <FaStar className="pub-icon" />
                            {pub.category}
                          </span>
                          <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="pub-doi">
                            <FaExternalLinkAlt className="pub-icon" />
                            DOI: {pub.doi}
                          </a>
                        </div>
                      </div>
                      <div className="pub-visual">
                        <div className="pub-image-placeholder">
                          <div className="pub-image-content">
                            <div className="pub-image-icon">
                              <FaFileAlt />
                            </div>
                            <p>Graphical Abstract</p>
                            <span className="pub-image-subtitle">TOC Figure</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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
    </div>
  );
};

export default Publications; 