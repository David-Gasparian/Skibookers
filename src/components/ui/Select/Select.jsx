import React from 'react';
import './Select.css';

export function Select({ label, hint, id, options = [], ...rest }) {
  return (
    <label className="form-control" htmlFor={id}>
      {label && <span>{label}</span>}
      <select id={id} {...rest}>
        {options.map((option) => (
          <option key={option.value ?? option} value={option.value ?? option}>
            {option.label ?? option}
          </option>
        ))}
      </select>
      {hint && <span className="form-hint">{hint}</span>}
    </label>
  );
}

export default Select;
