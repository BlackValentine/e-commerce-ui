import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center max-w-[500px] mx-auto py-20">
      <h1 className="mb-6 text-6xl font-family-justice">Account Login</h1>
      <div className="w-full flex flex-col mb-4">
        <span className="text-sm text-primary-dark">Email</span>
        <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="Email" />
      </div>
      <div className="w-full mb-6">
        <div className="w-full flex flex-col">
          <span className="text-sm text-primary-dark">Password</span>
          <input className="py-2 px-4 rounded border border-solid border-light-grayish-orange" type="text" placeholder="Password" />
        </div>
        <button onClick={() => navigate('/account/reset-password')} className="underline text-xs text-primary-light hover:opacity-80">
          Forgot your password?
        </button>
      </div>
      <div className="w-full">
        <button className="w-full text-white py-3 bg-primary-light rounded hover:opacity-80">Login</button>
        <button onClick={() => navigate('/account/register')} className="underline text-xs text-primary-light hover:opacity-80">
          Create account
        </button>
      </div>
    </div>
  );
}
