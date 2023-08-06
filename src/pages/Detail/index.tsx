import React, { useState } from 'react';
import Coffee1 from '../../assets/images/coffee1.webp';

export default function ProductDetail() {
  const [bagSizeChoice, setBagSizeChoice] = useState<string>('');
  const [grindTypeChoice, setGrindTypeChoice] = useState<string>('');

  const bagSizeList = ['1kg', '500g', '250g'];
  const grindTypeList = ['Whole Beans', 'Chemex', 'Commercial', 'Domestic', 'Filter', 'Plunger', 'Stovetop', 'Turkish', 'V60'];
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-20 py-20">
        <div className="relative padding-top-full overflow-hidden rounded-lg">
          <img className="absolute inset-0 h-full w-full object-cover" src={Coffee1} alt="product" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-family-justice mb-1 text-6xl uppercase">TWO 14 ARMOURED BLEND</h3>
          <span className="text-primary-light text-xs">Crafted by Two 14 Coffee Co.</span>
          <p className="text-sandstone text-sm my-4">
            Bold and intense, with notes of dark chocolate and Brazil nuts. This coffee cuts fantastically well through milk and finishes with a long toffee
            sweetness. Not for the faint of heart.
          </p>
          <div className="flex border-t border-b border-solid border-black">
            <div className="w-1/2 flex flex-col py-5">
              <h6 className="text-eerie-black text-lg font-family-justice">ROAST</h6>
              <p className="text-sandstone text-sm">Dark</p>
            </div>
            <div className="w-1/2 flex flex-col pl-5 border-l border-dashed border-black py-5">
              <h6 className="text-eerie-black text-lg font-family-justice">ORIGIN</h6>
              <p className="text-sandstone text-sm">South America, Africa, India</p>
            </div>
          </div>
          <div className="w-full flex flex-col py-5 border-b border-solid border-black">
            <h6 className="text-eerie-black text-lg font-family-justice">TASTE</h6>
            <p className="text-sandstone text-sm">Toffee, Dark Chocolate, Spice</p>
          </div>

          <div className="my-5">
            <h6 className="mb-3 text-sm font-family-courier">BAG SIZE</h6>
            {bagSizeList.map((bagSizeItem, index) => {
              return (
                <button
                  onClick={() => setBagSizeChoice(bagSizeItem)}
                  key={index}
                  className={`px-5 py-1 mr-5 mb-3 rounded-full text-sm ${
                    bagSizeChoice === bagSizeItem ? 'bg-primary-light text-white' : 'border border-solid border-light-grayish-orange'
                  }`}
                >
                  {bagSizeItem}
                </button>
              );
            })}
          </div>

          <div>
            <h6 className="mb-3 text-sm font-family-courier">GRIND</h6>
            {grindTypeList.map((grindTypeItem, index) => {
              return (
                <button
                  onClick={() => setGrindTypeChoice(grindTypeItem)}
                  key={index}
                  className={`px-5 py-1 mr-5 mb-3 rounded-full text-sm border border-solid ${
                    grindTypeChoice === grindTypeItem ? 'bg-primary-light text-white border-primary-light' : 'border-light-grayish-orange'
                  }`}
                >
                  {grindTypeItem}
                </button>
              );
            })}
          </div>

          <div className="flex items-end gap-10 mt-5">
            <div className="flex flex-col">
              <span className="mb-1 text-sm font-family-courier">Quantity</span>
              <input className="border border-solid border-light-grayish-orange outline-none px-2 py-2 text-sm rounded" type="number" />
            </div>
            <span className="text-xl text-primary-light">$30.00</span>
          </div>

          <button className="w-full bg-primary-light text-white py-3 mt-5 rounded hover:opacity-80">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
