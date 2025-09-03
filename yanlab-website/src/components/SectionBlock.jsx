import React from 'react';

const SectionBlock = ({ title, children }) => {
  return (
    <section style={{ padding: '1rem', marginBottom: '1.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      {title && <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{title}</h2>}
      <div>{children}</div>
    </section>
  );
};

export default SectionBlock;
