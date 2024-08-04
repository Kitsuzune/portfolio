import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import aboutImage from '../assets/images/about-side.png'
import { Icon } from '@iconify/react/dist/iconify.js'
import fian from '../assets/images/fian.jpeg'

const About = () => {
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
                    <Col md={6} className="flex items-center">

                        <div className="text-white flex flex-col ml-5">
                            <span className="text-[54px] font-semibold">Our Story</span>

                            <span className="mt-4 text-[18px]">
                                Diluncurkan pada tahun 2024, IT'S U adalah pembuat belanja online terkemuka dengan kehadiran aktif di Indonesia. Didukung oleh berbagai solusi pemasaran, data, dan layanan yang disesuaikan, Serta melayani pelanggan di seluruh wilayah.
                            </span>

                            <span className="mt-3 text-[18px]">
                                IT'S U memiliki  berbagai macam produk untuk ditawarkan, berkembang dengan sangat cepat. IT'S U menawarkan beragam kategori mulai dari konsumen.
                            </span>
                        </div>

                    </Col>

                    <Col md={6} className="flex justify-center items-center">

                        <img src={aboutImage} alt="about" className="object-cover" />

                    </Col>
                </Row>

                <Row className="justify-content-center mx-auto text-center pt-11" style={{ marginTop: 90 }}>
                    <Col md={3} className="mb-4 mb-md-0 hover:bg-[#DB4444] hover:rounded-lg py-5">
                        <div className="flex flex-col items-center">
                            <div className="p-3 mb-3 bg-black rounded-full border-[#2F2E30] border-[15px]">
                                <Icon icon="tdesign:shop-5" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="mt-3 font-bold text-white">10.5K</h5>
                            <p className="text-white">Salles Active Our Listing</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-4 mb-md-0 hover:bg-[#DB4444] hover:rounded-lg py-5">
                        <div className="flex flex-col items-center">
                            <div className="p-3 mb-3 bg-black rounded-full border-[#2F2E30] border-[15px]">
                                <Icon icon="solar:dollar-bold" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="mt-3 font-bold text-white">33K</h5>
                            <p className="text-white">Monthly Product Site</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-4 mb-md-0 hover:bg-[#DB4444] hover:rounded-lg py-5">
                        <div className="flex flex-col items-center">
                            <div className="p-3 mb-3 bg-black rounded-full border-[#2F2E30] border-[15px]">
                                <Icon icon="solar:cart-2-broken" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="mt-3 font-bold text-white">45.5K</h5>
                            <p className="text-white">Customer Active in Our Site</p>
                        </div>
                    </Col>
                    <Col md={3} className="mb-4 mb-md-0 hover:bg-[#DB4444] hover:rounded-lg py-5">
                        <div className="flex flex-col items-center">
                            <div className="p-3 mb-3 bg-black rounded-full border-[#2F2E30] border-[15px]">
                                <Icon icon="healthicons:money-bag-outline" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="mt-3 font-bold text-white">25K</h5>
                            <p className="text-white">Anual Gross Sale in Our Site</p>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-center mx-auto text-center" style={{ marginTop: 90 }}>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <img src="https://media.licdn.com/dms/image/D5603AQFqsSOLRKNjdg/profile-displayphoto-shrink_800_800/0/1718961962298?e=1727308800&v=beta&t=AXnZWnUP-P7KA_Vmr2AiCeTi9Vlu9jZZE7tAWgj7qyQ" alt="Bowo" className="mb-3" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                            <h5 className="mt-3 font-bold text-white">Bowo</h5>
                            <p className="text-gray-400">Fullstack Developer</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <img src={fian} alt="Fian" className="mb-3" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                            <h5 className="mt-3 font-bold text-white">Fian</h5>
                            <p className="text-gray-400">Managing Director</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <img src="https://as2.ftcdn.net/v2/jpg/05/76/65/21/1000_F_576652189_WK1JiTOwjKCFIJDJJLI1Q6RtwSfpgspu.jpg" alt="Wildhan" className="mb-3" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
                            <h5 className="mt-3 font-bold text-white">Wildhan</h5>
                            <p className="text-gray-400">Product Designer</p>
                        </div>
                    </Col>
                </Row>

                <Row className="w-75 justify-content-center mx-auto text-center pt-11 pb-5" style={{ marginTop: 90 }}>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <div className="p-4 mb-3 bg-black rounded-full border-[#DB4444] border-4">
                                <Icon icon="mdi:truck-outline" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="font-bold text-white">FREE AND FAST DELIVERY</h5>
                            <p className="text-gray-400">Free delivery for all orders over $140</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <div className="p-4 mb-3 bg-black rounded-full border-[#DB4444] border-4">
                                <Icon icon="ph:watch-light" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="font-bold text-white">24/7 CUSTOMER SERVICE</h5>
                            <p className="text-gray-400">Friendly 24/7 customer support</p>
                        </div>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <div className="flex flex-col items-center">
                            <div className="p-4 mb-3 bg-black rounded-full border-[#DB4444] border-4">
                                <Icon icon="grommet-icons:money" style={{ fontSize: '40px', color: 'white' }} />
                            </div>
                            <h5 className="font-bold text-white">MONEY BACK GUARANTEE</h5>
                            <p className="text-gray-400">We return money within 30 days</p>
                        </div>
                    </Col>
                </Row>



            </div>
        </Container>
    )
}

export default About