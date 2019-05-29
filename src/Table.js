import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';

const TableWrapper = styled(Row)``;

function Table() {
  return (
    <TableWrapper>
      <Col sm={12}>
        <Row>
          <Col sm={1} />
          <Col sm={4} />
          <Col sm={2} />
          <Col sm={2} />
          <Col sm={3} />
        </Row>
      </Col>
    </TableWrapper>
  );
}

export default Table;
