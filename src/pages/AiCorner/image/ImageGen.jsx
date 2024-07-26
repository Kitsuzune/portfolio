import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ImageGen = () => {
    const apiKey = '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';
    const [prompt, setPrompt] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState(false);
    const [productType, setProductType] = useState('');
    const [checkout, setCheckout] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setImage(null);
        setOrder(false);
        setProductType('');
        setCheckout(false);

        const fullPrompt = `${prompt}`;

        try {
            const response = await axios.post(
                'https://api-inference.huggingface.co/models/prompthero/openjourney',
                { inputs: fullPrompt },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    },
                    responseType: 'blob',
                }
            );

            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const imgUrl = URL.createObjectURL(blob);
            setImage(imgUrl);
        } catch (error) {
            alert('Failed to generate image!');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const downloadImage = (imgUrl) => {
        const link = document.createElement('a');
        link.href = imgUrl;
        link.download = 'generated-image.jpg';
        link.click();
    };

    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48 pt-12">
            <div className="w-[90%]">
                <Row className="mb-5">
                    <Col md={12} className="text-center">
                        <h1 className="text-white text-4xl font-bold">AI Image Generator</h1>
                        <p className="text-gray-400 mt-3">Generate images based on your input prompt</p>
                    </Col>
                </Row>

                <Row className="mb-5 justify-center">
                    <Col md={8}>
                        <div className="bg-[#1A1A1A] p-5 rounded-lg flex items-center">
                            <input
                                type="text"
                                placeholder="Enter your prompt here..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                className="w-full p-3 bg-[#333] text-white rounded-lg focus:outline-none"
                            />
                            <button
                                onClick={handleGenerate}
                                className="ml-4 p-3 bg-red-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-red-600"
                                disabled={loading}
                            >
                                {loading ? 'Generating...' : 'Generate'}
                            </button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="text-center flex justify-center">
                        {loading && <p className="text-gray-400">Generating image...</p>}
                        {image && (
                            <div className="relative">
                                <img
                                    src={image}
                                    alt="Generated"
                                    className="object-cover rounded-lg mb-4"
                                    onClick={() => downloadImage(image)}
                                />

                                <div className='bg-[#1A1A1A] p-5 rounded-lg'>
                                    <button
                                        onClick={() => downloadImage(image)}
                                        className="mb-4 p-2 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-600"
                                    >
                                        Download Image
                                    </button>
                                    {!order && (
                                        <div>
                                            <p className="text-gray-400 mb-4">Do you want to order this custom image product?</p>
                                            <button
                                                onClick={() => setOrder(true)}
                                                className="mb-4 p-2 mr-2 px-5 bg-green-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-green-600"
                                            >
                                                Yes
                                            </button>
                                            <button
                                                onClick={() => setImage(null)}
                                                className="mb-4 p-2 px-5 bg-red-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-red-600"
                                            >
                                                No
                                            </button>
                                        </div>
                                    )}
                                    {order && !productType && (
                                        <div className='flex flex-col gap-4'>
                                            <p className="text-gray-400">Select product type:</p>
                                            <div className='flex gap-4 justify-center'>
                                                <button
                                                    onClick={() => setProductType('canvas')}
                                                    className="mb-2 p-2 bg-purple-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-purple-600"
                                                >
                                                    Canvas
                                                </button>
                                                <button
                                                    onClick={() => setProductType('painting')}
                                                    className="mb-2 p-2 bg-yellow-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600"
                                                >
                                                    Painting
                                                </button>
                                                <button
                                                    onClick={() => setProductType('plain clothes')}
                                                    className="mb-2 p-2 bg-pink-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-pink-600"
                                                >
                                                    Plain Clothes
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {productType && !checkout && (
                                        <div>
                                            <p className="text-gray-400 mb-4">You selected: {productType}</p>
                                            <button
                                                onClick={() => setCheckout(true)}
                                                className="mb-4 p-2 bg-orange-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-orange-600"
                                            >
                                                Checkout
                                            </button>
                                        </div>
                                    )}
                                    {checkout && (
                                        <p className="text-gray-400">Proceeding to checkout...</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ImageGen;
