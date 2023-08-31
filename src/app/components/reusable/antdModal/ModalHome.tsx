"use client"
import React, { useState } from 'react'
import { Button } from 'antd';
import MyModal from './MyModal';

const ModalHome = () => {

    let [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <MyModal title='very good' isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}>
                <div className="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam deleniti beatae, dolor, suscipit omnis iusto quisquam ipsum
                        enim dolorum quidem maiores debitis quasi iure nihil tempora mollitia amet velit odit?</p>
                </div>
            </MyModal>
        </div>
    )
}

export default ModalHome