import React from 'react';
import MenuLayout from 'layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EnumPathRouters } from 'ts/enum/menu';
import Home from 'pages/Home';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MenuLayout />}>
      <Route path="/" element={<Navigate replace to={EnumPathRouters.home} />} />
      <Route path={EnumPathRouters.home} element={<Home />} />
    </Route>
  </Routes>
);

export default MainRoutes;
