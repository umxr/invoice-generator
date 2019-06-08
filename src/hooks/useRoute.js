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
    const table = [...state[routeId].table, payload];
    setState(state => ({
      ...state,
      [routeId]: {
        ...state[routeId],
        table,
      },
    }));
  }
  return {
    handleChange,
    createRow,
    state,
  };
};

export default useRoute;
