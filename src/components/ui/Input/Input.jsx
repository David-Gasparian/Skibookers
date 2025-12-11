import React from 'react';
import './Input.css';

export function Input({ label, hint, id, ...rest }) {
  return (
    <label className="form-control" htmlFor={id}>
      {label && <span>{label}</span>}
      <input id={id} {...rest} />
      {hint && <span className="form-hint">{hint}</span>}
    </label>
  );
}

export default Input;
