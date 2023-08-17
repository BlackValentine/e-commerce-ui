import React from 'react';

interface ICartCheckoutItem {
  cartItem: any
}

export default function CartCheckoutItem({ cartItem }: ICartCheckoutItem) {

  return (
    <div className='flex items-center justify-between mb-4'>
      <div className="flex items-center gap-3">
        <img className='w-16 aspect-square object-cover rounded-lg' src={cartItem.image} alt="product" />
        <div className="flex flex-col">
          <h6 className='font-bold lowercase first-line:uppercase'>{cartItem.name}</h6>
          <span className='text-sm text-gray40'>{cartItem.size} / {cartItem.grindType}</span>
        </div>
      </div>
      <p>${(cartItem.price * cartItem.quantity / 100).toFixed(2)}</p>
    </div>
  );
}
