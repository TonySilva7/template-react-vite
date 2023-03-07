import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dash } from '../pages/Dash';
import { Home } from '../pages/home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
