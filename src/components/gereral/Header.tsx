import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import Search from '../../assets/svg/search.svg';
import Account from '../../assets/svg/account.svg';
import Cart from '../../assets/svg/cart.svg';
import CartDrawer from './CartDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setIsOpenCart } from 'store/features/generalSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpenCart = useSelector((state: RootState) => state.general.isOpenCart);

  const headerList = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Coffee',
      path: '/coffee',
    },
    // {
    //   label: 'Shop',
    //   path: '/collections',
    // },
    {
      label: 'Wholesale',
      path: '/wholesale',
    },
    {
      label: 'Media',
      path: '/media',
    },
    {
      label: 'Partners',
      path: '/partners',
    },
  ];
  return (
    <>
      <CartDrawer isOpenCart={isOpenCart} />
      <div className="flex bg-primary-dark py-2 text-sm">
        <div className="grid grid-cols-3 max-w-7xl w-full mx-auto">
          <div></div>
          <p className="text-white text-center">Free Shipping on orders over $80</p>
          <div className="flex items-center justify-end gap-5 text-white">
            <button onClick={() => navigate('/account/register')}>Create an account</button>
            <button onClick={() => navigate('/account/login')} className="border-l border-solid border-grayish-orange pl-5">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-black">
        <div className="flex items-center justify-between max-w-7xl w-full mx-auto py-3">
          <div className="flex items-center">
            <div className="p-3 mr-6 bg-primary-dark ">
              <img className="h-6" src={Logo} alt="logo" />
            </div>
            <ul className="flex items-center gap-6 text-light-text">
              {headerList.map((headerItem: any, index: number) => {
                return (
                  <Link to={headerItem.path} key={index}>
                    <span className="hover:opacity-80">{headerItem.label}</span>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-5 pr-5">
              <img className="h-6 cursor-pointer hover:opacity-80" src={Search} alt="search" />
              <img onClick={() => navigate('/account/login')} className="h-6 cursor-pointer hover:opacity-80" src={Account} alt="account" />
            </div>
            <div className="flex items-center gap-2 border-l border-solid border-light-grayish-orange pl-5">
              <img onClick={() => dispatch(setIsOpenCart(true))} className="h-6 cursor-pointer hover:opacity-80" src={Cart} alt="cart" />
              <div className="flex bg-primary-light h-6 w-6 rounded">
                <span className="m-auto text-light-text text-xs">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
