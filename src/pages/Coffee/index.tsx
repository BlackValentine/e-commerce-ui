import ProductItem from 'components/gereral/ProductItem';
import { getAllProducts } from 'config/axios/product';
import React, { useEffect, useState } from 'react';

export default function Coffee() {
  const [productList, setProductList] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProductList(response?.data);
    })();
  }, []);
  return (
    <div className="max-w-7xl m-auto py-20">
      <h3 className="text-primary-dark text-4xl font-family-caver mb-4">Coffee</h3>
      <p className="max-w-2xl text-primary-light mb-6 text-sm">
        We craft an array of premium blends to suit any coffee lover&apos;s taste. When you purchase any of our coffee products, a portion of profits goes
        towards veteran charities and organisations to help veterans move forward.
      </p>
      <div className="grid grid-cols-4 gap-6">
        {productList.map((productItem: any) => {
          return <ProductItem key={productItem?.id} id={productItem?.id} image={productItem.image} name={productItem.name} />;
        })}
      </div>
    </div>
  );
}
