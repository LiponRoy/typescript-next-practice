"use client"
import React from 'react'
import {Modal } from 'antd';

interface modalProps{

    title:string;
    isModalOpen:boolean;
    handleOk:()=>void;
    handleCancel:()=>void;
    children: React.ReactNode;

}

const MyModal = ({title,isModalOpen,handleOk,handleCancel,children}:modalProps) => {
  return (
    <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{children}</p>
        {/* <p>Some contents...</p>
        <p>Some contents...</p> */}
      </Modal>
  )
}

export default MyModal