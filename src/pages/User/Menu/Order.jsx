import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Pagination } from 'react-bootstrap';
import UserLayout from '../UserLayout';
import Button from '../../../components/Button';
import { getTransaction, repay, updateTransaction } from '../../../api'; // Import the getTransaction function
import { Modal } from 'react-bootstrap';

const Order = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Error');
    const [modalMessage, setModalMessage] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [token, setToken] = useState('');
    const [orderId, setOrderId] = useState('');
    const pageSize = 10;

    useEffect(() => {
        fetchTransactions(currentPage);
    }, [currentPage]);

    useEffect(() => {
        if (token) {
            window.snap.pay(token, {
                onSuccess: function () {
                    handleUpdateTransaction('success');
                },
                onPending: function () {
                    handleUpdateTransaction('pending');
                },
                onError: function () {
                    handleUpdateTransaction('error');
                },
                onClose: function () {
                    handleUpdateTransaction('closed');
                },
            });
        }
    }, [token]);

    useEffect(() => {
        const midTransUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        let scriptTag = document.createElement('script');
        scriptTag.src = midTransUrl;

        const midTransClientKey = "SB-Mid-client-xqzOrOuF-uTETmub";
        scriptTag.setAttribute('data-client-key', midTransClientKey);

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const fetchTransactions = async (page) => {
        try {
            const response = await getTransaction(page, pageSize);
            setTransactions(response.data.transactions);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Failed to fetch transactions', error);
            setModalTitle('Error');
            setModalMessage('Failed to fetch transactions');
            setShowModal(true);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const formatProductList = (productList) => {
        try {
            const products = JSON.parse(productList);
            return products.map(p => `${p.productName} x${p.quantity}`).join(', ');
        } catch (error) {
            console.error('Failed to parse product list', error);
            return productList;
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalTitle('');
        setModalMessage('');
    };

    const handleUpdateTransaction = async (status) => {
        const data = {
            orderId,
            status,
        };

        try {
            await updateTransaction(data);
            fetchTransactions(currentPage);
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    }

    const handleRepay = async (transactionId,e) => {
        e.preventDefault();
        const data = {
            transactionId,
        };

        try {
            const response = await repay(data);
            setToken(response.data.token);
            setOrderId(transactionId);
        } catch (error) {
            console.error('Error repaying transaction:', error);
        }
    };

    return (
        <UserLayout>
            <Form>
                <div className="bg-[#202020] p-10 ms-5 rounded-lg">
                    <Row>
                        <h1 className="text-red-500 text-[20px]">Daftar Transaksi</h1>
                    </Row>

                    {transactions.map(transaction => (
                        <div key={transaction.id} className='grid grid-cols-12 mt-3'>
                            <Row className={`bg-white p-4 ${transaction.status === 'success' ? 'col-span-12 rounded-r-3xl' : 'col-span-11'}`}>
                                <Col md={10} className="flex flex-col justify-center border-r-4">
                                    <Row>
                                        <span className="text-[20px] text-black">{formatProductList(transaction.productList)}</span>
                                    </Row>
                                    <Row>
                                        <span className="text-[14px] text-black">Added On {new Date(transaction.createdAt).toLocaleDateString()}</span>
                                    </Row>
                                    <Row>
                                        <span className="text-[14px] text-black fw-bold">Status: <span className="text-purple-600">{transaction.status}</span></span>
                                    </Row>
                                </Col>
                                <Col md={2} className="flex flex-col justify-center">
                                    <Row>
                                        <span className="text-[20px] text-black">Rp. {transaction.total}</span>
                                    </Row>
                                </Col>
                            </Row>
                            {transaction.status !== 'success' && (
                                <Row className="">
                                    <button className="bg-red-600 text-white py-2 rounded-r-3xl hover:bg-red-500 transition duration-500" onClick={(e) => handleRepay(transaction.id,e)}>
                                        Pay Now
                                    </button>
                                </Row>
                            )}
                        </div>
                    ))}

                    <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            {[...Array(totalPages)].map((_, idx) => (
                                <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
                                    {idx + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
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
    );
}

export default Order;
