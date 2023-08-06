import React from 'react';
import MenuLayout from 'layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { EnumPathRouters } from 'ts/enum/menu';
import Home from 'pages/Home';
import Coffee from 'pages/Coffee';
import Shop from 'pages/Shop';
import WholeSale from 'pages/WholeSale';
import Media from 'pages/Media';
import Partners from 'pages/Partners';
import ProductDetail from 'pages/Detail';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MenuLayout />}>
      <Route path="/" element={<Navigate replace to={EnumPathRouters.home} />} />
      <Route path={EnumPathRouters.home} element={<Home />} />
      <Route path={EnumPathRouters.coffee} element={<Coffee />} />
      <Route path={EnumPathRouters.shop} element={<Shop />} />
      <Route path={EnumPathRouters.wholesale} element={<WholeSale />} />
      <Route path={EnumPathRouters.media} element={<Media />} />
      <Route path={EnumPathRouters.partners} element={<Partners />} />
      <Route path={EnumPathRouters.products} element={<ProductDetail />} />
    </Route>
  </Routes>
);

export default MainRoutes;
