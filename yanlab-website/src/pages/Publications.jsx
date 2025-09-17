
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



const publications2023 = [
  {
    number: '234',
    authors: 'C. Simmons, H. Skyler, P. Sulc, N. Stephanopoulos*, H. Yan*',
    title: 'Self-assembling DNA Crystal Hosted Minor Groove Binders and Their Structure Determination with Crystallography',
    journal: 'J. Am. Chem. Soc. 145, 48, 26075–26085 (2023).'
  },
  {
    number: '233',
    authors: 'R.P. Narayanan, A. Prasad, A. Buchberger, L. Zhou, J. Bernal-Chanchavac, T. MacCulloch, N.E. Fahmi, H. Yan, F. Zhang, M.J. Webber*, N. Stephanopoulos*',
    title: 'Supramolecular polymerization of DNA nanostructures using high-affinity host-guest interactions',
    journal: 'Small 230785 (2023).'
  },
  {
    number: '232',
    authors: 'L. Yu, H. Yan*',
    title: 'DNA-based Computation for Multiple Biomarkers.',
    journal: 'Nature Biomedical Engineering 7, 1535-1536 (2023).'
  },
  {
    number: '231',
    authors: 'L. Yu, Y. Xu, M. Al-Amin, S. Jiang, M. Sample, A. Prasad, N. Stephanopoulos, P. Sulc, H. Yan*',
    title: 'CytoDirect: a Nucleic Acid Nanodevice for Specific and Efficient Delivery of Functional Payloads to the Cytoplasm',
    journal: 'J. Am. Chem. Soc. 145, 50, 27336–27347 (2023).'
  },
  {
    number: '230',
    authors: 'J. Yang, K. Jahnke, L. Xin, X. Jing, P. Zhan, A. Peil, A. Griffo, M. Skugor, D. Yang, S. Fan, K. Gopfrich*, H. Yan*, P. Wang*, N. Liu*',
    title: 'Modulating Lipid Membrane Morphology by Dynamic DNA Origami Networks',
    journal: 'Nano Letters 23, 6330-6336 (2023).'
  },
  {
    number: '229',
    authors: 'K. Dai, C. Gong, Y. Xu, F. Ding, X. Qi, X. Tu, L. Yu, X. Liu, J. Li, C. Fan, H. Yan*, G. Yao*',
    title: 'Single-Stranded RNA Origami-based Epigenetic Immunomodulation',
    journal: 'Nano Letters 23, 7188-7196 (2023).'
  },
  {
    number: '228',
    authors: 'K. Dai, Y. Xu, Y. Yang, J. Shen, X. Liu, X. Tu, L. Yu, X. Qi, J. Li, L. Wang, X. Zuo, Y. Liu*, H. Yan*, C. Fan*, G. Yao*',
    title: 'Edge Length-Programmed Single-Stranded RNA Origami for Predictive Innate Immune Activation and Therapy',
    journal: 'J. Am. Chem. Soc. 145, 17112-17124 (2023).'
  },
  {
    number: '227',
    authors: 'Y. Tang, H. Liu, Q. Wang, X. Qi, L. Yu, P. Sulc, F. Zhang, H. Yan*, S. Jiang*',
    title: 'DNA Origami Tessellations',
    journal: 'J. Am. Chem. Soc. 145, 25, 13858-13868 (2023).'
  }
];

