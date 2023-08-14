import React, { useState } from 'react';
import { Drawer } from 'antd';
import CustomInput from './CustomInput';
import UploadImage from './UploadImage';
import TextArea from 'antd/es/input/TextArea';
import { createNewProduct } from 'config/axios/product';
import { toast } from 'react-toastify';

interface IProductDrawer {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function ProductDrawer({ isOpen, setIsOpen }: IProductDrawer) {
  const INIT_PRODUCT_FIELD = {
    name: '',
    price: '',
    roast: '',
    taste: '',
    origin: '',
    description: '',
    image: '',
    categoryId: 1,
    inventory: [
      {
        size: '250g',
        quantity: 100,
      },
      {
        size: '500g',
        quantity: 100,
      },
      {
        size: '1kg',
        quantity: 100,
      },
    ],
  };
  const [productField, setProductField] = useState<any>({ ...INIT_PRODUCT_FIELD });
  const [previewImageURL, setPreviewImageURL] = useState('');

  const handleCancelDrawer = () => {
    setIsOpen(false);
  };

  const handleSaveDrawer = () => {
    (async () => {
      const response = await createNewProduct(productField);
      if (response?.status === 200) {
        toast.success('Create product successfully !!!');
        setIsOpen(false);
        setProductField({ ...INIT_PRODUCT_FIELD });
      }
    })();
  };

  const renderFooter = () => {
    return (
      <div className="flex justify-end gap-4">
        <button onClick={handleCancelDrawer} className="w-32 h-8 border border-solid border-primary-light rounded hover:opacity-80">
          Cancel
        </button>
        <button onClick={handleSaveDrawer} className="w-32 h-8 bg-primary-light text-white rounded hover:opacity-80">
          Save
        </button>
      </div>
    );
  };

  const handleChange = (label: string, e: any) => {
    const cloneData = { ...productField };
    cloneData[label] = e.target.value;
    setProductField(cloneData);
  };

  const handleChangeImage = async (e: any) => {
    const cloneData = { ...productField };
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      setPreviewImageURL(objectUrl);
      cloneData.image = file;
      setProductField(cloneData);
    }
  };

  return (
    <Drawer title="Add new product" placement="right" open={isOpen} footer={renderFooter()} width={'40%'} closeIcon={false}>
      <CustomInput title={'Product name'} className="mb-4" onChange={(e) => handleChange('name', e)} value={productField.name} />
      <CustomInput title={'Price'} type={'number'} className="mt-4" onChange={(e) => handleChange('price', e)} value={productField.price} />
      <div className="flex items-center gap-4 mt-4">
        <UploadImage previewImageURL={previewImageURL} handleChangeImage={handleChangeImage} />
        <div className="flex flex-col w-full gap-4">
          <CustomInput title={'Roast'} onChange={(e) => handleChange('roast', e)} value={productField.roast} />
          <CustomInput title={'Origin'} onChange={(e) => handleChange('origin', e)} value={productField.origin} />
          <CustomInput title={'Taste'} onChange={(e) => handleChange('taste', e)} value={productField.taste} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-primary-dark">Description</span>
        <TextArea
          className="outline-0 border-primary-light hover:border-primary-light focus:border-primary-light"
          autoSize={{ minRows: 5, maxRows: 5 }}
          onChange={(e) => handleChange('description', e)}
        />
      </div>
      <h6 className="mt-4 font-family-justice text-lg underline text-primary-light">INVENTORY:</h6>
      <div className="flex flex-col">
        <div className="flex items-end">
          <span className="min-w-[50px]">250g:</span>
          <CustomInput type={'number'} className="text-xs" />
        </div>
        <div className="flex items-end">
          <span className="min-w-[50px]">500g:</span>
          <CustomInput type={'number'} />
        </div>
        <div className="flex items-end">
          <span className="min-w-[50px]">1kg:</span>
          <CustomInput type={'number'} />
        </div>
      </div>
    </Drawer>
  );
}
