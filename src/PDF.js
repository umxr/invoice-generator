import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TextField from './TextField';
import MultilineTextField from './MultilineTextField';
import Table from './Table';
import useRoute from './hooks/useRoute';

import './app.scss';

function PDF({ routeId }) {
  const { state, handleChange } = useRoute();
  if (Object.keys(state).length > 0) {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col sm={6}>
              <Row className="custom-row">
                <Col sm={12}>
                  <h1 className="page-title">Invoice</h1>
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Company Name"
                    value={state[routeId].companyName}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Company Address"
                    value={state[routeId].companyAddress}
                    border
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Invoice Contact"
                    value={state[routeId].invoiceContact}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="VAT Registration Number"
                    value={state[routeId].vatRegNo}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Telephone"
                    value={state[routeId].telephone}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Fax" value={state[routeId].fax} />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Email" value={state[routeId].email} />
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Invoice to"
                    value={state[routeId].invoiceTo}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Goods/Service Delivered To"
                    value={state[routeId].DeliveredTo}
                    border
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Purchase order number"
                    value={state[routeId].purchaseOrderNumber}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
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
                <Col sm={12}>
                  <TextField
                    routeId={routeId}
                    handleChange={handleChange}
                    name="invoiceDate"
                    label="Invoice Date"
                    value={state[routeId].invoiceDate}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Table data={state[routeId].table} />
        </Container>
      </div>
    );
  }
  return <p>No form found!</p>;
}

export default PDF;
