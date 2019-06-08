import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';

import useRoute from './hooks/useRoute';
import TextField from './TextField';
import Layout from './Layout';
import Table from './Table';

const FormRow = styled(Row)`
  margin-bottom: 10px;
  &:last-child,
  &:last-of-type {
    margin-bottom: 0;
  }
`;

function Form({ routeId }) {
  const { state, handleChange } = useRoute();
  return (
    <Layout>
      <Container>
        <FormRow className="custom-row">
          <Col sm={6}>
            <h1 className="page-title">Invoice Form</h1>
          </Col>
        </FormRow>
        <FormRow className="custom-row">
          <Col sm={6}>
            <TextField
              routeId={routeId}
              handleChange={handleChange}
              label="Invoice Reference"
              name="invoiceReference"
              value={state[routeId].invoiceReference}
            />
          </Col>
        </FormRow>
        <FormRow className="custom-row">
          <Col sm={6}>
            <TextField
              routeId={routeId}
              handleChange={handleChange}
              name="invoiceDate"
              label="Invoice Date"
              value={state[routeId].invoiceDate}
            />
          </Col>
        </FormRow>
        <Table form routeId={routeId} />
      </Container>
    </Layout>
  );
}

export default Form;
