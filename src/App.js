import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Form from './Form';
import PDF from './PDF';
import Home from './Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Home path="/" />
        <Form path="form/:routeId" />
        <PDF path="pdf/:routeId" />
      </Router>
    </Fragment>
  );
}

export default App;
