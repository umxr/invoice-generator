import React from 'react';

import './field.scss';

function TextField({ label, value }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input type="text" className="input" defaultValue={value} />
    </div>
  );
}

export default TextField;
