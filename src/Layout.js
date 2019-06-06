import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Layout({ children }) {
  return (
    <Fragment>
      <Container id="nav-container">
        <Row>
          <Col sm={6}>
            <Nav>
              <NavItem>
                <Link to="/pdf/R204">Route 204</Link>
              </NavItem>
              <NavItem>
                <Link to="/pdf/R208">Route 208</Link>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={6}>
            <Nav>
              <NavItem>
                <Link to="/form/R204">Form 204</Link>
              </NavItem>
              <NavItem>
                <Link to="/form/R208">Form 208</Link>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
      {children}
    </Fragment>
  );
}

export default Layout;
