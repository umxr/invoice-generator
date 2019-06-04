import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import TextField from './TextField';
import MultilineTextField from './MultilineTextField';
import Table from './Table';
import useRoute from './useRoute';

import './app.scss';

function PDF({ routeId }) {
  const { state, handleChange } = useRoute();
  const data = state[routeId];
  if (data) {
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
                  <TextField label="Company Name" value={data.companyName} />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Company Address"
                    value={data.companyAddress}
                    border
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Invoice Contact"
                    value={data.invoiceContact}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="VAT Registration Number"
                    value={data.vatRegNo}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Telephone" value={data.telephone} />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Fax" value={data.fax} />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField label="Email" value={data.email} />
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Invoice to"
                    value={data.invoiceTo}
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <MultilineTextField
                    label="Goods/Service Delivered To"
                    value={data.DeliveredTo}
                    border
                  />
                </Col>
              </Row>
              <Row className="custom-row">
                <Col sm={12}>
                  <TextField
                    label="Purchase order number"
                    value={data.purchaseOrderNumber}
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
                    value={data.invoiceReference}
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
                    value={data.invoiceDate}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Table />
        </Container>
      </div>
    );
  }
  return <p>No form found!</p>;
}

export default PDF;
