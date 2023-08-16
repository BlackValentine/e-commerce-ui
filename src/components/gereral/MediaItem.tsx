import React from 'react';

interface IMediaItem {
  image: string;
  name: string;
  description: string;
}

export default function MediaItem({ image, name, description }: IMediaItem) {
  return (
    <div>
      <div className="relative h-56 shadow-lg">
        <img className="absolute inset-0 object-cover h-full w-full" src={image} alt="partner" />
      </div>
      <h6 className="mt-4 mb-2 font-family-caver text-2xl">{name}</h6>
      <p className="text-eerie-black text-sm mb-4">08 Apr 2020</p>
      <p className="text-eerie-black text-sm mb-4">{description}</p>
      <button className="text-eerie-black text-sm underline">More</button>
    </div>
  );
}
