import CartCheckoutItem from 'components/cart/CartCheckoutItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import PaymentForm from 'components/payment/PaymentForm';

export default function Checkout() {
  const cartRedux = useSelector((state: RootState) => state.cart.cart);

  const subTotal = cartRedux.reduce((total: number, item: any) => +(item.quantity) * +item.price + +total, 0);

  return (
    <div className='grid grid-cols-4/3 max-w-7xl mx-auto h-screen'>
      <div className="py-10 pr-5 pl-10">
        <PaymentForm total={(subTotal / 100 + 7.24)} />
      </div>
      <div className="py-10 pl-5 pr-10 border-l border-solid border-general-border">
        {cartRedux.map((cartItem, index: number) => {
          return (
            <CartCheckoutItem key={index} cartItem={cartItem} />
          );
        })}
        <div className="flex items-center gap-3 my-6">
          <input className='border border-general-border border-solid p-3 text-sm rounded w-full outline-0' type="text" placeholder='Discount code' />
          <button className='border border-general-border border-solid bg-gray93 rounded py-3 px-6 text-sm hover:opacity-80'>Apply</button>
        </div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>Subtotal</span>
          <span>${(subTotal / 100).toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span>Shipping</span>
          <span>$7.24</span>
        </div>
        <div className="flex items-center justify-between font-bold">
          <span>Total</span>
          <span>${(subTotal / 100 + 7.24).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
