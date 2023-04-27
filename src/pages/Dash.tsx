import { Link } from 'react-router-dom';

import { TestYup } from './TestYup';

export const Dash = () => {
  return (
    <div>
      <Link to="/secret">Ir Para a Home</Link>
      <Link to="/test-yup">Ir Para o Teste Yup</Link>
    </div>
  );
};
