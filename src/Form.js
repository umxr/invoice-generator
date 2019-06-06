import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import useRoute from './hooks/useRoute';
import TextField from './TextField';

function Form({ routeId }) {
  const { state, handleChange } = useRoute();
  return (
    <Container>
      <Row className="custom-row">
        <Col sm={6}>
          <h1 className="page-title">Invoice Form</h1>
        </Col>
      </Row>
      <Row className="custom-row">
        <Col sm={6}>
          <TextField
            routeId={routeId}
            handleChange={handleChange}
            label="Invoice Reference"
            name="invoiceReference"
            value={state[routeId].invoiceReference}
          />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col sm={6}>
          <TextField
            routeId={routeId}
            handleChange={handleChange}
            name="invoiceDate"
            label="Invoice Date"
            value={state[routeId].invoiceDate}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
