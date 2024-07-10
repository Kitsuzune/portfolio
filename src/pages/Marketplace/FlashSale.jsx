import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { products } from '../../config/product';
import ReactStars from 'react-rating-stars-component';
import { Icon } from '@iconify/react/dist/iconify.js';
import Pagination from '../../components/Pagination';
import Filter from '../../components/Filter';
import Countdown from 'react-countdown';

const FlashSale = () => {
    const itemsPerPage = 8; // Change this value based on how many items you want per page
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('lastUpdate');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedProducts, setSortedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let sorted = [...products];
        if (sortOption === 'lastUpdate') {
            sorted.sort((a, b) =>
                sortOrder === 'asc'
                    ? new Date(a.lastUpdate) - new Date(b.lastUpdate)
                    : new Date(b.lastUpdate) - new Date(a.lastUpdate)
            );
        } else if (sortOption === 'mostOrdered') {
            sorted.sort((a, b) =>
                sortOrder === 'asc' ? a.orders - b.orders : b.orders - a.orders
            );
        } else if (sortOption === 'bestReview') {
            sorted.sort((a, b) =>
                sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating
            );
        }
        setSortedProducts(sorted);
    }, [sortOption, sortOrder]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the products to display for the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <Container fluid className="bg-[#0F0F0F] m-0 px-0">
            <Row fluid className="py-10">
                <div className="h-[200px] w-full rounded-3xl flex justify-center items-center">
                    <img
                        src="https://pbs.twimg.com/media/GOqKjmAXIAA8Lyi.jpg:large"
                        className="h-full w-[90%] object-none rounded-3xl"
                    />
                </div>
            </Row>

            <Row className="w-75 justify-content-center mx-auto">
                <Row>
                    <Col md={12} className="flex gap-3">
                        <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 rounded-lg bg-[#202020] text-white"
                        />
                    </Col>
                </Row>

                <Row className="pb-3 mt-5">
                    <Col md={6}>
                        <span className="text-white text-[40px] font-sans font-medium flex items-end">
                            Flash Sale as of {new Date().toLocaleDateString()}
                        </span>
                    </Col>
                    <Col md={6} className="flex justify-end">
                        <span className="text-white text-[24px] font-sans fw-bold">
                            <Countdown
                                date={Date.now() + 100000000}
                                intervalDelay={0}
                                precision={3}
                                renderer={(props) => (
                                    <div className="flex text-white gap-3">
                                        <div className="flex-1">
                                            <div className="text-[14px]">Days</div>
                                            <div className="text-[40px] fw-medium">
                                                {props.days < 10 ? `0${props.days}` : props.days}
                                            </div>
                                        </div>
                                        <div className="flex items-end text-[35px] text-[#DB4444]">
                                            :
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[14px]">Hours</div>
                                            <div className="text-[40px] fw-medium">
                                                {props.hours < 10 ? `0${props.hours}` : props.hours}
                                            </div>
                                        </div>
                                        <div className="flex items-end text-[35px] text-[#DB4444]">
                                            :
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[14px]">Minutes</div>
                                            <div className="text-[40px] fw-medium">
                                                {props.minutes < 10
                                                    ? `0${props.minutes}`
                                                    : props.minutes}
                                            </div>
                                        </div>
                                        <div className="flex items-end text-[35px] text-[#DB4444]">
                                            :
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[14px]">Seconds</div>
                                            <div className="text-[40px] fw-medium">
                                                {props.seconds < 10
                                                    ? `0${props.seconds}`
                                                    : props.seconds}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            />
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <Row className="py-3 flex justify-center">
                            {currentProducts.map((product, index) => (
                                <Card
                                    className="mx-4 mb-4 w-auto"
                                    style={{ border: 0 }}
                                    key={index}
                                >
                                    <Row>
                                        <img
                                            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                                            style={{
                                                width: 200,
                                                height: 200,
                                            }}
                                        />
                                    </Row>
                                    <Row className="bg-black w-[200px] py-2">
                                        <span className="text-white text-[14px] font-sans">
                                            Product Name
                                        </span>
                                        <span className="text-[#DB4444] text-[14px] font-sans">
                                            Rp.90000
                                        </span>
                                        <div className="flex w-auto">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                isHalf={true}
                                                edit={false}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <span className="text-white text-[18px] font-sans flex items-center">
                                                (0)
                                            </span>
                                        </div>
                                    </Row>
                                </Card>
                            ))}
                        </Row>
                    </Col>
                </Row>

                <Row className="py-3 justify-content-center">
                    <Pagination
                        totalItems={products.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Row>
            </Row>
        </Container>
    );
}

export default FlashSale;
