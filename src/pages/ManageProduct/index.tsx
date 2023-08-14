import ProductDrawer from 'components/gereral/ProductDrawer';
import React, { useState } from 'react';

export default function ManageProduct() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAddNewProduct = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ProductDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <button onClick={handleAddNewProduct} className="w-40 h-12 bg-primary-light rounded text-white">
        Add new
      </button>
    </>
  );
}
