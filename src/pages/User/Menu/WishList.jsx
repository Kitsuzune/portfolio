import React, { useEffect, useState } from 'react'
import UserLayout from '../UserLayout'
import { Col, Pagination, Row } from 'react-bootstrap'
import { getWishlist } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const WishList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();

    const fetchWishlist = async (page) => {
        try {
            const response = await getWishlist(page, pageSize);
            setWishlist(response.data.wishlist);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWishlist(currentPage);
    }, [currentPage]);

    return (
        <UserLayout>
            <div className="bg-[#202020] p-10 ms-5 rounded-lg">
                <Row>
                    <h1 className="text-red-500 text-[20px]">Daftar Produk</h1>
                </Row>

                {wishlist.length === 0 ? (
                    <div className="text-center text-white py-32">
                        <Icon icon="material-symbols:checked-bag-question" className="text-[100px] text-white flex justify-center w-full" />
                        <h2>You Don't Have Any Wishlist</h2>
                        <span>Go to the product page and add some products to your wishlist</span>
                    </div>
                ) : (
                    wishlist.map(wishlist => (
                        <div key={wishlist.id} className='grid grid-cols-12 mt-3'>
                            <Row className="bg-white p-4 col-span-11 cursor-pointer" onClick={() => navigate(`/product/${wishlist.product.id}`)}>
                                <Col md={2}>
                                    <img src={wishlist.product.productImage} alt="Product" className="w-[100px] h-[100px]" />
                                </Col>
                                <Col md={8} className="flex flex-col justify-center">
                                    <Row>
                                        <span className="text-[20px] text-black">
                                            {wishlist.product.name}
                                        </span>
                                    </Row>
                                    <Row>
                                        <span className="text-[14px] text-black">
                                            Added On {new Date(wishlist.createdAt).toLocaleDateString()}
                                        </span>
                                    </Row>
                                    <Row>
                                        <span className="text-[14px] text-black">
                                            Status: {wishlist.product.status ? <span className="text-green-600">Available</span> : <span className="text-red-600">Not Available</span>}
                                        </span>
                                    </Row>
                                </Col>
                                <Col md={2} className="flex flex-col justify-center">
                                    <Row>
                                        <span className="text-[20px] text-black">
                                            Rp. {wishlist.product.price}
                                        </span>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="">
                                <button className="bg-gray-600 text-white py-2 rounded-r-3xl hover:bg-red-500 transition duration-500">
                                    Delete
                                </button>
                            </Row>
                        </div>
                    ))
                )}

                {wishlist.length > 0 && (
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            {[...Array(totalPages)].map((_, idx) => (
                                <Pagination.Item key={idx + 1} active={idx + 1 === currentPage} onClick={() => handlePageChange(idx + 1)}>
                                    {idx + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                )}
            </div>
        </UserLayout>
    )
}

export default WishList