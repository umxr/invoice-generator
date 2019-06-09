import { useContext } from 'react';
import { RouteContext } from '../context';

const useRoute = () => {
  const [state, setState] = useContext(RouteContext);
  function handleChange(e, routeId) {
    const { name, value } = e.target;
    setState(state => ({
      ...state,
      [routeId]: { ...state[routeId], [name]: value },
    }));
  }
  function createRow(routeId, payload) {
    setState(state => ({
      ...state,
      [routeId]: {
        ...state[routeId],
        table: [...state[routeId].table, payload],
      },
    }));
  }
  function updateRow(routeId, payload) {
    const updatedRows = state[routeId].table.map(item =>
      item.id === payload.id ? { ...item, ...payload } : item
    );
    setState(state => ({
      ...state,
      [routeId]: {
        ...state[routeId],
        table: updatedRows,
      },
    }));
  }
  function deleteRow(routeId, id) {
    const updatedRows = state[routeId].table.filter(item => item.id !== id);
    setState(state => ({
      ...state,
      [routeId]: {
        ...state[routeId],
        table: updatedRows,
      },
    }));
  }
  function updateRowInput(e, routeId, id) {
    const { name, value } = e.target;
    let formattedValue;
    if (value.includes('£')) {
      formattedValue = parseFloat(value.replace('£', ''));
    } else if (value.includes('%')) {
      formattedValue = parseFloat(value.replace('%', ''));
    }
    const updatedRows = state[routeId].table.map(el =>
      el.id === id ? { ...el, [name]: formattedValue } : el
    );

    setState(state => ({
      ...state,
      [routeId]: {
        ...state[routeId],
        table: updatedRows,
      },
    }));
  }

  return {
    handleChange,
    createRow,
    updateRow,
    deleteRow,
    updateRowInput,
    state,
  };
};

export default useRoute;
