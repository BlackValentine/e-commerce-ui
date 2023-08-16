import React, { useEffect, useState } from 'react';
import BigLogo from '../../assets/svg/bigLogo.svg';
import Image1 from '../../assets/images/image1.webp';
import ProductItem from 'components/gereral/ProductItem';
import Background1 from '../../assets/images/background1.jpg';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from 'config/axios/product';

export default function Home() {
  const navigate = useNavigate();

  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProductList(response?.data);
    })();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center bg-primary-dark gap-3">
          <img className="w-[360px] py-20" src={BigLogo} alt="logo" />
        </div>
        <div className="relative h-full bg-gray-900 bg-opacity-75">
          <img className="absolute h-full overflow-hidden object-cover w-full" src={Image1} alt="" />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto py-24">
        <div className="flex items-center justify-between">
          <h3 className="text-eerie-black text-4xl font-family-caver">OUR COFFEE BLENDS</h3>
          <button onClick={() => navigate('/coffee')} className="text-primary-light text-sm">
            View all products →
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-8">
          {productList?.slice(0, 4).map((productItem) => {
            return (
              <ProductItem key={productItem.id} image={productItem.image} name={productItem.name} id={productItem.id} />
            );
          })}
        </div>
      </div>
      <div className="relative bg-green-800 lg:py-32 px-6 py-16 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img className="w-full h-full object-top object-cover" src={Background1} alt="" />
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="relative max-w-5xl mx-auto flex flex-col items-center lg:text-center">
          <h2 className="text-8xl text-light-text font-family-caver">Helping Veterans Move Forward</h2>
          <p className="text-xl text-light-text mt-4">
            Two 14 Coffee Companys beginnings are founded in the history of the 2nd/14th Light Horse Regiment (Queensland Mounted Infantry). We are a proud
            Australian small business, serving local communities and giving back to support Australian military veterans and their families.
          </p>
          <button className="mt-8 bg-white px-8 py-3 rounded-md font-family-courier hover:opacity-80">Read our story</button>
        </div>
      </div>
    </>
  );
}