const publications2022 = [
  {
    number: '226',
    authors: "D. Fu', R. Pradeep', A. Prasad', F. Zhang, D. Williams, J. Schreck, H. Yan* and J. Reif*.",
    title: 'Automated design of 3D DNA origami with non-rasterized 2D curvature',
    journal: 'Science Advances 8, eade445, (2022).'
  },
  {
    number: '225',
    authors: "X. Zhou', D. Satyabola', H. Liu, S. Jiang, X. Qi, L. Yu, S. Lin, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: 'Two-Dimensional Excitonic Networks Directed by DNA Templates as an Efficient Model Light-Harvesting and Energy Transfer System',
    journal: 'Angew. Chem. Int. Ed. 61, e2022112, (2022).'
  },
  {
    number: '224',
    authors: "R. Pradeep', J. Procyk', P. Nandi, A. Prasad, Y. Xu, E. Poppleton, D. Williams, F. Zhang, H. Yan, P. Chiu*, N. Stephanopoulos*, and P. Sulc*", 
    title: 'Coarse-Grained Simulations for the Characterization and Optimization of Hybrid Protein-DNA Nanostructures',
    journal: 'ACS Nano 16, 14086-14096, (2022).'
  },
  {
    number: '223',
    authors: 'L. Ma, Y. Liu, C. Han, A. Movsesyan, P. Li, H. Li, P. Tang, Y. Yuan, S. Jiang, W. Ni, H. Yan, A. Govorov, Z. Wang, X. Lan*',
    title: 'DNA-Assembled Chiral Satellite-Core Nanoparticle Superstructures: Two-State Chiral Interactions from Dynamic and Static Conformations',
    journal: 'Nano Letters 22, 4784−4791, (2022).'
  },
  {
    number: '222',
    authors: 'K. Chen, F. Xu, Y. Hu, H. Yan*, L. Pan*',
    title: 'DNA Kirigami Driven by Polymerase-Triggered Strand Displacemen',
    journal: 'Small 18, 2201478, (2022).'
  },
  {
    number: '221',
    authors: "X. Zhou, H. Liu, F. Djutanta, D. Satyabola, S. Jiang, X. Qi, L. Yu, S. Lin, R.F. Hariadi, Y. Liu, N.W. Woodbury*, H. Yan*.",
    title: 'DNA-Templated Programmable Excitonic Wires for Micron-Scale Exciton Transport',
    journal: 'Chem. 8, 2442-2459, (2022).'
  },
  {
    number: '220',
    authors: 'X. Zhou, S. Lin, H. Yan*',
    title: 'Interfacing DNA nanotechnology and biomimetic photonic complex: advances and prospects in energy and biomedicine',
    journal: 'J. Nanobiotechnology 20, 257, (2022).'
  },
  {
    number: '219',
    authors: "C. Simmons', T. MacCulloch', M. Krepl, M. Matthies, A. Buchberger, I. Crawford, J. Sponer, P. Sulc, N. Stephanopoulos*, H. Yan*.",
    title: 'The influence of Holliday junction sequence and dynamics on DNA crystal self-assembly',
    journal: 'Nat. Commun. 13, 3112, (2022).'
  },
  {
    number: '218',
    authors: 'L. Liu, F. Hong, H. Liu, X. Zhou, S. Jiang, P. Sulc, J. Jiang*, H. Yan*',
    title: 'A localized DNA Finite State Machine with Temporal Resolution',
    journal: 'Science Advances 8, eabm9530, (2022).'
  },
  {
    number: '217',
    authors: "J. Bohlin', E. Poppleton', M. Matthies', J. Procyk', A. Mallya, H. Yan, P. Sulc*", 
    title: 'Design and simulation of DNA, RNA, and hybrid protein-nucleic acid nanostructures with OxView',
    journal: 'Nature Protocols 17, 1762–1788, (2022).'
  },
  {
    number: '216',
    authors: 'C. Zhang*, X. Ma, X. Zheng, Y. Ke, K. Chen, D. Liu, Z. Lu, J. Yang*, H. Yan*',
    title: 'Programmable Allosteric DNA Regulations for Molecular Networks and Nanomachines',
    journal: 'Science Advances 8, eabl4589, (2022).'
  },
  {
    number: '215',
    authors: "S. Dey', A. Dorey', L. Abraham', Y. Xing, I. Zhang, F. Zhang, S. Howorka*, H. Yan*", 
    title: 'A Reversibly Gated Protein-Transporting Membrane Channel Made of DNA',
    journal: 'Nat. Commun. 13, 2271, (2022).'
  }
];

