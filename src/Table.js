import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';

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
        {/* Loop Here */}
        <Row>
          <Col sm={1} />
        </Row>
      </Col>
    </Row>
  );
}

export default Table;
