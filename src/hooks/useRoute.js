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
  return {
    handleChange,
    state,
  };
};

export default useRoute;