const publications2021 = [
  {
    number: '214',
    authors: 'H. Liu, F. Hong, F. Smith, J. Goertz, T. Ouldridge, M. Stevens, H. Yan, P. Sulc*',
    title: 'Kinetics of RNA and RNA:DNA hybrid strand displacement',
    journal: 'ACS Synth. Biol. 10, 3066-3073, (2021).'
  },
  {
    number: '213',
    authors: 'Y. Liu, L. Ma, S. Jiang, C. Han, P. Tang, H. Yang, X. Duan, N. Liu*, H. Yan*, X. Lan*',
    title: 'DNA Programmable Self-Assembly of Planar, Thin-Layered Chiral Nanoparticle Superstructures with Complex Two-Dimensional Patterns',
    journal: 'ACS Nano 15, 16664-16672, (2021).'
  },
  {
    number: '212',
    authors: 'T. Yuan, Y. Shao, X. Zhou, Q. Liu, Z. Zhu, B. Zhou, Y. Dong, N. Stephanopoulos, S. Gui*, H. Yan*, D. Liu*',
    title: 'Highly Permeable DNA Supramolecular Hydrogel Promotes Neurogenesis and Functional Recovery after Completely Transected Spinal Cord Injury',
    journal: 'Advanced Materials 33, 2102428, (2021).'
  },
  {
    number: '211',
    authors: 'Y. Zhang, Z. Qu, . Jiang, Y. Liu, R. Narayanan, D. Williams, X. Zuo, L. Wang, H. Yan, H. Liu* & C. Fan',
    title: 'Prescribing Silver Chirality with DNA Origami',
    journal: 'J. Am. Chem. Soc 143, 8639-8646, (2021).'
  },
  {
    number: '210',
    authors: 'S. Jiang, N. Pal, F. Hong, N. E. Fahmi, H. Hu, M. Vrbanac, H. Yan*, N. G. Walter*, Y. Liu*',
    title: 'Regulating DNA Self-Assembly Dynamics with Controlled Nucleation',
    journal: 'ACS Nano 15, 5384-5396, (2021).'
  },
  {
    number: '209',
    authors: 'S. Dey, C. Fan*, K. V. Gothelf*, J. Li*, C. Lin*, L. Liu, N. Liu*, M. A. D. Nijenhuis, B. Sacca*, F. C. Simmel*, H. Yan* & P. Zhan',
    title: 'DNA Origami',
    journal: 'Nat. Rev. Methods Primers 1, 13, (2021).'
  }
];

