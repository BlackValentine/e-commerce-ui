import React from 'react';

interface ICustomInput {
  title?: string;
  type?: string;
  className?: string;
  onChange?: (e: any) => void;
  value?: string;
}

export default function CustomInput({ title, type, className, onChange, value }: ICustomInput) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-xs text-primary-dark">{title}</span>
      <input type={type} className="border-b border-solid border-primary-light outline-0 text-primary-light text-xl" onChange={onChange} value={value} />
    </div>
  );
}
