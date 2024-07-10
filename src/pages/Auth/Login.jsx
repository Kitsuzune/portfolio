import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Lottie from 'react-lottie';
import loginAnimation from '../../assets/lotties/login.json';
import useWindowSize from '../../hooks/useWindowsSize';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { login } from '../../api/index'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const signIn = useSignIn();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password }); 
            console.log(response.data.token);
            signIn({
                auth: {
                    token: response.data.token,
                    type: 'Bearer',
                },
                userState: {
                    username: response.data.user.username,
                    email: response.data.user.email,
                    adminToken: response.data.adminToken ? response.data.adminToken : null,
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
        animationData: loginAnimation,
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
        <div className="bg-black min-h-screen d-flex align-items-center justify-content-center">
            <Container fluid style={{ maxWidth: "90%" }}>
                <Row>
                    <Col md={6} className="text-white d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
                        <h1 className="text-5xl font-bold text-center">Welcome Back .!</h1>
                        <Lottie
                            options={defaultOptions}
                            height={getAnimationSize().height}
                            width={getAnimationSize().width}
                        />
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <form onSubmit={handleSubmit} className='p-4 p-md-5 border rounded-2xl w-100' style={{ maxWidth: "400px" }}>
                            <h2 className="text-white">Login</h2>
                            <p className="text-white mb-4">Login to your account</p>

                            <div className="mb-4">
                                <label className="text-white" htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Enter username"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-white" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="w-full px-3 py-2 mt-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                Login
                            </button>
                            <a href="/forgot" className="text-white d-flex justify-content-center pb-3 border-bottom">Forgot password ?</a>
                            <div className="text-white text-center mt-3">
                                <p>Don't have an account ? <span className="text-[#DB4444] cursor-pointer" onClick={() => navigate('/register')}>Sign Up</span></p>
                                <p className="text-sm mt-2">
                                    <span href="#" className="text-[#DB4444]">Terms & Conditions</span> |
                                    <span href="#" className="text-[#DB4444]"> Support</span> |
                                    <span href="#" className="text-[#DB4444]"> Care</span>
                                </p>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>

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

export default Login;