const publications2020 = [
  {
    number: '208',
    authors: 'S. Jiang, Z. Ge, S. Mou, H. Yan*, C. Fan*',
    title: 'Designer DNA Nanostructures for Therapeutics',
    journal: 'Chem 7, 1156-1179, (2020).'
  },
  {
    number: '207',
    authors: "G. Yao', F. Zhang', F. Wang', T. Peng, H. Liu, E. Poppleton, P. Sulc, S. Jiang, L. Liu, C. Gong, X. Jing, X. Liu, L. Wang, Y. Liu, C. Fan*, H. Yan*", 
    title: 'Meta-DNA Structures',
    journal: 'Nat. Chem. 12, 1067-1075, (2020).'
  },
  {
    number: '206',
    authors: "C.R. Simmons', T. MacCulloch', F. Zhang, Y. Liu, N. Stephanopoulos & H. Yan", 
    title: 'A Self-Assembled Rhombohedral DNA Crystal Scaffold with Tunable Cavity Sizes and High Resolution Structural Detail',
    journal: 'Angew. Chem. Int. Ed. 59, 18619-18626, (2020).'
  },
  {
    number: '205',
    authors: 'S. Jiang, F. Zhang, H. Yan',
    title: 'Complex assemblies and crystals guided by DNA',
    journal: 'Nat. Mater. 19, 694-700, (2020).'
  },
  {
    number: '204',
    authors: 'J. Georges, X. Qi, X. Liu, Y. Zhou, E. C. Woolf, A. Valeri, Z. Al-Atrache, E. Belykh, B. Feuerstein, M. Preul, A. C. Scheck, M. Reiser, T. Anderson, J. Gopez, D. Appelt, S. Yocom, J. Eschbacher, H. Yan, P. Nakaji',
    title: 'A Fluorescent Aptamer Provides Rapid and Specific Ex Vivo Diagnosis of Central Nervous System Lymphoma from Rodent Xenograft Biopsies',
    journal: 'J. Neurosurg. 134, 1728-1737, (2020).'
  },
  {
    number: '203',
    authors: "J. Li', J. Dai', S. Jiang', M. Xie', T. Zhai, L. Guo, S. Cao, S. Xing, Z. Qu, Y. Zhao, F. Wang, Y. Yang, L. Liu, X. Zuo, L. Wang*, H. Yan*, C. Fan*", 
    title: 'Encoding quantized fluorescence states with fractal DNA frameworks',
    journal: 'Nat. Commun. 11, 2185, (2020).'
  },
  {
    number: '202',
    authors: 'X. Qi, X. Liu, L. Matiski, R. Rodriguez Del Villar, T. Yip, F. Zhang, S. Sokalingam, S. Jiang, L. Liu, H. Yan, Y. Chang',
    title: 'RNA Origami Nanostructures for Potent and Safe Anti-Cancer Immunotherapy',
    journal: 'ACS Nano 14, 4727-4740, (2020).'
  },
  {
    number: '201',
    authors: "F. Hong, D. Ma, K, Wu, L.A. Mina, R.C. Luiten, Y. Liu, H. Yan*, A.A. Green*", 
    title: 'Precise and Programmable Detection of Mutations Using Ultraspecific Riboregulators',
    journal: 'Cell 180, 1018-1032, (2020).'
  },
  {
    number: '200',
    authors: 'G. Yao, J. Li, Q. Li, X. Chen, X. Liu, F. Wang, Z. Qu, Z. Ge, R.P. Narayanan, D. Williams, H. Pei, X. Zuo, L. Wang, H. Yan, B.L. Feringa*, C. Fan*',
    title: 'Programming nanoparticle valence bonds with single-stranded DNA encoders',
    journal: 'Nature Materials 19, 781-788, (2020).'
  }
];

