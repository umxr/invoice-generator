import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';

import MultilineTextField from './MultilineTextField';
import TextField from './TextField';

import data from './data';

const TableHeading = styled.p`
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 16px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`;

function Table() {
  return (
    <Row>
      <Col sm={12}>
        <Row>
          <Col sm={1}>
            <TableHeading>Qty</TableHeading>
          </Col>
          <Col sm={4}>
            <TableHeading>Description</TableHeading>
          </Col>
          <Col sm={2}>
            <TableHeading>Unit Price</TableHeading>
          </Col>
          <Col sm={2}>
            <TableHeading>VAT Rate</TableHeading>
          </Col>
          <Col sm={3}>
            <TableHeading>Total</TableHeading>
          </Col>
        </Row>
        {data.map(item => (
          <Row>
            <Col sm={1} />
            <Col sm={4}>
              <MultilineTextField value={item.description} border />
            </Col>
            <Col sm={2}>
              <TextField value={`£${item.unitPrice}`} />
            </Col>
            <Col sm={2}>
              <TextField value={`${item.VATRate}%`} />
            </Col>
            <Col sm={3}>
              <TextField value={`£${item.Total}`} />
            </Col>
          </Row>
        ))}
        <Row>
          <Col sm={1} />
        </Row>
      </Col>
    </Row>
  );
}

export default Table;
