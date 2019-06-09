import React, { Fragment } from 'react';
import { Row, Col } from 'react-grid-system';
import uuid from 'uuid/v4';
import styled from '@emotion/styled';

import MultilineTextField from './MultilineTextField';
import TextField from './TextField';
import useRoute from './hooks/useRoute';

const TableHeading = styled.p`
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 16px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 16px;
  margin: ${props => (props.table ? `5px 0 0 0` : `10px 0`)};
`;

function Table({ routeId, form }) {
  const { state, updateRow, createRow, deleteRow, updateRowInput } = useRoute();
  const data = state[routeId].table;

  function addRow() {
    const payload = {
      id: uuid(),
      qty: null,
      description: 'Line 1, Line 2, Line 3',
      unitPrice: 0,
      VATRate: 0,
      Total: 0,
    };
    createRow(routeId, payload);
  }

  return (
    <Row>
      {form && (
        <Col sm={12}>
          <Button onClick={addRow} type="submit">
            Add Row
          </Button>
        </Col>
      )}
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
        {data.map(item => {
          const rowData = { ...item };
          return (
            <Row key={item.id}>
              <Col sm={1} />
              <Col sm={form ? 3 : 4}>
                <MultilineTextField value={item.description} border />
              </Col>
              <Col sm={2}>
                <TextField
                  value={`£${item.unitPrice ? item.unitPrice : 0}`}
                  handleChange={e => updateRowInput(e, routeId, item.id)}
                  name="unitPrice"
                />
              </Col>
              <Col sm={2}>
                <TextField
                  value={`${item.VATRate ? item.VATRate : 0}%`}
                  handleChange={e => updateRowInput(e, routeId, item.id)}
                  name="VATRate"
                />
              </Col>
              <Col sm={form ? 2 : 3}>
                <TextField
                  value={`£${item.Total ? item.Total : 0}`}
                  handleChange={e => updateRowInput(e, routeId, item.id)}
                  name="Total"
                />
              </Col>
              {form && (
                <Fragment>
                  <Col sm={1}>
                    <Button
                      onClick={() => deleteRow(routeId, item.id)}
                      type="button"
                      table
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col sm={1}>
                    <Button
                      onClick={() => updateRow(routeId, rowData)}
                      type="button"
                      table
                    >
                      Update
                    </Button>
                  </Col>
                </Fragment>
              )}
            </Row>
          );
        })}
      </Col>
    </Row>
  );
}

export default Table;
