import React from 'react';

interface IProductItem {
  image: string;
  name: string;
}

export default function ProductItem({ image, name }: IProductItem) {
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <img className="w-full bg-gray-200 rounded-md overflow-hidden shadow-lg aspect-w-3 aspect-h-4" src={image} alt="" />
      <h3 className="text-eerie-black text-2xl uppercase font-family-justice">{name}</h3>
      <button className="text-primary-light text-sm">More info →</button>
    </div>
  );
}
