import React from 'react';

interface IPartnerItem {
  image: string;
  name: string;
  description: string;
}

export default function PartnerItem({ image, name, description }: IPartnerItem) {
  return (
    <div>
      <div className="relative h-56 shadow-lg">
        <img className="absolute inset-0 object-cover h-full w-full" src={image} alt="partner" />
      </div>
      <h6 className="my-4 font-family-caver text-2xl">{name}</h6>
      <p className="text-eerie-black text-sm">{description}</p>
    </div>
  );
}
