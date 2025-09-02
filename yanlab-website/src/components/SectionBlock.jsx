import React from 'react';
import './SectionBlock.css';

const SectionBlock = ({ image, title, description, reverse, textAlign }) => (
  <div className={`section-block${reverse ? ' reverse' : ''}`}>
    <div className="section-image">
      <img src={image} alt={title} />
    </div>
    <div className="section-text">
      <h2>{title}</h2>
      <p style={{ textAlign: textAlign || 'center' }}>{description}</p>
    </div>
  </div>
);

export default SectionBlock;
