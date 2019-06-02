import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
  margin-top: 5px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  white-space: pre-line;
  padding: 5px;
  width: 100%;
  border: ${props => (props.border ? '1px solid #000000' : '0')};
`;

const Label = styled.label`
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  text-transform: capitalize;
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  margin: 0;
`;

function MultilineTextField({ label, value, border }) {
  return (
    <div className="address">
      {label && <Label>{label}</Label>}
      <Content border>{value.split(',').map(item => `${item} \n`)}</Content>
    </div>
  );
}

export default MultilineTextField;