const publications2019 = [
  {
    number: '199',
    authors: 'C. Zhang*, Z. Wang, Y. Liu, J. Yang, X. Zhang, Y. Li, L. Pan, Y. Ke*, H. Yan*',
    title: 'Nicking-Assisted Reactant Recycle to Implement Entropy-Driven DNA Circuit',
    journal: 'J. Am. Chem. Soc. 141, 17189-17197, (2019).'
  },
  {
    number: '198',
    authors: "Z. Zhao, C. Wang, H. Yan,* Y. Liu*", 
    title: 'Soft Robotics Programmed with Double Crosslinking DNA Hydrogels',
    journal: 'Advanced Functional Materials 1905911, (2019).'
  },
  {
    number: '197',
    authors: 'X. Jing, F. Zhang, P. Pan, X. Dai, J. Li, L. Wang, H. Yan, C. Fan',
    title: 'Solidifying framework nucleic acids with silica',
    journal: 'Nature Protocols 14, 2416-2436, (2019).'
  },
  {
    number: '196',
    authors: 'X. Wang, A. Chandrasekaran, R. Arun, Z. Shen, Y. Ohayon, T. Wang, M. Kizer, R. Sha, C. Mao, H. Yan, X. Zhang, S. Liao, B. Ding, B. Chakraboty, N. Jonoska, D. Niu, H. Gu, J. Chao, X. Gao, Y. Li, T. Ciengshin, N. Seeman',
    title: 'Paranemic Crossover DNA: There and Back Again',
    journal: 'Chemical Reviews 119, 6273-6289, (2019).'
  },
  {
    number: '195',
    authors: 'Y. Zhou, X. Qi, Y. Liu, F. Zhang, H. Yan',
    title: 'DNA Nanoscaffold-Assisted Selection of Femtomolar Bivalent Aptamers for Human-Thrombin with Potent Anticoagulant Activity',
    journal: 'ChemBioChem 20, 2494-2503 (2019).'
  },
  {
    number: '194',
    authors: "S. Mandal', X. Zhou', S. Lin, H. Yan, N. Woodbury", 
    title: 'Directed Energy Transfer through DNA-Templated J-aggregates',
    journal: 'Bioconjugate Chemistry 30, 1870-1879, (2019).'
  },
  {
    number: '193',
    authors: "X. Zhou', S. Mandal', S. Jiang, S. Lin, J. Yang, Y. Liu, D. Whitten, N. Woodbury, H. Yan", 
    title: 'Efficient Long-rnage, Directional Energy Transfer through DNA-Templated Dye Aggregates',
    journal: 'J. Am. Chem. Soc. 141, 8473-8481, (2019).'
  },
  {
    number: '192',
    authors: 'L. Xin, M. Lu, S. Both, M. Pfeifer, M. Urban, C. Zhou, H. Yan, T. Weiss, N. Liu, K. Lindfors',
    title: 'Watching a Single Fluorofphore Molecule Walk into a Plasmonic Hotspot',
    journal: 'ACS Photonics 6, 985-993, (2019).'
  },
  {
    number: '191',
    authors: 'Y. Xu, S. Jiang, C. Simmons, R. Narayanan, F. Zhang, A. Aziz, H. Yan, N. Stephanopoulos*',
    title: 'Tunable Nanoscale Cages from Self-Assembling DNA and Protein Building Blocks',
    journal: 'ACS Nano 13, 3545-3554, (2019).'
  },
  {
  number: '190',
  authors: "H. Jun, F. Zhang, T. Shepherd, S. Ratanalert, X. Qi, H. Yan, M. Bathe*",
    title: 'Autonomously designed free-form 2D DNA origami',
    journal: 'Science Advances 5, eaav0655, (2019).'
  },
  {
    number: '189',
    authors: 'Z. Ge, J. Fu, M. Liu, S. Jiang, A. Andreoni, X. Zuo, Y. Liu, H. Yan*, C. Fan*',
    title: 'Constructing Submonolayer DNA Origami Scaffold on Gold Electrode for Wiring of Redox Enzymatic Cascade Pathways',
    journal: 'ACS Appl. Mater. Interfaces 11, 13881-13887 (2019).'
  },
  {
    number: '188',
    authors: 'Z. Ge, Z. Su, C. R. Simmons, J. Li, S. Jiang, W. Li, Y. Yang, Y. Liu*, W. Chiu, C. Fan*, H. Yan*',
    title: 'Redox Engineering of Cytochrome c using DNA Nanostructure-Based Charged Encapsulation and Spatial Control',
    journal: 'ACS Appl. Mater. Interfaces 11, 13874-13880 (2019).'
  }
];

