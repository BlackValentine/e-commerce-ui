import React from 'react';
import BigLogo from '../../assets/svg/bigLogo.svg';

export default function Footer() {
  return (
    <>
      <div className="flex bg-primary-dark py-20">
        <img className="h-60 w-auto mx-auto" src={BigLogo} alt="logo" />
      </div>
      <div className="max-w-7xl w-full mx-auto pt-7 pb-20">
        <div className="grid grid-cols-4 text-sm">
          <div className="flex flex-col items-start gap-6">
            <h6 className="text-3xl text-primary-dark font-family-caver">Products</h6>
            <p>Coffee</p>
            <p>Apparel</p>
            <p>Gifts & Accessories</p>
            <p>No One Left Behind</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h6 className="text-3xl text-primary-dark font-family-caver">Customer Info</h6>
            <p>My Account</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h6 className="text-3xl text-primary-dark font-family-caver">Company</h6>
            <p>About us</p>
            <p>Cafe Locations</p>
            <p>Wholesale Distribution</p>
          </div>
          <div className="flex flex-col items-start gap-6">
            <h6 className="text-3xl text-primary-dark font-family-caver">Policies</h6>
            <p>Shipping Policy</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
}
