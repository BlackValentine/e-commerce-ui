import { getProductById } from 'config/axios/product';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();

  const [bagSizeChoice, setBagSizeChoice] = useState<string>('');
  const [grindTypeChoice, setGrindTypeChoice] = useState<string>('');
  const [productField, setProductField] = useState<any>({
    inventories: [],
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await getProductById(+id);
        if (response?.status === 200) {
          setProductField(response?.data);
        }
      }
    })();
  }, []);
  //
  const grindTypeList = ['Whole Beans', 'Chemex', 'Commercial', 'Domestic', 'Filter', 'Plunger', 'Stovetop', 'Turkish', 'V60'];
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-20 py-20">
        <div className="relative padding-top-full overflow-hidden rounded-lg">
          <img className="absolute inset-0 h-full w-full object-cover" src={productField?.image} alt="product" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-family-justice mb-1 text-6xl uppercase">{productField?.name}</h3>
          <span className="text-primary-light text-xs">Crafted by Two 14 Coffee Co.</span>
          <p className="text-sandstone text-sm my-4">{productField?.description}</p>
          <div className="flex border-t border-b border-solid border-black">
            <div className="w-1/2 flex flex-col py-5">
              <h6 className="text-eerie-black text-lg font-family-justice">ROAST</h6>
              <p className="text-sandstone text-sm">{productField?.roast}</p>
            </div>
            <div className="w-1/2 flex flex-col pl-5 border-l border-dashed border-black py-5">
              <h6 className="text-eerie-black text-lg font-family-justice">ORIGIN</h6>
              <p className="text-sandstone text-sm">{productField?.origin}</p>
            </div>
          </div>
          <div className="w-full flex flex-col py-5 border-b border-solid border-black">
            <h6 className="text-eerie-black text-lg font-family-justice">TASTE</h6>
            <p className="text-sandstone text-sm">{productField?.taste}</p>
          </div>

          <div className="my-5">
            <h6 className="mb-3 text-sm font-family-courier">BAG SIZE</h6>
            {productField?.inventories.map((inventoryItem: any) => {
              return (
                <button
                  onClick={() => setBagSizeChoice(inventoryItem.size)}
                  key={inventoryItem.id}
                  className={`px-5 py-1 mr-5 mb-3 rounded-full text-sm ${
                    bagSizeChoice === inventoryItem.size ? 'bg-primary-light text-white' : 'border border-solid border-light-grayish-orange'
                  }`}
                >
                  {inventoryItem.size}
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
            <span className="text-xl text-primary-light">${productField?.price / 100}.00</span>
          </div>

          <button className="w-full bg-primary-light text-white py-3 mt-5 rounded hover:opacity-80">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
