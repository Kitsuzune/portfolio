import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Container, Row, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../AdminLayout';
import { getTransactionAdmin, deleteProduct } from '../../../../api';
import { Icon } from '@iconify/react/dist/iconify.js';

const AdminOrder = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        fetchTransaction(currentPage);
    }, [currentPage]);

    const fetchTransaction = async (page) => {
        try {
            const response = await getTransactionAdmin(page, pageSize);
            setProducts(response.data.transactions);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
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

    return (
        <DefaultLayout>
            <Container fluid>
                <Row className="mt-5 mx-3 bg-white text-black rounded-lg p-5">
                    <div className='w-full'>
                        <div className="d-flex justify-content-between">
                            <span className="text-[40px]">Orders</span>
                            <div className="flex gap-3 align-items-center justify-end">
                                <div>
                                    <input type="text" placeholder="Search" className="px-4 py-3 rounded-lg " />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-5" style={{ height: '500px', overflowY: 'scroll' }}>
                        <Table striped borderless hover responsive>
                            <thead>
                                <tr>
                                    <th>Order By</th>
                                    <th>Order List</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{product.username}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{formatProductList(product.productList)}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>Rp. {product.total}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{product.status}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            {[...Array(totalPages)].map((_, idx) => (
                                <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
                                    {idx + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </Row>
            </Container>
        </DefaultLayout>
    );
};

export default AdminOrder;
