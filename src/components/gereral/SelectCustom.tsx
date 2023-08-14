import { Select } from 'antd';
import React from 'react';
import './SelectCustom.scss';

interface ISelectCustom {
  title?: string;
}

export default function SelectCustom({ title }: ISelectCustom) {
  return (
    <div className="flex flex-col w-full">
      <span className="text-xs text-primary-dark">{title}</span>
      <Select
        bordered={false}
        options={[
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'yiminghe',
          },
        ]}
      />
    </div>
  );
}
