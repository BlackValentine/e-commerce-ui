import React from 'react';

export default function Register() {
  return (
    <div className="max-w-[500px] mx-auto py-20">
      <h1 className="mb-6 text-6xl font-family-caver">Create Account</h1>
      <div className="flex flex-col mb-4">
        <span className="text-sm text-primary-dark">User name</span>
        <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="User name" />
      </div>
      <div className="flex flex-col mb-4">
        <span className="text-sm text-primary-dark">Email</span>
        <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="Email" />
      </div>
      <div className="flex flex-col mb-4">
        <span className="text-sm text-primary-dark">Password</span>
        <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="Password" />
      </div>
      <button className="w-full text-white py-3 bg-primary-light rounded hover:opacity-80">Create</button>
    </div>
  );
}
