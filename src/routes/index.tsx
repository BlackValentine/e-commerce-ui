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
import ManageProduct from 'pages/ManageProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from 'pages/Login/Register';
import Login from 'pages/Login/Login';
import ResetPassword from 'pages/Login/ResetPassword';
import Checkout from 'pages/Checkout';

const MainRoutes = () => (
  <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="/" element={<Navigate replace to={EnumPathRouters.home} />} />
        <Route path={EnumPathRouters.home} element={<Home />} />
        <Route path={EnumPathRouters.coffee} element={<Coffee />} />
        <Route path={EnumPathRouters.collections} element={<Shop />} />
        <Route path={EnumPathRouters.wholesale} element={<WholeSale />} />
        <Route path={EnumPathRouters.media} element={<Media />} />
        <Route path={EnumPathRouters.partners} element={<Partners />} />
        <Route path={`${EnumPathRouters.products}/:id`} element={<ProductDetail />} />
        <Route path={'/checkout'} element={<Checkout />} />
        <Route path={'/admin/manage'} element={<ManageProduct />} />
        <Route path={'/account/register'} element={<Register />} />
        <Route path={'/account/login'} element={<Login />} />
        <Route path={'/account/reset-password'} element={<ResetPassword />} />
      </Route>
    </Routes>
  </>
);

export default MainRoutes;
