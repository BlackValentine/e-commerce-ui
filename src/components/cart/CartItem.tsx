import React from 'react';
import Coffee1 from '../../assets/images/coffee1.webp';

export default function CartItem() {
  return (
    <div className='grid grid-cols-1/2 gap-4 mx-5 mb-5'>
      <img className='w-full aspect-square rounded-lg object-cover' src={Coffee1} alt="image" />
      <div className="flex flex-col justify-between py-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h6 className='font-bold text-primary-light'>TWO 14 LIGHTHORSE BLEND</h6>
            <p className='text-primary-light text-sm'>1kg / Whole Beans</p>
          </div>
          <h6 className='font-bold text-primary-light'>$39.00</h6>
        </div>
        <div className="flex justify-between">
          <span className='text-sm text-grayish-orange'>Quantity: 1</span>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}
