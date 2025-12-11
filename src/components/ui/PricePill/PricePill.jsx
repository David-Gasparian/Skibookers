import React from 'react';
import './PricePill.css';

export function PricePill({ label = 'Total', value }) {
  return (
    <span className="price-pill">
      {label && <span className="label">{label}</span>}
      <span className="value">{value}</span>
    </span>
  );
}

export default PricePill;
