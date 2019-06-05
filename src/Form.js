import React from 'react';
import useRoute from './hooks/useRoute';

function Form() {
  const { state, handleChange } = useRoute();
  return <form />;
}

export default Form;
