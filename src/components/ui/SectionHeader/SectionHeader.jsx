import React from 'react';
import './SectionHeader.css';

export function SectionHeader({ title, subtitle, actions }) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="section-actions">{actions}</div>}
    </div>
  );
}

export default SectionHeader;
