import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import TextField from './TextField';
import MultilineTextField from './MultilineTextField';
import Table from './Table';
import useRoute from './hooks/useRoute';

import './app.scss';

function PDF({ routeId }) {
  const { state } = useRoute();
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
                    readOnly
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
                    readOnly
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="VAT Registration Number"
                    value={state[routeId].vatRegNo}
                    readOnly
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Telephone"
                    value={state[routeId].telephone}
                    readOnly
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Fax" value={state[routeId].fax} readOnly />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Email"
                    value={state[routeId].email}
                    readOnly
                  />
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
                    readOnly
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Invoice Reference"
                    name="invoiceReference"
                    value={state[routeId].invoiceReference}
                    readOnly
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    name="invoiceDate"
                    label="Invoice Date"
                    value={state[routeId].invoiceDate}
                    readOnly
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Table routeId={routeId} />
        </Container>
      </div>
    );
  }
  return <p>No form found!</p>;
}

export default PDF;
