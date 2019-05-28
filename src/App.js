import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import TextField from './TextField';
import TextareaField from './TextareaField';

import './app.scss';

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
                <TextareaField
                  label="Company Address"
                  value="18 Woodfield Avenue
              Batley
              WF17 7EA
              "
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
