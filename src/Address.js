import React from 'react';

import './address.scss';

function Address({ label, value }) {
  return (
    <div className="address">
      <p class="label">{label}</p>
      <div class="content">{value}</div>
    </div>
  );
}

export default Address;
