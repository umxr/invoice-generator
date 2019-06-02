import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Form from './Form';
import PDF from './PDF';

function App() {
  return (
    <Fragment>
      <Router>
        <Form path="form" />
        <PDF path="pdf/:routeId" />
      </Router>
    </Fragment>
  );
}

export default App;
