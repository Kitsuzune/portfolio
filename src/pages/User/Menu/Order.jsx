import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import UserLayout from '../UserLayout'
import Button from '../../../components/Button'
import { getProfileDetail, updateProfileDetail } from '../../../api'
import { Modal } from 'react-bootstrap'


const Order = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Error');
    const [modalMessage, setModalMessage] = useState('');


    const handleCloseModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalMessage('');
    }

    return (
        <UserLayout>
            <Form>
                <div className="bg-[#202020] p-10 ms-5 rounded-lg">
                    <Row>
                        <h1 className="text-red-500 text-[20px]">Daftar Transaksi</h1>
                    </Row>

                    <Row className="mt-5 bg-white p-2">
                        <Col md={2}>
                            <img src="https://via.placeholder.com/150" alt="Product" className="w-[100px] h-[100px]" />
                        </Col>
                        <Col md={8} className="flex flex-col justify-center">
                            <Row>
                                <span className="text-[20px] text-black">Order Name</span>
                            </Row>
                            <Row>
                                <span className="text-[14px] text-black">Added On 9 July 2024</span>
                            </Row>
                            <Row>
                                <span className="text-[14px] text-black">Status: <span className="text-red-500">Pending</span></span>
                            </Row>
                        </Col>
                        <Col md={2} className="flex flex-col justify-center">
                            <Row>
                                <span className="text-[20px] text-black">Rp. 100.000</span>
                            </Row>
                        </Col>
                    </Row>

                </div>
            </Form>

            <Modal centered show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="px-5" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </UserLayout>
    )
}

export default Order
