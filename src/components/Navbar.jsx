import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from 'react-router-dom';
import diamond from '../assets/images/diamond.gif'
import chara from '../assets/images/chara.gif'
import ruby from '../assets/images/ruby.gif'
import Sparkles from 'react-sparkle'
import { FaDoorOpen } from 'react-icons/fa';

function Navbar() {
    const isAuthenticated = useIsAuthenticated();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const signOut = useSignOut()
    const navigate = useNavigate();
    const authUser = useAuthUser();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const signOutRedirect = () => {
        signOut();
        navigate('/');
    };

    return (
        <Row fluid className='bg-black pt-5'>
            <Container fluid className='bg-[#0F0F0F]'>
                <Row className='w-[90%] mx-auto py-5 d-flex justify-content-between align-items-center'>
                    <Col xs={6} md={2} className='d-flex justify-content-start align-items-center'>
                        <span className='text-white font-sans fw-bold text-[24px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' onClick={() => navigate('/')}>
                            Kitsuzune
                        </span>
                    </Col>

                    <Col xs={6} className='d-md-none d-flex justify-content-end align-items-center'>
                        <Icon
                            icon="mdi:menu"
                            className='text-white text-[35px]'
                            onClick={toggleMenu}
                        />
                    </Col>

                    <Col md={6} className={`d-none d-md-flex justify-content-center gap-5 align-items-center ${isMenuOpen ? 'd-flex flex-column' : ''}`}>
                        <Link to="/experience" className='text-white text-[16px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' style={{ textDecoration: 'none' }}>
                            Experience
                        </Link>

                        <Link to="/education" className='text-white text-[16px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' style={{ textDecoration: 'none' }}>
                            Education
                        </Link>

                        <Link to="/store" className='text-white text-[16px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' style={{ textDecoration: 'none' }}>
                            My Store
                        </Link>

                        <Link to="/contact" className='text-white text-[16px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' style={{ textDecoration: 'none' }}>
                            Contact
                        </Link>

                        {/* {isAuthenticated && (
                            <Link to="/market" className='text-white text-[16px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out' style={{ textDecoration: 'none' }}>
                                Store
                            </Link>
                        )} */}

                        <div className="flex items-center hover:bg-[#1A1A1A] transition duration-300 ease-in-out rounded p-2">
                            <div style={{ position: 'relative' }}>
                                <Sparkles color="teal" overflowPx={10} count={3} minSize={30} fadeOutSpeed={15} flicker={false} />
                                <Link
                                    to="/ai/v1/"
                                    className="text-white text-[16px] font-pixel"
                                    style={{ textDecoration: 'none' }}
                                >
                                    AI Corner
                                </Link>
                            </div>
                            <img src={diamond} alt="diamond" className="w-[20px] h-[20px] ml-2" />
                        </div>

                        <div className="flex items-center hover:bg-[#1A1A1A] transition duration-300 ease-in-out rounded p-2">
                            <div style={{ position: 'relative' }}>
                                <Sparkles color="teal" overflowPx={10} count={3} minSize={30} fadeOutSpeed={15} flicker={false} />
                                <Link
                                    to="/itsu-game/v1/corner"
                                    className="text-white text-[16px] font-pixel"
                                    style={{ textDecoration: 'none' }}
                                >
                                    ITSU Games
                                </Link>
                            </div>
                            <img src={chara} alt="diamond" className="w-[30px] h-[30px] scale-150 ml-2" />
                        </div>


                    </Col>

                    <Col md={4} className='d-none d-md-flex justify-content-end align-items-center'>
                        {/* <div className='mr-5 bg-white w-[60%] rounded-[4px] h-full p-2'>
                            <div className='d-flex justify-content-center align-items-center h-full mx-2'>
                                <input type='text' placeholder='What are you looking for?' className='bg-transparent border-0 w-full h-full outline-none' />
                                <Icon icon="iconamoon:search-thin" className='text-black text-[35px]' />
                            </div>
                        </div> */}

                        {!isAuthenticated && (
                            // <Link to="/login" className='text-white text-[16px] flex items-center gap-2' style={{ textDecoration: 'none' }}>
                            //     Login <FaDoorOpen />
                            // </Link>

                            <Button variant="outline-light" onClick={() => navigate('/login')}>
                                <div className="text-[16px] flex items-center gap-2 cursor-pointer">
                                    {'Login'}
                                    <FaDoorOpen />
                                </div>
                            </Button>
                        )}

                        {isAuthenticated && (
                            <div className='position-relative flex items-center'>
                                <div className='mr-5 bg-transparent border-red-700 border-1 rounded-[4px] h-full p-2'>
                                    <div className='flex items-center gap-2 h-full mx-2'>
                                        <span className='text-red-700 text-[16px] font-pixel'>
                                            0 Ruby
                                        </span>
                                        <img src={ruby} alt="ruby" className="w-[20px] h-[20px] scale-150 ml-2" />
                                    </div>
                                </div>
                                <Icon icon="solar:heart-linear" className='text-white text-[35px] mr-5 cursor-pointer' onClick={() => navigate('/wishlist')} />
                                <Icon icon="mdi-light:cart" className='text-white text-[35px] cursor-pointer' onClick={() => navigate('/cart')} />
                                <Icon
                                    icon="carbon:user"
                                    className='text-white text-[35px] ml-5 cursor-pointer'
                                    onClick={toggleUserMenu}
                                />
                                {isUserMenuOpen && (
                                    <div className='absolute right-0 top-6 mt-4 w-80 z-50 p-3 bg-[#FFFFFF] bg-opacity-10 backdrop-blur rounded-xl text-white shadow-lg'>
                                        <Link to="/profile" className='flex items-center px-4 py-2 text-decoration-none text-white hover:bg-white hover:bg-opacity-10'>
                                            <Icon icon="mdi:account" className='mr-2' />
                                            Manage My Account
                                        </Link>
                                        <Link to="/orders" className='flex items-center px-4 py-2 text-decoration-none text-white hover:bg-white hover:bg-opacity-10'>
                                            <Icon icon="mdi:clipboard-list" className='mr-2' />
                                            My Order
                                        </Link>
                                        {
                                            authUser.adminToken && (
                                                <Link to="/admin/dashboard" className='flex items-center px-4 py-2 text-decoration-none text-white hover:bg-white hover:bg-opacity-10'>
                                                    <Icon icon="mdi:shield-account" className='mr-2' />
                                                    Admin
                                                </Link>
                                            )
                                        }
                                        <button onClick={() => signOutRedirect()} className='flex items-center px-4 py-2 text-decoration-none w-full text-white hover:bg-white hover:bg-opacity-10'>
                                            <Icon icon="mdi:logout" className='mr-2' />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </Col>
                </Row>

                {
                    isMenuOpen && (
                        <Row className='d-md-none bg-[#0F0F0F] w-full'>
                            <Col className='d-flex flex-column align-items-start p-3'>
                                <span className='text-white text-[16px] mb-2'>
                                    Home
                                </span>

                                <span className='text-white text-[16px] mb-2'>
                                    Contact
                                </span>

                                <span className='text-white text-[16px] mb-2'>
                                    About
                                </span>

                                <span className='text-white text-[16px] mb-2'>
                                    Sign Up
                                </span>

                                <div className='bg-white w-full rounded-[4px] h-full p-2 mb-2'>
                                    <div className='d-flex justify-content-center align-items-center h-full mx-2'>
                                        <input type='text' placeholder='What are you looking for?' className='bg-transparent border-0 w-full h-full outline-none' />
                                        <Icon icon="iconamoon:search-thin" className='text-black text-[35px]' />
                                    </div>
                                </div>

                                <div className='d-flex justify-content-start align-items-center'>
                                    <Icon icon="solar:heart-linear" className='text-white text-[35px] mr-5' />
                                    <Icon icon="mdi-light:cart" className='text-white text-[35px]' />
                                </div>
                            </Col>
                        </Row>
                    )
                }
            </Container >
        </Row >
    );
}

export default Navbar;
