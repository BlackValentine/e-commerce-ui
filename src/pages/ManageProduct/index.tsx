import ProductDrawer from 'components/gereral/ProductDrawer';
import { getAllProducts } from 'config/axios/product';
import React, { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function ManageProduct() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProductList(response?.data);
    })();
  }, []);

  const handleAddNewProduct = () => {
    setIsOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <ProductDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex justify-end mb-4">
        <button onClick={handleAddNewProduct} className="w-40 h-10 bg-primary-light rounded text-white">
          Add new
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-solid border-light-grayish-orange">
            <th className="py-3">No</th>
            <th>Image</th>
            <th>Product name</th>
            <th>Roast</th>
            <th>Origin</th>
            <th>Taste</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((productItem, index: number) => {
            return (
              <tr key={index} className="text-center border-b border-solid border-light-grayish-orange">
                <td className="py-3">{index + 1}</td>
                <td className="flex">
                  <img className="w-8 m-auto aspect-3/4 object-cover" src={productItem.image} />
                </td>
                <td>{productItem.name}</td>
                <td>{productItem.roast}</td>
                <td>{productItem.origin}</td>
                <td>{productItem.taste}</td>
                <td>
                  <DeleteOutlined className="mr-3 cursor-pointer" />
                  <EditOutlined className="cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
