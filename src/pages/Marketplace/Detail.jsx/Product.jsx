import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Form, ProgressBar, Alert } from 'react-bootstrap';
import { UseBreadcrumb } from '../../../components/UseBreadcrumb';
import ReactStars from 'react-rating-stars-component';
import Button from '../../../components/Button';
import { Icon } from '@iconify/react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { getProductDetail, addToCart, addToWishlist, deleteWishlist, getReview, addReview } from '../../../api';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import NumberFormatter from '../../../hooks/numberFormatter';

const Product = () => {
    const { id } = useParams();
    const [newReviewData, setNewReviewData] = useState({ review: '', rating: 0 });
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [review, setReview] = useState(1);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const navigate = useNavigate();

    const fetchProductDetail = async () => {
        try {
            const response = await getProductDetail(id);
            setProduct(response.data.product);
        } catch (error) {
            console.error('Error fetching product detail:', error);
        }
    };

    const fetchReview = async () => {
        try {
            const response = await getReview(id);
            setReview(response.data.data);
        } catch (error) {
            console.error('Error fetching review:', error);
        }
    };

    useEffect(() => {
        fetchProductDetail();
        fetchReview();
    }, []);

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

    const handleAddToWishlist = async () => {
        try {
            const formData = {
                productId: product.id
            };
            await addToWishlist(formData);
            fetchProductDetail();
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
            alert("Failed to add product to wishlist");
        }
    }

    const handleRemoveFromWishlist = async (productId) => {
        try {
            await deleteWishlist(productId);
            fetchProductDetail();
        } catch (error) {
            console.error('Error removing product from wishlist:', error);
            alert("Failed to remove product from wishlist");
        }
    }

    const handleAddReview = async () => {
        try {
            const formData = {
                productId: product.id,
                review: newReviewData.review,
                rating: newReviewData.rating
            };
            await addReview(formData);
            fetchReview();
            setNewReviewData({ review: '', rating: 0 });
        } catch (error) {
            console.error('Error adding review:', error);
            alert("Failed to add review");
        }
    }

    const handleRatingChange = (newRating) => {
        setNewReviewData({
            ...newReviewData,
            rating: newRating
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReviewData({
            ...newReviewData,
            [name]: value
        });
    };



    const calculatePercentage = (count) => {
        const total = review.reviewTotal;
        return total > 0 ? (count / total) * 100 : 0;
    };

    const handleViewMore = () => {
        setShowAllReviews(true);
    };

    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48">
            <div className="w-[90%]">

                <Row>
                    <UseBreadcrumb />
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>
                        <div className="h-[80vh] w-full rounded-3xl flex justify-center items-center bg-white">
                            <img
                                src={product.productImage}
                                className="rounded-3xl object-cover h-full"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="flex flex-col gap-3">
                            <span className="text-white text-[40px] font-sans font-medium">
                                {product.name}
                            </span>
                            <div className="flex w-auto gap-3">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    value={review.meanRating}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <span className="text-white text-[18px] font-sans flex items-center">
                                    {/* ({product.reviews} Reviews) */}
                                    ({review.reviewTotal} Reviews)
                                </span>
                                <span className="text-white text-[18px] font-sans flex items-center">
                                    |
                                </span>
                                {/* <span className="text-green-600 text-[18px] font-sans flex items-center"> */}
                                <span className={`text-${product.status ? 'green' : 'red'}-600 text-[18px] font-sans flex items-center`}>
                                    {/* {product.stock > 0 ? 'In Stock' : 'Out of Stock'} */}
                                    {product.status == true ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                            <span className="text-white text-[40px] font-sans font-thin">
                                Rp. <NumberFormatter number={product.price} />
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
                                <Button className="px-5 py-2 rounded-md hover:bg-red-400 transition-all duration-700" onClick={handleAddToCart}>
                                    Add to Cart
                                </Button>
                                <button className={`group ${product.isFavourite ? 'bg-red-600 hover:bg-gray-700' : 'bg-[#202020] hover:bg-gray-700'} text-white text-[40px] px-4 py-2 h-[70px] rounded-md border-2 transition-all duration-700 relative`} onClick={product.isFavourite ? () => handleRemoveFromWishlist(product.favouriteId) : handleAddToWishlist}>
                                    {product.isFavourite ? (
                                        <>
                                            <Icon icon="mdi:heart" className="text-white text-[30px] transition-all duration-500 group-hover:hidden" />
                                            <Icon icon="mdi:heart-outline" className="text-white hidden text-[30px] transition-all duration-500 animate-fadeIn group-hover:block" />
                                        </>
                                    ) : (
                                        <>
                                            <Icon icon="mdi:heart-outline" className="text-white group-hover:hidden text-[30px] transition-all duration-500" />
                                            <Icon icon="mdi:heart" className="text-red-600 hidden group-hover:block text-[30px] transition-all duration-500 animate-fadeIn" />
                                        </>
                                    )}
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

                <Row>
                    <Row className="mt-5">
                        <Col md={12} className="flex gap-3">
                            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
                            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
                                Reviews
                            </span>
                        </Col>
                    </Row>

                    <Row className="py-3 mt-4">
                        <Col md={6}>
                            <div className='flex justify-center items-center flex-col'>
                                <Row>
                                    <span className="text-white text-[100px]">
                                        {review.meanRating}
                                    </span>
                                </Row>
                                <Row>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        isHalf={true}
                                        edit={false}
                                        value={review.meanRating}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                </Row>
                                <Row>
                                    <span className="text-gray-400 text-[20px]">
                                        Based on {review.totalReviews} reviews
                                    </span>
                                </Row>
                            </div>
                            <div className="mt-5">
                                <Row className='w-full'>
                                    <div className="grid grid-cols-7 gap-3">
                                        <span className="text-white text-[14px] mr-2 col-span-1">
                                            Excellent
                                        </span>
                                        <ProgressBar now={calculatePercentage(review.fiveStarRating)} className="w-full col-span-6" />
                                    </div>


                                    <div className="grid grid-cols-7 gap-3 mt-1">
                                        <span className="text-white text-[14px] mr-2 col-span-1">
                                            Good
                                        </span>
                                        <ProgressBar now={calculatePercentage(review.fourStarRating)} className="w-full col-span-6" />
                                    </div>


                                    <div className="grid grid-cols-7 gap-3 mt-1">
                                        <span className="text-white text-[14px] mr-2 col-span-1">
                                            Average
                                        </span>
                                        <ProgressBar now={calculatePercentage(review.threeStarRating)} className="w-full col-span-6" />
                                    </div>

                                    <div className="grid grid-cols-7 gap-3 mt-1">
                                        <span className="text-white text-[14px] mr-2 col-span-1">
                                            Below
                                        </span>
                                        <ProgressBar now={calculatePercentage(review.twoStarRating)} className="w-full col-span-6" />
                                    </div>

                                    <div className="grid grid-cols-7 gap-3 mt-1">
                                        <span className="text-white text-[14px] mr-2 col-span-1">
                                            Poor
                                        </span>
                                        <ProgressBar now={calculatePercentage(review.oneStarRating)} className="w-full col-span-6" />
                                    </div>

                                </Row>
                            </div>

                            {
                                product.isOrdered ? (
                                    product.isReviewed ? (
                                        <Alert variant='info' className="mt-5">
                                            Thank You For Buying this Product, You Have Already Left a Review, 1 Account Can Only Leave 1 Review
                                        </Alert>
                                    ) : (
                                        <Alert variant='success' className="mt-5">
                                            Thank You For Buying this Product, Leave a Review So Others Can Know Your Experience
                                        </Alert>
                                    )
                                ) : (
                                    <Alert variant='danger' className="mt-5">
                                        You Need to Buy this Product to Leave a Review
                                    </Alert>
                                )
                            }


                            <div className="p-5 rounded-lg" style={{ backgroundColor: '#1C1C1C' }}>

                                <Row className="mb-4">
                                    <span className="text-white text-[24px]">
                                        Write a Review
                                    </span>
                                </Row>


                                <Form>
                                    <Form.Group className="w-full" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" name="review" rows={3} placeholder="Write your review here..." value={newReviewData.review} style={{ borderRadius: 14 }} onChange={handleInputChange} disabled={product.isOrdered && !product.isReviewed ? false : true} />
                                    </Form.Group>

                                    <div className='flex mt-4 justify-between'>
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-white text-[20px]">
                                                Overall Rating*
                                            </span>
                                            <ReactStars
                                                count={5}
                                                activeColor="#ffd700"
                                                size={50}
                                                value={newReviewData.rating}
                                                onChange={handleRatingChange}
                                                emptyIcon={<i className="far fa-star"></i>}
                                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                fullIcon={<i className="fa fa-star"></i>}
                                                edit={product.isOrdered && !product.isReviewed}
                                            />
                                        </div>
                                        <Button className="px-5 rounded-full" onClick={handleAddReview} disabled={product.isOrdered && !product.isReviewed ? false : true}>
                                            Write Review
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col md={6}>
                            {/* {review.reviews.map((reviewItem) => (
                                <Card className="p-8 rounded-md mb-4" style={{ backgroundColor: '#1C1C1C' }}>
                                    <Row className='mb-3'>
                                        <Col md={12} className='flex justify-between'>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={reviewItem.user.profilePicture}
                                                    className="w-[80px] h-[80px] rounded-full"
                                                />
                                                <div>
                                                    <span className="text-white text-[20px] font-sans">
                                                        {reviewItem.user.username}
                                                    </span>
                                                    <div className='flex items-center gap-2'>
                                                        <ReactStars
                                                            count={5}
                                                            size={24}
                                                            isHalf={true}
                                                            edit={false}
                                                            value={reviewItem.rating}
                                                            emptyIcon={<i className="far fa-star"></i>}
                                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                            fullIcon={<i className="fa fa-star"></i>}
                                                            activeColor="#ffd700"
                                                        />
                                                        <span className="text-white text-[24px]">
                                                            ({reviewItem.rating})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-white text-[14px] font-sans">
                                                {moment(reviewItem.createdAt).fromNow()}
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <span className="text-white text-[14px] font-sans">
                                            {reviewItem.review}
                                        </span>
                                    </Row>
                                </Card>
                            ))} */}
                            <div>
                                {review.reviews?.slice(0, showAllReviews ? review.reviews.length : 4)
                                    .map((reviewItem, index) => (
                                        <Card className="p-8 rounded-md mb-4" style={{ backgroundColor: '#1C1C1C' }}>
                                            <Row className='mb-3'>
                                                <Col md={12} className='flex justify-between'>
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src={reviewItem.user.profilePicture}
                                                            className="w-[80px] h-[80px] rounded-full"
                                                        />
                                                        <div>
                                                            <span className="text-white text-[20px] font-sans">
                                                                {reviewItem.user.username}
                                                            </span>
                                                            <div className='flex items-center gap-2'>
                                                                <ReactStars
                                                                    count={5}
                                                                    size={24}
                                                                    isHalf={true}
                                                                    edit={false}
                                                                    value={reviewItem.rating}
                                                                    emptyIcon={<i className="far fa-star"></i>}
                                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                    fullIcon={<i className="fa fa-star"></i>}
                                                                    activeColor="#ffd700"
                                                                />
                                                                <span className="text-white text-[24px]">
                                                                    ({reviewItem.rating})
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="text-white text-[14px] font-sans">
                                                        {moment(reviewItem.createdAt).fromNow()}
                                                    </span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <span className="text-white text-[14px] font-sans">
                                                    {reviewItem.review}
                                                </span>
                                            </Row>
                                        </Card>
                                    ))}
                            </div>
                            {!showAllReviews && (
                                <button className="text-white mt-4" onClick={handleViewMore}>
                                    View More
                                </button>
                            )}
                        </Col>
                    </Row>
                </Row>

                {/* <Row className="mt-5">

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

                </Row> */}

            </div>
        </Container >
    );
};

export default Product;
