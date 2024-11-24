import React, { useState } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Web3Submit } from '../api';

const Contact = () => {
    const breadcrumbs = useBreadcrumbs();
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.get('name')) newErrors.name = 'Name is required';
        if (!formData.get('email')) newErrors.email = 'Email is required';
        if (!formData.get('phone')) newErrors.phone = 'Phone is required';
        if (!formData.get('message')) newErrors.message = 'Message is required';
        return newErrors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            console.log(process.env.REACT_APP_URL_WEB3FORMS_ACCESS_KEY);
            const res = await Web3Submit(formData);

            if (res.data.success) {
                console.log("Success", res.data);
                setShowModal(true);
                event.target.reset();
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex justify-center m-0 px-0 pb-48">
            <div className="w-[90%]">

                <Row>
                    <Col md={6} className="py-4">
                        {breadcrumbs.map(({ match, breadcrumb }, index) => (
                            <li key={index + 1} className="inline-flex items-center">
                                <Link
                                    className={`text-decoration-none ${index === breadcrumbs.length - 1
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {breadcrumb}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <span className="mx-2 text-gray-500">/</span>
                                )}
                            </li>
                        ))}
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={6}>

                        {/* <div className="">
                            <div className="p-4 mb-3 bg-black rounded-full border-[#DB4444] border-4">
                                <Icon icon="grommet-icons:money" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="font-bold text-white">MONEY BACK GUARANTEE</h5>
                            <p className="text-gray-400">We return money within 30 days</p>
                        </div> */}
                        <div>
                            <div className='flex items-center'>
                                <div className="p-[10px] bg-red-500 rounded-full">
                                    <Icon icon="solar:phone-linear" style={{ fontSize: '30px', color: 'white' }} />
                                </div>
                                <span className="text-white ml-5 text-[20px]">Inquiry Open 24/7</span>
                            </div>

                            <div className='mt-4 flex flex-col'>
                                <span className="text-[18px] text-white">
                                    Hi, I'm Ready To Help You Whenever You Need
                                </span>
                                <span className="text-[18px] text-white mt-3">
                                    Call Me By Whatsapp At +62 896 6467 5764
                                </span>
                            </div>
                        </div>

                        <div className='mt-5 pt-5'>
                            <div className='flex items-center'>
                                <div className="p-[10px] bg-red-500 rounded-full">
                                    <Icon icon="octicon:mail-24" style={{ fontSize: '30px', color: 'white' }} />
                                </div>
                                <span className="text-white ml-5 text-[20px]">Write Your Opinion</span>
                            </div>

                            <div className='mt-4 flex flex-col'>
                                <span className="text-[18px] text-white">
                                    Fill out the form below and I will contact you if you have any questions.
                                </span>
                                <span className="text-[18px] text-white mt-3">
                                    Simply fill this form -&gt;
                                </span>
                            </div>
                        </div>

                    </Col>

                    <Col md={6} className="flex items-center">

                        <form className="p-5 rounded" onSubmit={onSubmit}>
                            <Row className="mb-4">
                                <Col>
                                    <input type="text" name="name" placeholder="Your Name *" className="w-full p-3 bg-white text-black rounded" />

                                </Col>
                                <Col>
                                    <input type="email" name="email" placeholder="Your Email *" className="w-full p-3 bg-white text-black rounded" />

                                </Col>
                                <Col>
                                    <input type="text" name="phone" placeholder="Your Phone *" className="w-full p-3 bg-white text-black rounded" />

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <textarea name="message" placeholder="Your Message" className="w-full p-3 bg-white text-black rounded h-32"></textarea>

                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col className='flex flex-col'>
                                    <button type="submit" className="w-full p-3 bg-red-500 text-white rounded mb-2">Send Message</button>
                                    {errors.name && <span className="text-red-500">*{errors.name}</span>}
                                    {errors.email && <span className="text-red-500">*{errors.email}</span>}
                                    {errors.phone && <span className="text-red-500">*{errors.phone}</span>}
                                    {errors.message && <span className="text-red-500">*{errors.message}</span>}
                                </Col>
                            </Row>
                        </form>

                    </Col>
                </Row>

            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your message has been sent successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default Contact