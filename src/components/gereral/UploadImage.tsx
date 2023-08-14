import React from 'react';

interface IUploadImage {
  handleChangeImage: (e: any) => void;
  previewImageURL: string;
}

export default function UploadImage({ handleChangeImage, previewImageURL }: IUploadImage) {
  return (
    <>
      <div className="mr-5 mb-5">
        <input id="blogImg" type="file" hidden onChange={(e) => handleChangeImage(e)} />
        <label
          htmlFor="blogImg"
          className="flex text-center justify-center py-2.5 px-5 w-48 h-48 bg-white rounded-lg text-pastel-red text-base border border-solid border-pastel-red bg-center dark:border-spanish-gray dark:bg-very-dark-gray dark:text-white hover:dark:bg-eerie-black focus:dark:bg-eerie-black bg-no-repeat bg-contain cursor-pointer transition-mode"
          style={{ backgroundImage: `url(${previewImageURL})` }}
        >
          <span className="m-auto">{previewImageURL === '' ? 'Thêm ảnh' : ''}</span>
        </label>
      </div>
    </>
  );
}
