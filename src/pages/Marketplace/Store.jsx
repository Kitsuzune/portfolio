import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import Pagination from '../../components/Pagination';
import Filter from '../../components/Filter';
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../../api';
import NumberFormatter from '../../hooks/numberFormatter';

const Store = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('lastUpdate');
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedProducts, setSortedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct(currentPage, itemsPerPage, searchTerm);
                const products = response.data.products;
                setSortedProducts(products);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [currentPage, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredProducts = sortedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

                <Row className="py-3">
                    <Col md={12}>
                        <span className="text-white text-[40px] font-sans font-medium flex items-end">
                            Anything To Reserve IT'S U
                        </span>
                    </Col>
                </Row>

                <Row>
                    <Col md={9}>
                        <Row className="py-3 flex justify-center">
                            {filteredProducts.map((product, index) => (
                                <Card
                                    className="mx-4 mb-4 w-auto cursor-pointer"
                                    style={{ border: 0 }}
                                    key={index}
                                    onClick={() => navigate('/product/' + product.id)}
                                >
                                    <Row>
                                        <img
                                            src={product.productImage}
                                            style={{
                                                width: 200,
                                                height: 200,
                                            }}
                                        />
                                    </Row>
                                    <Row className="bg-black w-[200px] py-2">
                                        <span className="text-white text-[14px]">
                                            {product.name.length > 20
                                                ? product.name.substring(0, 20) + '...'
                                                : product.name}
                                        </span>
                                        <span className="text-[#DB4444] text-[14px] font-sans">
                                            Rp. <NumberFormatter number={product.price} />
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
                    <Col md={3}>
                        <Filter
                            sortOption={sortOption}
                            setSortOption={setSortOption}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                    </Col>
                </Row>

                <Row className="py-3 justify-content-center">
                    <Pagination
                        totalItems={totalPages * itemsPerPage}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Row>
            </Row>
        </Container>
    );
}

export default Store;
