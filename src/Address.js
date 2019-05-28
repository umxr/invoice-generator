import React from 'react';

import './address.scss';

function Address({ label, value, border }) {
  const style = border ? { border: '1px solid #000000' } : null;
  return (
    <div className="address">
      <p class="label">{label}</p>
      <div class="content" style={style}>
        {value.split(',').map(item => {
          return `${item} \n`;
        })}
      </div>
    </div>
  );
}

export default Address;
