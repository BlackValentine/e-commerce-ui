import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center max-w-[500px] mx-auto py-20">
      <h1 className="mb-6 text-6xl font-family-justice">Account Login</h1>
      <div className="w-full">
        <h3 className="text-primary-dark font-bold uppercase mb-1">Reset your password</h3>
        <p className="text-primary-light mb-3">We will send you an email to reset your password</p>
      </div>
      <div className="w-full flex flex-col mb-4">
        <span className="text-sm text-primary-dark">Email</span>
        <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="Email" />
      </div>

      <div className="w-full">
        <button className="w-full text-white py-3 bg-primary-light rounded hover:opacity-80">Submit</button>
        <button onClick={() => navigate('/account/login')} className="underline text-xs text-primary-light hover:opacity-80">
          Back to login?
        </button>
      </div>
    </div>
  );
}
