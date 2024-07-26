import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const Contact = () => {
    const breadcrumbs = useBreadcrumbs();

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
                                <span className="text-white ml-5 text-[20px]">Call To Us</span>
                            </div>

                            <div className='mt-4 flex flex-col'>
                                <span className="text-[18px] text-white">We are available 24/7, 7 days a week.</span>
                                <span className="text-[18px] text-white mt-3">Call us at 08123456789</span>
                            </div>
                        </div>

                        <div className='mt-5 pt-5'>
                            <div className='flex items-center'>
                                <div className="p-[10px] bg-red-500 rounded-full">
                                    <Icon icon="octicon:mail-24" style={{ fontSize: '30px', color: 'white' }} />
                                </div>
                                <span className="text-white ml-5 text-[20px]">Write To Us</span>
                            </div>

                            <div className='mt-4 flex flex-col'>
                                <span className="text-[18px] text-white">Fill out our form and we will contact you within 24 hours.</span>
                                <span className="text-[18px] text-white mt-3">Emails: customer@IT’S U.com</span>
                            </div>
                        </div>

                    </Col>

                    <Col md={6} className="flex items-center">

                        <form className="p-5 rounded">
                            <Row className="mb-4">
                                <Col>
                                    <input type="text" placeholder="Your Name *" className="w-full p-3 bg-white text-black rounded" />
                                </Col>
                                <Col>
                                    <input type="email" placeholder="Your Email *" className="w-full p-3 bg-white text-black rounded" />
                                </Col>
                                <Col>
                                    <input type="text" placeholder="Your Phone *" className="w-full p-3 bg-white text-black rounded" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <textarea placeholder="Your Message" className="w-full p-3 bg-white text-black rounded h-32"></textarea>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <button type="submit" className="w-full p-3 bg-red-500 text-white rounded">Send Message</button>
                                </Col>
                            </Row>
                        </form>

                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default Contact