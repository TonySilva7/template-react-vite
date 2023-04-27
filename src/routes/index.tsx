import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dash } from '../pages/Dash';
import { Home } from '../pages/Home';
import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/secret" element={<PrivateRoute />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};
