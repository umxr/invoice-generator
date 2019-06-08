import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  display: block;
  margin-top: 5px;
  border: 1px solid #000000;
  padding: 5px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  color: #000000;
  width: 100%;
  font-size: 16px;
`;

const Label = styled.p`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  text-transform: capitalize;
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

function TextField({ label, value, name, handleChange, routeId, readOnly }) {
  return (
    <Fragment>
      {label && <Label className="label">{label}</Label>}
      <Input
        type="text"
        className="input"
        {...!readOnly && { onChange: e => handleChange(e, routeId) }}
        name={name}
        {...(readOnly ? { value } : { defaultValue: value })}
        {...readOnly && { readOnly: true }}
      />
    </Fragment>
  );
}

export default TextField;
