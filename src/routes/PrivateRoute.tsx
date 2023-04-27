import { Navigate, Outlet } from 'react-router-dom';

/*
// Essa é uma opção diferente para rotas privadas (com children)

interface MyRouteProps {
  children: ReactElement;
}

export function PrivateRouteWithChildren({ children }: MyRouteProps): JSX.Element {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/" />;
}
*/

export function PrivateRoute() {
  const auth = true;

  if (!auth) alert('Você não tem permissão para acessar essa página!');

  return auth ? <Outlet /> : <Navigate to="/" />;
}
