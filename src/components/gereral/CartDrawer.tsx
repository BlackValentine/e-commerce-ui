import React from 'react';
import { Drawer } from 'antd';

export default function CartDrawer() {
  const renderFooter = () => {
    return (
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center justify-between w-full text-3xl font-family-justice mb-2">
          <h6 className="uppercase">Subtotal</h6>
          <span>$0.00</span>
        </div>
        <p className="text-sm text-sandstone mb-3">Shipping and discounts calculated at checkout.</p>
        <button className="bg-primary-light text-lg w-full py-3 text-white rounded mb-2">Checkout</button>
        <button>or Continue shopping →</button>
      </div>
    );
  };
  return (
    <Drawer title="Your Cart" placement="right" open={false} footer={renderFooter()} width={'30%'}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
