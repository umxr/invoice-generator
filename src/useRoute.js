import { useContext } from 'react';
import { RouteContext } from './Context';

const useRoute = () => {
  const [state, setState] = useContext(RouteContext);
  return {
    state,
  };
};

export default useRoute;
