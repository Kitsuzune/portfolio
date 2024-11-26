import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import awan1 from '../assets/images/awan1.png'
import awan2 from '../assets/images/awan2.png'
import awan3 from '../assets/images/awan3.png'
import op1 from '../assets/images/op1.png'
import op2 from '../assets/images/op2.png'
import op3 from '../assets/images/op3.png'
import eska1 from '../assets/images/eska1.png'
import eska2 from '../assets/images/eska2.png'
import eska3 from '../assets/images/eska3.png'
import Contact from '../components/About/Section/Contact';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const breadcrumbs = useBreadcrumbs();
    const component = useRef();

    useEffect(() => {
        const updateParallax = ({ x, y }) => {
            gsap.set(document.documentElement, {
                '--x': gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
                '--y': gsap.utils.mapRange(0, window.innerHeight, -1, 1, y),
            });
        };

        const handleOrientation = ({ beta, gamma }) => {
            const isLandscape = window.matchMedia('(orientation: landscape)').matches;
            gsap.set(document.documentElement, {
                '--x': gsap.utils.clamp(
                    -1,
                    1,
                    isLandscape
                        ? gsap.utils.mapRange(-45, 45, -1, 1, beta)
                        : gsap.utils.mapRange(-45, 45, -1, 1, gamma)
                ),
                '--y': gsap.utils.clamp(
                    -1,
                    1,
                    isLandscape
                        ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma))
                        : gsap.utils.mapRange(20, 70, 1, -1, beta)
                ),
            });
        };

        window.addEventListener('mousemove', updateParallax);

        const startDeviceOrientation = () => {
            if (DeviceOrientationEvent?.requestPermission) {
                DeviceOrientationEvent.requestPermission().then((response) => {
                    if (response === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                });
            } else {
                window.addEventListener('deviceorientation', handleOrientation);
            }
        };

        document.body.addEventListener('click', startDeviceOrientation, { once: true });

        return () => {
            window.removeEventListener('mousemove', updateParallax);
            window.removeEventListener('deviceorientation', handleOrientation);
        };
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Select all elements with the class 'card-projects'
            const cards = document.querySelectorAll(".card-projects");

            // Loop through each card and apply the animation
            cards.forEach((card, index) => {
                gsap.fromTo(card, {
                    opacity: 0,
                    y: 50,
                    rotate: 3
                }, {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    duration: 1,
                    // delay: index * 0.2, // Add a delay for staggered animation
                    scrollTrigger: {
                        trigger: card,
                        // markers: true,
                        start: "45% 90%",
                        end: "45% 70%",
                        scrub: 1
                    }
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "50% bottom",
                    end: "center center",
                    scrub: 2,
                }
            });

            tl.to(".contact-section", { clipPath: "circle(100% at 50% 50%)" }, "reveal");

        }, component);
        return () => ctx.revert();
    }, []);


    return (
        <Container ref={component} fluid className="bg-[#0F0F0F] w-full flex flex-col items-center justify-center m-0 px-0">
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
                    <Col md={12}>

                        <div>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-white text-[40px] font-medium inline-block'>
                                    Projects
                                </span>
                                <span className='text-white text-[18px] mb-2'>
                                    Here are some of my projects that I have worked on.
                                </span>
                            </div>
                        </div>

                    </Col>

                </Row>
            </div>

            <div className="w-[90%] md:w-[70%]">

                {/* Awan Kusuma */}

                <div className='bg-slate-500 bg-opacity-30 rounded-xl p-5 mt-28 orange_border card-projects'>
                    <Row className='mt-5'>
                        <Col xs={12} md={5} className='flex items-center'>
                            <div>
                                <div className='flex items-center'>
                                    <span className='text-white font-audiowide text-[60px]'>
                                        01
                                    </span>
                                </div>

                                <div className='flex flex-col'>
                                    <span className="text-[42px] text-white font-bold inline-block">
                                        Virtual Office Order & Company Profile
                                    </span>

                                    <span className="text-[18px] text-white mt-3">
                                        Awan Kusuma is a company that provides virtual office services and company profiles.
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={7} className='d-none d-lg-block'>
                            <div>
                                <div className='flex items-center justify-center'>

                                    <div className="border-2 rounded-xl orange_border">
                                        <div className='relative rounded-xl w-[500px] h-[240px] overflow-hidden'>
                                            <img
                                                src="https://img.freepik.com/premium-photo/road-closeup-bokeh-background_206268-1785.jpg"
                                                alt="Background"
                                                className="absolute scale-x-125 w-[600px] h-[300px] object-cover saturate-[1.5] brightness-90 pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 30px)) calc(43% + (var(--y) * -20px))',
                                                    zIndex: 1,
                                                }}
                                            />

                                            <img
                                                src="https://www.pngkey.com/png/full/68-684285_office-people-png-freeuse-download-professional-with-laptop.png"
                                                alt="Foreground"
                                                className="absolute w-[500px] h-[240px] object-cover pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))',
                                                    zIndex: 2,
                                                }}
                                            />

                                            <h3
                                                // className="absolute top-6 left-1/2 text-8xl font-bold uppercase text-white translate-x-[-50%]"
                                                className='absolute bottom-2 left-1/2 text-5xl font-bold uppercase text-[#d8ad50] translate-x-[-50%]'
                                                style={{
                                                    transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                                                    zIndex: 3,
                                                }}
                                            >
                                                Awan Kusuma
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={12} className='flex flex-col items-center'>
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between'>
                                    <div className='bg-white rounded-xl'>
                                        <img src={awan1} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={awan2} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={awan3} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col md={6} xs={12}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Overview
                                </span>

                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Live Website</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <a href="https://www.awankusuma.com" className='text-orange-500'>https://www.awankusuma.com</a></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Source Code</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <span className='text-red-500'>Confidential</span></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Technology</span>
                                    <div className='flex'> <span className='hidden md:inline'>:</span>
                                        <ul className='list-disc list-inside m-0'>
                                            <li>FrontEnd
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>NextJS</li>
                                                    <li>TailwindCSS</li>
                                                </ul>
                                            </li>
                                            <li>Backend
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>NestJS</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} xs={12}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Description
                                </span>

                                <span className='text-[18px] text-white mt-1 text-justify indent-10'>
                                    Awan Kusuma is a company that provides virtual office services and company profiles. This website is a website that provides information about the company and the services they provide. This Website developed with 3 service, which are the main website, cms (admin panel), and api (backend).
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* OttoOperator / OttoAdmin */}

                <div className='bg-slate-500 bg-opacity-30 rounded-xl p-5 mt-28 orange_border card-projects'>
                    <Row className='mt-5'>

                        <Col xs={12} md={7} className='d-none d-lg-block'>
                            <div>
                                <div className='flex items-center justify-center'>

                                    <div className="border-2 rounded-xl orange_border">
                                        <div className='relative rounded-xl w-[500px] h-[240px] overflow-hidden'>
                                            <img
                                                src="https://ottoparking.id/img/banner/1.webp"
                                                alt="Background"
                                                className="absolute scale-x-125 w-[600px] h-[300px] object-cover saturate-[1.5] brightness-90 pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 30px)) calc(43% + (var(--y) * -20px))',
                                                    zIndex: 1,
                                                }}
                                            />

                                            <img
                                                src="https://www.freeiconspng.com/uploads/black-audi-car-png-17.png"
                                                alt="Foreground"
                                                className="absolute w-[500px] h-[240px] object-cover pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))',
                                                    zIndex: 2,
                                                }}
                                            />

                                            <h3
                                                // className="absolute top-6 left-1/2 text-8xl font-bold uppercase text-white translate-x-[-50%]"
                                                className='absolute bottom-2 left-1/2 text-5xl font-bold uppercase text-[#ca3434] translate-x-[-50%]'
                                                style={{
                                                    transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                                                    zIndex: 3,
                                                }}
                                            >
                                                Otto Parking
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={5} className='flex items-center'>
                            <div>
                                <div className='flex items-center'>
                                    <span className='text-white font-audiowide text-[60px]'>
                                        02
                                    </span>
                                </div>

                                <div className='flex flex-col'>
                                    <span className="text-[42px] text-white font-bold inline-block">
                                        Parking Management System Integration
                                    </span>

                                    <span className="text-[18px] text-white mt-3">
                                        OttoOperator is a parking management system that provides a parking management system for parking lots.
                                    </span>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <Row className='mt-5'>
                        <Col md={12} className='flex flex-col items-center'>
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between'>
                                    <div className='bg-white rounded-xl'>
                                        <img src={op1} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={op2} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={op3} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col md={6}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Overview
                                </span>

                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Live Website</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <a href="https://ottoparking.id/" className='text-orange-500'>https://ottoparking.id/</a></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Source Code</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <span className='text-red-500'>Confidential</span></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Technology</span>
                                    <div className='flex'><span className='hidden md:inline'>:</span>
                                        <ul className='list-disc list-inside m-0'>
                                            <li>FrontEnd
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>NextJS</li>
                                                    <li>TailwindCSS</li>
                                                    <li>React Prime UI</li>
                                                </ul>
                                            </li>
                                            <li>Backend
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>Laravel 11</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Description
                                </span>

                                <span className='text-[18px] text-white mt-1 text-justify indent-10'>
                                    PT Meta Media Infranusantara itself is a sub unit of PT Nusantara Infrastructure, which has decades of experience in infrastructure development in Indonesia, one of which is toll road management.
                                    Armed with experience in Toll Road management and the development of cash to non-cash (cashless) payment systems, where we already have workshops and human resources who are qualified in developing an integrated payment system, we believe we can meet every need in parking lot management (Management and Payment system).
                                    One of the keys to our success is that OTTO Parking combines the latest technologies in all aspects of parking management to make every property owner and parking service user one without any restrictions combined in a program and service facility.
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* ESKA */}

                <div className='bg-slate-500 bg-opacity-30 rounded-xl p-5 mt-28 orange_border card-projects'>
                    <Row className='mt-5'>
                        <Col xs={12} md={5} className='flex items-center'>
                            <div>
                                <div className='flex items-center'>
                                    <span className='text-white font-audiowide text-[60px]'>
                                        03
                                    </span>
                                </div>

                                <div className='flex flex-col'>
                                    <span className="text-[42px] text-white font-bold inline-block">
                                        E-SKA Website Improvement
                                    </span>

                                    <span className="text-[18px] text-white mt-3">
                                        A Certificate of Origin (SKA) or commonly called a Certificate of Origin (COO) is a certification of the origin of goods.
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={7} className='d-none d-lg-block'>
                            <div>
                                <div className='flex items-center justify-center'>

                                    <div className="border-2 rounded-xl orange_border">
                                        <div className='relative rounded-xl w-[500px] h-[240px] overflow-hidden'>
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Sea_Landscape_-_panoramio.jpg"
                                                alt="Background"
                                                className="absolute scale-x-125 w-[600px] h-[300px] object-cover saturate-[1.5] brightness-90 pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 30px)) calc(43% + (var(--y) * -20px))',
                                                    zIndex: 1,
                                                }}
                                            />

                                            <img
                                                src="https://pngate.com/wp-content/uploads/2023/11/Big-blue-container-ship.png"
                                                alt="Foreground"
                                                className="absolute w-[500px] h-[240px] object-cover pointer-events-none"
                                                style={{
                                                    objectPosition: 'calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px))',
                                                    zIndex: 2,
                                                }}
                                            />

                                            <h3
                                                // className="absolute top-6 left-1/2 text-8xl font-bold uppercase text-white translate-x-[-50%]"
                                                className='absolute bottom-2 left-1/2 text-5xl font-bold uppercase text-white translate-x-[-50%]'
                                                style={{
                                                    transform: 'translate(calc(-50% + (var(--x) * -30px)), calc(var(--y) * -20px))',
                                                    zIndex: 3,
                                                }}
                                            >
                                                E-SKA
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col md={12} className='flex flex-col items-center'>
                            <div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-between'>
                                    <div className='bg-white rounded-xl'>
                                        <img src={eska1} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={eska2} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                    <div className='bg-white rounded-xl'>
                                        <img src={eska3} alt="Background" className='object-cover w-full h-[200px] rounded-xl orange_border_2' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col md={6} xs={12}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Overview
                                </span>

                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Live Website</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <a href="https://ska.kemendag.go.id/" className='text-orange-500'>https://ska.kemendag.go.id/</a></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Source Code</span>
                                    <div className='flex-1'> <span className='hidden md:inline'>:</span> <span className='text-red-500'>Confidential</span></div>
                                </div>
                                <div className='text-[18px] text-white mt-1 flex flex-col sm:flex-row'>
                                    <span className='w-32'>Technology</span>
                                    <div className='flex'> <span className='hidden md:inline'>:</span>
                                        <ul className='list-disc list-inside m-0'>
                                            <li>FrontEnd
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>ReactJS</li>
                                                    <li>Bootstrap</li>
                                                </ul>
                                            </li>
                                            <li>Backend
                                                <ul className='list-disc list-inside ml-4'>
                                                    <li>ExpressJS</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} xs={12}>
                            <div className='flex flex-col'>
                                <span className='text-[29px] text-white font-bold inline-block'>
                                    Projects Description
                                </span>

                                <span className='text-[18px] text-white mt-1 text-justify indent-10'>
                                    The e-SKA (Electronic Certificate of Origin Service) is an official online platform by Indonesia's Ministry of Trade designed to facilitate the issuance and verification of Certificates of Origin (COO) for export goods. This system supports exporters by enabling the submission of various SKA forms electronically, aligned with international trade agreements such as Form A, Form D, and Form E. It also includes features for verification, access to regulatory updates, and guidance through tutorials. The service ensures efficiency and compliance with trade requirements, accessible at e-SKA
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Many Others */}

                <div className='bg-slate-500 bg-opacity-30 rounded-xl p-5 mt-10'>
                    <Row>
                        <Col md={12}>
                            <div className='flex flex-col justify-center items-center'>
                                <span className='text-white text-[40px] font-medium inline-block mb-10'>
                                    And Many Others
                                </span>

                                <Button
                                    variant='outline-light'
                                    onClick={() => {
                                        window.open('https://github.com/Kitsuzune', '_blank');
                                    }}
                                >
                                    Check Github Pages
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

            <div className='w-full'>
                <div
                    className="w-full flex flex-col justify-center items-center z-10 contact-section"
                    style={{
                        clipPath: "circle(0% at 50% 50%)",
                    }}
                >
                    <Contact />
                </div>

            </div>
        </Container>
    );
};

export default Projects;
