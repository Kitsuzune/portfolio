import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GameSelection = () => {
    const navigate = useNavigate();
    const options = [
        { title: 'Jumping Bird', image: 'https://art.pixilart.com/af0783d894.png', link: '/itsu-game/v1/jumping-bird/' },
        { title: 'Coming Soon', image: 'https://st5.depositphotos.com/39261588/64733/i/450/depositphotos_647330328-stock-photo-modern-abstract-black-gold-background.jpg', link: '' },
        { title: 'Coming Soon', image: 'https://st5.depositphotos.com/39261588/64733/i/450/depositphotos_647330328-stock-photo-modern-abstract-black-gold-background.jpg', link: '' },
    ];

    return (
        <Container fluid>
            <Row className="flex justify-center items-center bg-[#0F0F0F] py-5">

                <Row className="mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="text-white text-4xl font-bold">Game Selection</h1>
                        <p className="text-gray-400 mt-3">More features coming soon...</p>
                    </Col>
                </Row>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="cursor-pointer relative w-full h-full bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => navigate(option.link)}
                        >
                            <img
                                src={option.image}
                                alt={option.title}
                                className="w-full h-full object-cover filter opacity-50 transition-all duration-300 ease-in-out hover:blur-lg hover:opacity-75"
                            />
                            <div className="absolute inset-0 flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                                <h2 className="text-white text-4xl font-bold">{option.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
};

export default GameSelection;
