import React, { Fragment, useState } from 'react';
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
  const { state, createRow } = useRoute();
  const data = state[routeId].table;
  const [localState, localSetState] = useState(data);

  function addRow() {
    const a = {
      id: uuid(),
    };
    localSetState(state => [...state, a]);
  }

  function rowInputChange(e, id) {
    const { name, value } = e.target;
    const updatedRows = localState.map(el =>
      el.id === id ? { ...el, [name]: value } : el
    );

    localSetState(state => updatedRows);
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
        {localState.map(item => (
          <Row key={item.id}>
            <Col sm={1} />
            <Col sm={form ? 3 : 4}>
              <MultilineTextField value={item.description} border />
            </Col>
            <Col sm={2}>
              <TextField
                value={`£${item.unitPrice ? item.unitPrice : 0}`}
                handleChange={e => rowInputChange(e, item.id)}
                name="unitPrice"
              />
            </Col>
            <Col sm={2}>
              <TextField
                value={`${item.VATRate ? item.VATRate : 0}%`}
                handleChange={e => rowInputChange(e, item.id)}
                name="VATRate"
              />
            </Col>
            <Col sm={form ? 2 : 3}>
              <TextField
                value={`£${item.Total ? item.Total : 0}`}
                handleChange={e => rowInputChange(e, item.id)}
                name="Total"
              />
            </Col>
            {form && (
              <Fragment>
                <Col sm={1}>
                  <Button type="button" table>
                    Delete
                  </Button>
                </Col>
                <Col sm={1}>
                  <Button type="button" table>
                    Update
                  </Button>
                </Col>
              </Fragment>
            )}
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default Table;
