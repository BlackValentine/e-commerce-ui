import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IProductItem {
  image: string;
  name: string;
  id: number;
}

export default function ProductItem({ image, name, id }: IProductItem) {
  const navigator = useNavigate();
  const handleDetailProduct = (id: any) => {
    navigator(`/products/${id}`);
  };
  return (
    <div className="flex flex-col items-center gap-2 relative">
      <img
        onClick={() => handleDetailProduct(id)}
        className="bg-gray-200 rounded-md overflow-hidden shadow-lg aspect-3/4 object-cover cursor-pointer hover:opacity-80"
        src={image}
        alt="product"
      />
      <h3 className="text-eerie-black text-2xl uppercase font-family-justice">{name}</h3>
      <button onClick={() => handleDetailProduct(id)} className="text-primary-light text-sm">
        More info →
      </button>
    </div>
  );
}
