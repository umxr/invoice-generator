import React from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
  .label {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    text-transform: capitalize;
    color: #000000;
    font-weight: bold;
    font-size: 18px;
  }
  .input {
    display: block;
    margin-top: 5px;
    border: 1px solid #000000;
    padding: 5px;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    color: #000000;
    width: 100%;
    font-size: 16px;
  }
`;

function TextField({ label, value }) {
  return (
    <Field>
      <label className="label">{label}</label>
      <input type="text" className="input" defaultValue={value} />
    </Field>
  );
}

export default TextField;
