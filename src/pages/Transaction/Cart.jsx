import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UseBreadcrumb } from '../../components/UseBreadcrumb';
import Button from '../../components/Button';
import { getCart, plusCart, minusCart, checkout, updateTransaction } from '../../api';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [token, setToken] = useState('');
    const [orderId, setOrderId] = useState('');

    useEffect(() => {
        fetchCart();
    }, []);


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
                    handleUpdateTransaction('failed');
                },
                onClose: function () {
                    handleUpdateTransaction('pending');
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


    const fetchCart = async () => {
        try {
            const response = await getCart();
            setCart(response.data.cart);
            calculateTotal(response.data.cart);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const calculateTotal = (cartItems) => {
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += item.product.price * item.quantity;
        });
        setTotal(totalAmount);
    };

    const handleIncreaseQuantity = async (id) => {
        try {
            await plusCart(id);
            fetchCart();
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const handleDecreaseQuantity = async (id) => {
        try {
            await minusCart(id);
            fetchCart();
        } catch (error) {
            console.error('Error decreasing quantity:', error);
        }
    };

    if (cart.length === 0) {
        // return <div className="text-black text-center mt-5">Your cart is empty.</div>;
        return (
            <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0">
                <div className="w-[90%] h-[50vh]">
                    <Row>
                        <UseBreadcrumb />
                    </Row>

                    <Row className="mt-5 text-white text-center flex justify-center items-center h-[100%]">
                        <div className="">Your cart is empty.</div>
                    </Row>
                </div>
            </Container>
        )
    }

    const handleCheckout = async () => {
        const deduction = 0;
        const productList = cart.map(item => ({
            productId: item.product.id,
            productName: item.product.name,
            productPrice: item.product.price,
            quantity: item.quantity,
        }));

        const data = {
            deduction,
            quantity: 1,
            productList,
        };

        try {
            const response = await checkout(data);
            setToken(response.data.token);
            setOrderId(response.data.transactionLocal.id);
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    const handleUpdateTransaction = async (status) => {
        const data = {
            orderId,
            status,
        };

        try {
            await updateTransaction(data);
            fetchCart();
        } catch (error) {
            console.error('Error updating transaction:', error);
        }
    }


    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48">
            <div className="w-[90%]">
                <Row>
                    <UseBreadcrumb />
                </Row>

                <Row className="mt-5 mx-2">
                    <Row className="w-full flex justify-between items-center bg-white rounded-lg p-5">
                        <Col md={3}>
                            <span className="text-[20px] fw-bold">Product</span>
                        </Col>
                        <Col md={3}>
                            <span className="text-[20px] fw-bold">Price</span>
                        </Col>
                        <Col md={3}>
                            <span className="text-[20px] fw-bold">Quantity</span>
                        </Col>
                        <Col md={3} className="flex justify-end">
                            <span className="text-[20px] fw-bold">SubTotal</span>
                        </Col>
                    </Row>
                </Row>

                {cart.map(item => (
                    <Row className="mt-5 mx-2" key={item.id}>
                        <Row className="w-full flex justify-between items-center bg-white rounded-lg p-5">
                            <Col md={3}>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.product.image}
                                        className="h-[70px] w-[70px] object-cover"
                                        alt={item.product.name}
                                    />
                                    <span className="text-[20px]">{item.product.name}</span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <span className="text-[20px]">Rp {item.product.price}</span>
                            </Col>
                            <Col md={3}>
                                <div className="flex items-center gap-3">
                                    <button
                                        className="text-[20px] px-3 py-1 bg-gray-200 rounded"
                                        onClick={() => handleDecreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="text-[20px]">{item.quantity}</span>
                                    <button
                                        className="text-[20px] px-3 py-1 bg-gray-200 rounded"
                                        onClick={() => handleIncreaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </Col>
                            <Col md={3} className="flex justify-end">
                                <span className="text-[20px]">Rp {item.product.price * item.quantity}</span>
                            </Col>
                        </Row>
                    </Row>
                ))}

                <Row className="mt-5">
                    <div>
                        <button className="bg-transparent text-white border rounded-lg py-3 px-5">
                            Return to Store
                        </button>
                    </div>
                </Row>

                <Row className="mt-5 me-2">
                    <Col md={6}>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter Promo Code"
                                className="px-5 py-3 h-[70px] rounded-lg bg-transparent text-white"
                            />
                            <Button className="px-5">
                                Apply
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="flex justify-end">
                        <div className='border p-5 w-full rounded-lg'>
                            <div>
                                <span className="text-[20px] text-white">
                                    Cart Total
                                </span>
                            </div>

                            <div className="flex justify-between pt-5 pb-3 border-bottom">
                                <span className="text-[20px] text-white">
                                    Subtotal :
                                </span>
                                <span className="text-[20px] text-white">
                                    Rp {total}
                                </span>
                            </div>

                            {/* <div className="flex justify-between pt-3 pb-3 border-bottom">
                                <span className="text-[20px] text-white">
                                    Shipping :
                                </span>
                                <span className="text-[20px] text-white">
                                    Rp 10000
                                </span>
                            </div> */}

                            <div className="flex justify-between pt-3 pb-3">
                                <span className="text-[20px] text-white">
                                    Total :
                                </span>
                                <span className="text-[20px] text-white">
                                    Rp {total}
                                </span>
                            </div>

                            <div className="flex justify-end pt-5">
                                <Button className="px-5" onClick={handleCheckout}>
                                    Proceed to Checkout
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Cart;
