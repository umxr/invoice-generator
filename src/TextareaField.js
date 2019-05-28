import React from 'react';

import './textarea-field.scss';

function TextareaField({ label, value }) {
  return (
    <div className="textfield">
      <label className="label">{label}</label>
      <textarea rows="3" className="textarea" defaultValue={value} />
    </div>
  );
}

export default TextareaField;
