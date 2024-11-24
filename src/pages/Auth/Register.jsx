import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import registerAnimation from '../../assets/lotties/register.json';
import useWindowSize from '../../hooks/useWindowsSize';
import { register } from '../../api';
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const Register = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            signIn({
                auth: {
                    token: response.data.token,
                    type: 'Bearer'
                },
                userState: {
                    username: response.data.user.username,
                    email: response.data.user.email
                }
            });
            navigate('/'); 
        } catch (err) {
            setError(err.response.data.message);
            setShowModal(true); 
        }
    };

    const handleCloseModal = () => {
        setShowModal(false); 
        setError('');
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: registerAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { width } = useWindowSize();

    const getAnimationSize = () => {
        if (width >= 992) {
            return { height: 600, width: 600 };
        } else {
            return { height: 400, width: 400 };
        }
    };

    return (
        <div className="bg-black min-h-screen d-flex align-items-center justify-content-center py-5">
            <Container fluid style={{ maxWidth: "90%" }}>
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <form onSubmit={handleSubmit} className='p-4 p-md-5 border rounded-2xl w-100'>
                            <h2 className="text-white">Register</h2>
                            <p className="text-white mb-4">Just Some Details To Get You In!</p>

                            <div className="mb-4">
                                <label className="text-white" htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter username"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter first name"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter last name"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 d-flex align-items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="mr-2"
                                />
                                <label className="text-white" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#DB4444] text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300 mb-3"
                            >
                                Register
                            </button>
                            <div className="text-white text-center mt-3">
                                <p>Already have an account ? <span className="text-[#DB4444] cursor-pointer" onClick={() => navigate('/login')}>Login</span></p>
                            </div>
                        </form>
                    </Col>
                    <Col md={6} className="text-white d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
                        <h1 className="text-5xl font-bold text-center">We Will Guide You :3</h1>
                        <Lottie
                            options={defaultOptions}
                            height={getAnimationSize().height}
                            width={getAnimationSize().width}
                        />
                    </Col>
                </Row>
            </Container>

            {/* Modal untuk menampilkan pesan error */}
            <Modal centered show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Register;
