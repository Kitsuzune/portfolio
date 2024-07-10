import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { UseBreadcrumb } from '../../../components/UseBreadcrumb';
import ReactStars from 'react-rating-stars-component';
import Button from '../../../components/Button';
import { Icon } from '@iconify/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { getProductDetail, addToCart } from '../../../api';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await getProductDetail(id);
                setProduct(response.data.product);
            } catch (error) {
                console.error('Error fetching product detail:', error);
            }
        };

        fetchProductDetail();
    }, [id]);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = async () => {
        try {
            const formData = {
                productId: product.id,
                quantity: quantity
            };
            await addToCart(formData);
            navigate('/cart');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert("Failed to add product to cart");
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48">
            <div className="w-[90%]">

                <Row>
                    <UseBreadcrumb />
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>
                        <div className="h-[400px] pe-5 w-full rounded-3xl flex justify-center items-center">
                            <img
                                src={product.productImage}
                                className="h-full object-none rounded-3xl"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="flex flex-col gap-3">
                            <span className="text-white text-[40px] font-sans font-medium">
                                {product.name}
                            </span>
                            <div className="flex w-auto gap-7">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    value={product.rating}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <span className="text-white text-[18px] font-sans flex items-center">
                                    ({product.reviews} Reviews)
                                </span>
                                <span className="text-white text-[18px] font-sans flex items-center">
                                    |
                                </span>
                                <span className="text-green-600 text-[18px] font-sans flex items-center">
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                            <span className="text-white text-[40px] font-sans font-thin">
                                Rp {product.price}
                            </span>
                            <span className="text-white text-[16px] font-sans w-3/4 text-justify">
                                {product.description}
                            </span>
                            <div className="flex items-center gap-4 mt-2 border-top pt-5">
                                <div className="flex items-center bg-black rounded-md">
                                    <button
                                        className="text-white text-[30px] px-4 py-2 h-[70px] border-2 rounded-l-lg"
                                        onClick={decrement}
                                    >
                                        -
                                    </button>
                                    <span className="text-white text-[30px] px-4 h-[70px] py-2 border-2 w-32 flex justify-center items-center">
                                        {quantity}
                                    </span>
                                    <button
                                        className="text-white text-[30px] px-4 h-[70px] py-2 bg-red-600 border-2 rounded-r-lg"
                                        onClick={increment}
                                    >
                                        +
                                    </button>
                                </div>
                                <Button className="px-5 py-2 rounded-md" onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                                <button className="text-white text-[40px] px-4 py-2 h-[70px] bg-[#202020] rounded-md border-2">
                                    <Icon icon="mdi:heart-outline" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center bg-[#1C1C1C] p-4 rounded-md mb-2">
                                <Icon icon="bi:truck" className="text-white text-[40px] mr-4" />
                                <div>
                                    <span className="text-white font-sans text-[16px]">Free Delivery</span>
                                    <p className="text-white text-[14px]">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-[#1C1C1C] p-4 rounded-md">
                                <Icon icon="ic:outline-replay" className="text-white text-[40px] mr-4" />
                                <div>
                                    <span className="text-white font-sans text-[16px]">Return Delivery</span>
                                    <p className="text-white text-[14px]">Free 30 Days Delivery Returns.</p>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row className="mt-5">

                    <Row>
                        <Col md={12} className="flex gap-3">
                            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
                            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
                                Related Items
                            </span>
                        </Col>
                    </Row>

                    <Row className="py-3 mt-4">
                        <ScrollMenu>
                            {product.relatedProducts.map((relatedProduct, index) => (
                                <Card className="mx-4" style={{ border: 0 }} key={index}>
                                    <Row className="bg-white rounded-t-lg">
                                        <img
                                            src={relatedProduct.productImage}
                                            style={{
                                                width: 200,
                                                height: 200,
                                            }}
                                        />
                                    </Row>
                                    <Row className="bg-black w-[200px] py-2 rounded-b-lg">
                                        <span className="text-white text-[14px] font-sans">
                                            {relatedProduct.name}
                                        </span>
                                        <span className="text-[#DB4444] text-[14px] font-sans">
                                            Rp.{relatedProduct.price}
                                        </span>
                                        <div className="flex w-auto">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                isHalf={true}
                                                edit={false}
                                                value={relatedProduct.rating}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                activeColor="#ffd700"
                                            />
                                            <span className="text-white text-[18px] font-sans flex items-center">
                                                ({relatedProduct.reviews})
                                            </span>
                                        </div>
                                    </Row>
                                </Card>
                            ))}
                        </ScrollMenu>
                    </Row>

                </Row>

            </div>
        </Container>
    );
};

export default Product;
