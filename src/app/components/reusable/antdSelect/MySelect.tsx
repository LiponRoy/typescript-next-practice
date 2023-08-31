"use client"
import React, { MouseEventHandler, useState } from 'react';
import { Select, Space } from 'antd';

interface OptionProps {
    value: string;
    label: string;
  }

interface SelectProps{
    handleChange:(value: string)=>void;
    options: OptionProps[];

}

const MySelect = ({handleChange,options}:SelectProps) => (
   
  <Space wrap>
    <Select
      defaultValue={options[0].value}
      style={{ width: 180 }}
      onChange={handleChange}
      options={options}
    />
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
    /> */}
  </Space>
);

export default MySelect;
