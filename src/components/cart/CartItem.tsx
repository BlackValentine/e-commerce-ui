import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'store/features/cartSlice';

interface ICartItem {
  cartItem: any;
  index: number;
}

export default function CartItem({ cartItem, index }: ICartItem) {
  const dispatch = useDispatch();
  const handleRemoveProductCart = () => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="grid grid-cols-1/2 gap-4 mx-5 mb-5">
      <img className="w-full aspect-square rounded-lg object-cover" src={cartItem.image} alt="image" />
      <div className="flex flex-col justify-between py-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h6 className="font-bold text-primary-light">{cartItem.name}</h6>
            <p className="text-primary-light text-sm">
              {cartItem.size} / {cartItem.grindType}
            </p>
          </div>
          <h6 className="font-bold text-primary-light">${(cartItem.quantity * cartItem.price) / 100}.00</h6>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-grayish-orange">Quantity: {cartItem.quantity}</span>
          <button onClick={handleRemoveProductCart}>Remove</button>
        </div>
      </div>
    </div>
  );
}
