import ProductItem from 'components/gereral/ProductItem';
import React from 'react';
import Coffee1 from '../../assets/images/coffee1.webp';
import Coffee2 from '../../assets/images/coffee2.webp';
import Coffee3 from '../../assets/images/coffee3.webp';
import Coffee4 from '../../assets/images/coffee4.webp';

export default function Coffee() {
  return (
    <div className="max-w-7xl m-auto py-20">
      <h3 className="text-eerie-black text-4xl font-family-justice mb-4">Coffee</h3>
      <p className="max-w-2xl text-eerie-black mb-6 text-sm">
        We craft an array of premium blends to suit any coffee lover&apos;s taste. When you purchase any of our coffee products, a portion of profits goes
        towards veteran charities and organisations to help veterans move forward.
      </p>
      <div className="grid grid-cols-4 gap-6">
        <ProductItem image={Coffee1} name={'Two 14 armoured blend'} />
        <ProductItem image={Coffee2} name={'Two 14 lighthouse blend'} />
        <ProductItem image={Coffee3} name={'Two 14 premium blend'} />
        <ProductItem image={Coffee4} name={'The pineapple expresso'} />
      </div>
    </div>
  );
}
