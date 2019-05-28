import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import TextField from './TextField';
import TextareaField from './TextareaField';

import './app.scss';
import Address from './Address';

function App() {
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
                  value="H Gora T/A Areema Travel"
                />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <Address
                  label="Company Address"
                  value="18 Woodfield Avenue,
                  Batley,
                  WF17 7EA,
                  "
                  border
                />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Invoice Contact" value="Hussain Gora" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="VAT Registration Number" value="993652180" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Telephone" value="01924 503737" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Fax" value="01924 503737" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Email" value="Areematravel@virginmedia.com" />
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <Row className="custom-row">
              <Col sm={12}>
                <Address
                  label="Invoice to"
                  value="Marketplace Invoices,
                  Kirklees Council,
                  4th floor, Civic Centre 1,
                  High Street, Huddersfield,
                  HD1 2PW
                  "
                />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextareaField
                  label="Goods/Service Delivered To"
                  value="School Transport,
                  Route 006
                  "
                />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Purchase order number" value="3300173954" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Invoice Reference" value="111" />
              </Col>
            </Row>
            <Row className="custom-row">
              <Col sm={12}>
                <TextField label="Invoice Date" value="11/11/1111" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
