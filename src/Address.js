import React from 'react';

import './address.scss';

function Address({ label, value, border }) {
  return (
    <div className="address">
      <p class="label">{label}</p>
      <div class="content" style={{ border: '1px solid #000' }}>
        {value.split(',').map(item => {
          return `${item} \n`;
        })}
      </div>
    </div>
  );
}

export default Address;
