import React from 'react';
import CoffeeCollection from '../../assets/images/CoffeeCollection.webp';
import FashionCollection from '../../assets/images/FashionCollection.webp';
import GiftCollection from '../../assets/images/GiftCollection.webp';
import SyrupsCollection from '../../assets/images/SyrupsCollection.webp';

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h3 className="text-eerie-black text-4xl font-family-caver mb-6">Collections</h3>
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col items-center">
          <div className="h-96 rounded overflow-hidden shadow-lg cursor-pointer hover:opacity-80">
            <img className="w-full h-full object-cover" src={CoffeeCollection} alt="coffee" />
          </div>
          <h6 className="font-family-caver text-2xl mt-4 mb-2">COFFEE</h6>
          <button className="text-sm text-primary-light hover:opacity-80">More info →</button>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-96 rounded overflow-hidden shadow-lg cursor-pointer hover:opacity-80">
            <img className="w-full h-full object-cover" src={FashionCollection} alt="coffee" />
          </div>
          <h6 className="font-family-caver text-2xl mt-4 mb-2">APPAREL</h6>
          <button className="text-sm text-primary-light hover:opacity-80">More info →</button>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-96 rounded overflow-hidden shadow-lg cursor-pointer hover:opacity-80">
            <img className="w-full h-full object-cover" src={GiftCollection} alt="coffee" />
          </div>
          <h6 className="font-family-caver text-2xl mt-4 mb-2">GIFTS & ACCESSORIES</h6>
          <button className="text-sm text-primary-light hover:opacity-80">More info →</button>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-96 rounded overflow-hidden shadow-lg cursor-pointer hover:opacity-80">
            <img className="w-full h-full object-cover" src={SyrupsCollection} alt="coffee" />
          </div>
          <h6 className="font-family-caver text-2xl mt-4 mb-2">SYRUPS</h6>
          <button className="text-sm text-primary-light hover:opacity-80">More info →</button>
        </div>
      </div>
    </div>
  );
}