const publications2018 = [
  {
    number: '187',
    authors: 'F. Hong, S. Jiang, X. Lan, R. Narayanan, P. Sulc, F. Zhang*, Y. Liu*, H. Yan*',
    title: 'Layered-Crossover Tiles with Precisely Tunable Angles for 2D and 3D DNA Crystal Engineering',
    journal: 'J. Am. Chem. Soc. 140, 14670-14676, (2018).'
  },
  {
    number: '186',
    authors: "X. Qi', F. Zhang'*, Z. Su', S. Jiang, D. Han, B. Ding, Y. Liu, W. Chiu, P. Yin, H. Yan*", 
    title: 'Programing Molecular Topologies from Single-stranded Nucleic Acids',
    journal: 'Nature Commun. 9, 4579, (2018).'
  },
  {
    number: '185',
    authors: "D. Jiang', Z. Ge', H. Im, C. England, D. Ni, J. Hu, L. Zhang, C. Kutyreff, Y. Yan, Y. Liu, S. Cho, J. Engle, J. Shi, P. Huang, C. Fan*, H. Yan*, W. Cai*", 
    title: 'DNA-origami nanostructures can exhibit preferential renal uptake and alleviate acute kidney injury',
    journal: 'Nature Biomed. Eng. 2, 865-877, (2018).'
  },
  {
    number: '184',
    authors: 'X. Lan*, T. Liu, Z. Wang, A. Govorov*, H. Yan, Y. Liu*',
    title: 'DNA-Guided Plasmonic Helix with Switchable Chirality',
    journal: 'J. Am. Chem. Soc. 140, 11763-11770, (2018).'
  },
  {
    number: '183',
    authors: "F. Zhang', C. Simmons', J. Gates, Y. Liu, H. Yan*", 
    title: 'Self-Assembly of a 3D DNA Crystal Structure with Rationally Designed Six-Fold Symmetry',
    journal: 'Angew Chem Int Ed. 57, 12504-12507, (2018).'
  },
  {
    number: '182',
    authors: "X. Liu', F. Zhang', X. Jing', M. Pan, P. Liu, W. Li, B. Zhu, J. Li, H. Chen, L. Wang, J. Lin, Y. Liu, D. Zhao, H. Yan* and C. Fan*", 
    title: 'Complex silica composite nanomaterials templated with DNA origami',
    journal: 'Nature 559, 593-598, (2018).'
  },
  {
    number: '181',
    authors: 'J. Li, A. Johnson-Buck, Y. Yang, W. Shih, H. Yan, N. Walter*',
    title: 'Exploring the speed limit of toehold exchange with a cartwheeling DNA acrobat',
    journal: 'Nature Nanotechnol. 13, 723-729, (2018).'
  },
  {
    number: '180',
    authors: 'S. Li, Q. Jiang, S. Liu, Y. Zhang, Y. Tian, C. Song, J. Wang, Y. Zou, G. J. Anderson, J. Han, Y. Chang, Y. Liu, C. Zhang, L. Chen, G. Zhou, G. Nie*, H. Yan*, B. Ding*, Y. Zhao*',
    title: 'A DNA nanorobot functions as a cancer therapeutic in response to a molecular trigger in vivo',
    journal: 'Nature Biotechnology 36, 258-264, (2018).'
  },
  {
    number: '179',
    authors: 'E. Boulais, N. Sawaya, R. Veneziano, A. Andreoni, J. Banal, T. Kondo, S. Mandal, S. Lin, G. Schlau-Cohen, N. Woodbury, H. Yan*, A. Aspuru-Guzik*, M. Bathe*',
    title: 'Programmed coherent coupling in a synthetic DNA-based excitonic circuit',
    journal: 'Nature Materals 17, 159-166, (2018).'
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
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2023</h2>
        {publications2023.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2022</h2>
        {publications2022.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2021</h2>
        {publications2021.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2020</h2>
        {publications2020.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2019</h2>
        {publications2019.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#232946', margin: '32px 0 16px 0', fontFamily: 'Inter, Arial, sans-serif' }}>2018</h2>
        {publications2018.map((item) => (
          <div key={item.number} style={{ marginBottom: '18px' }}>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', fontSize: '1.05rem', color: '#232946', fontWeight: 400, marginBottom: '2px', lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{item.number}.</span> {item.authors}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '2px', lineHeight: 1.5 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#232946', fontWeight: 400, fontSize: '1.05rem', marginBottom: '0px', lineHeight: 1.5 }}>
              {(() => {
                const journalText = item.journal.replace(/"/g, '');
                const journalNameMatch = journalText.match(/^([^,.]+)/);
                const journalName = journalNameMatch ? journalNameMatch[1] : '';
                const restText = journalName ? journalText.slice(journalName.length) : journalText;
                const doiRegex = /(DOI:\s*)?(10\.\d{4,9}\/[\-._;()\/:A-Z0-9]+|10\.\d{4,9}\.[\-._;()\/:A-Z0-9]+)/i;
                const doiMatch = restText.match(doiRegex);
                if (doiMatch) {
                  const prefix = doiMatch[1] ? doiMatch[1] : '';
                  const doi = doiMatch[2] ? doiMatch[2] : doiMatch[0].replace(/^DOI:\s*/, '');
                  const url = `https://doi.org/${doi}`;
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