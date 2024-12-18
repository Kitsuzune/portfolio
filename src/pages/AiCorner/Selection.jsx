import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AiSelection = () => {
    const navigate = useNavigate();
    const options = [
        { title: 'Image Generation', image: 'https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp', link: '/ai/v1/image-gen' },
        { title: 'Coming Soon', image: 'https://www.blipcut.com/images/product/vincent-video/header-pic.png', link: '' },
        { title: 'Coming Soon', image: 'https://rareconnections.io/wp-content/uploads/2023/08/AI-music-video-generators.webp', link: '' },
    ];

    return (
        <Container fluid>
            <Row className="flex justify-center items-center bg-[#0F0F0F] py-5">

                <Row className="mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="text-white text-4xl font-bold">AI Feature Selection</h1>
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
                                className="w-full h-full object-cover filter blur-lg opacity-50 transition-all duration-300 ease-in-out hover:blur-sm hover:opacity-75"
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

export default AiSelection;
