import React from 'react';
import { Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { setIsOpenCart } from 'store/features/generalSlice';
import CartItem from 'components/cart/CartItem';

interface ICartDrawer {
  isOpenCart: boolean;
}

export default function CartDrawer({ isOpenCart }: ICartDrawer) {
  const dispatch = useDispatch();

  const renderFooter = () => {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center justify-between w-full text-3xl font-family-caver mb-2">
          <h6 className="uppercase">Subtotal</h6>
          <span>$0.00</span>
        </div>
        <p className="text-sm text-sandstone mb-3">Shipping and discounts calculated at checkout.</p>
        <button className="bg-primary-light text-lg w-full py-3 text-white rounded mb-2">Checkout</button>
        <button onClick={() => dispatch(setIsOpenCart(false))}>or Continue shopping →</button>
      </div>
    );
  };
  return (
    <Drawer onClose={() => dispatch(setIsOpenCart(false))} title="Your Cart" placement="right" open={isOpenCart} footer={renderFooter()} width={'25%'}>
      <CartItem />
      <CartItem />
      <CartItem />
    </Drawer>
  );
}
