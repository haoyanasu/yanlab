import React from 'react';
import './SectionBlock.css';

const SectionBlock = ({ image, title, description, reverse = false }) => {
  return (
    <div className={`section-block${reverse ? ' reverse' : ''}`}>
      <div className="section-content">
        {!reverse ? (
          <>
            <div className="section-image">
              <img src={image} alt={title} />
            </div>
            <div className="section-text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </>
        ) : (
          <>
            <div className="section-text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="section-image">
              <img src={image} alt={title} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionBlock;