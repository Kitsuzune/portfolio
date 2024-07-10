import React, { useEffect, useState, useRef } from 'react';
import { Table, Button, Container, Row, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DefaultLayout from '../../AdminLayout';
import { getProduct, deleteProduct } from '../../../../api';
import { Icon } from '@iconify/react/dist/iconify.js';

const ProductAdmin = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const fetchProducts = async (page) => {
        try {
            const response = await getProduct(page, pageSize);
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts(currentPage);
        } catch (error) {
            console.error('Failed to delete product', error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const CustomDropdown = ({ productId }) => {
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);
        const buttonRef = useRef(null);

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div ref={buttonRef} style={{ position: 'relative', width: '100%' }}>
                <button onClick={toggleDropdown} className="btn btn-light">
                    <Icon icon="material-symbols:menu" className="text-black text-[24px]" />
                </button>
                {isOpen && (
                    <div ref={dropdownRef} style={{ position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
                        <Link to={`/admin/products/${productId}`} className="dropdown-item" style={{ display: 'block', padding: '8px 16px', cursor: 'pointer' }}>Edit</Link>
                        <button onClick={() => handleDeleteProduct(productId)} className="dropdown-item" style={{ display: 'block', padding: '8px 16px', cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left' }}>Delete</button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <DefaultLayout>
            <Container fluid>
                <Row className="mt-5 mx-3 bg-white text-black rounded-lg p-5">
                    <div className='w-full'>
                        <div className="d-flex justify-content-between">
                            <span className="text-[40px]">Products</span>
                            <div className="flex gap-3 align-items-center justify-end">
                                <Button as={Link} to="/admin/products/add" variant="dark" className="bg-black text-white px-4 py-3 rounded-lg">
                                    Add Product
                                </Button>
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
                                    <th>Name</th>
                                    <th>Product Code</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <div className="flex gap-3 align-items-center h-[60px]">
                                                <img src={product.productImage} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                                <span>{product.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{product.id}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{product.price}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex align-items-center h-[60px]">
                                                <span>{product.status === true ? 'In Stock' : 'Out of Stock'}</span>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <div className="flex align-items-center gap-2 h-[60px]">
                                                <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                                <Link to={`/admin/products/${product.id}`} className="btn btn-primary">Edit</Link>
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

export default ProductAdmin;
