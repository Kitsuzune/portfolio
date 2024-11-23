import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { BentoGrid } from "react-bento";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactPlayer from 'react-player';
import BNSP from '../assets/videos/BNSP.mp4';
import JAVA from '../assets/videos/JAVA.mp4';
import CCNA from '../assets/videos/CCNA.mp4';
import MSIB from '../assets/videos/KM6.mp4';
import IGC from '../assets/videos/IGC.mp4';
import ANM from '../assets/videos/ANM.mp4';
import { FaAngellist, FaAviato, FaCode, FaGraduationCap, FaNetworkWired } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/About/Section/Contact';

const Education = () => {
    const breadcrumbs = useBreadcrumbs();
    const bentoItems = [
        {
            id: 1,
            title: "BNSP Software Engineering",
            element: (
                <React.Fragment>
                    <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                        <ReactPlayer
                            url={BNSP}
                            controls={false}
                            width="100%"
                            height="100%"
                            playing={true}
                            muted={true}
                            loop={true}
                            config={{
                                file: {
                                    attributes: {
                                        style: { height: "100%", objectFit: "cover" },
                                    },
                                },
                            }}
                        />
                        <div className='relative z-20 w-full'>
                            <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-2'>
                                (2024)
                                <br />
                                BNSP Software Engineering
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ),
            width: 1,
            height: 4,
        },
        {
            id: 2,
            title: "Oracle Java Essential",
            element: (
                <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                    <ReactPlayer
                        url={JAVA}
                        controls={false}
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        loop={true}
                        config={{
                            file: {
                                attributes: {
                                    style: { height: "100%", width: "100%", objectFit: "cover" },
                                },
                            },
                        }}
                    />
                    <div className='relative z-20 w-full'>
                        <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-5'>
                            (2023)
                            Oracle Java Essential
                        </div>
                    </div>
                </div>
            ),
            width: 2,
            height: 2,
        },
        {
            id: 3,
            title: "NetAcad CCNA",
            element: (
                <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                    <ReactPlayer
                        url={CCNA}
                        controls={false}
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        loop={true}
                        config={{
                            file: {
                                attributes: {
                                    style: { height: "100%", width: "100%", objectFit: "cover" },
                                },
                            },
                        }}
                    />
                    <div className='relative z-20 w-full'>
                        <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-5'>
                            (2022)
                            NetAcad CCNA
                        </div>
                    </div>
                </div>
            ),
            width: 1,
            height: 2,
        },
        {
            id: 4,
            title: "Kampus Merdeka MSIB Batch 6",
            element: (
                <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                    <ReactPlayer
                        url={MSIB}
                        controls={false}
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        loop={true}
                        config={{
                            file: {
                                attributes: {
                                    style: { height: "100%", width: "100%", objectFit: "cover" },
                                },
                            },
                        }}
                    />
                    <div className='relative z-20 w-full'>
                        <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-5'>
                            (2024)
                            Kampus Merdeka MSIB Batch 6
                        </div>
                    </div>
                </div>
            ),
            width: 1,
            height: 2,
        },
        {
            id: 5,
            title: "Indonesia Geospatial Challenge 2021 Finalist",
            element: (
                <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                    <ReactPlayer
                        url={IGC}
                        controls={false}
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        loop={true}
                        config={{
                            file: {
                                attributes: {
                                    style: { height: "100%", width: "100%", objectFit: "cover" },
                                },
                            },
                        }}
                    />
                    <div className='relative z-20 w-full'>
                        <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-5'>
                            (2021)
                            Indonesia Geospatial Challenge 2021 Finalist
                        </div>
                    </div>
                </div>
            ),
            width: 2,
            height: 2,
        },
        {
            id: 6,
            title: "More",
            element: (
                <div className='w-full h-full flex flex-col justify-center items-center rounded-2xl relative'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10'></div>
                    <ReactPlayer
                        url={ANM}
                        controls={false}
                        width="100%"
                        height="100%"
                        playing={true}
                        muted={true}
                        loop={true}
                        config={{
                            file: {
                                attributes: {
                                    style: { height: "100%", width: "100%", objectFit: "cover" },
                                },
                            },
                        }}
                    />
                    <div className='relative z-20 w-full'>
                        <div className='text-black bg-white text-[20px] flex flex-col justify-center items-center font-medium text-center pb-5'>
                            And Others
                        </div>
                    </div>
                </div>
            ),
            width: 4,
            height: 1,
        }
    ];

    let component = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {

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
        <Container ref={component} fluid className="bg-[#0F0F0F] w-full flex flex-col justify-center items-center m-0 px-0">
            <div className="w-[90%] pb-48">

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

                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-white text-[40px] font-medium inline-block mb-10'>
                                Certifications
                            </span>

                            <BentoGrid
                                items={bentoItems}
                                gridCols={4}
                                rowHeight={100}
                                classNames={{
                                    container: "w-full h-full p-0 m-0 ",
                                    elementContainer: "w-full h-full p-0 m-0 hover:scale-105 hover:shadow-xl shadow-white transition-all duration-300",
                                }}
                            />
                        </div>

                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={12}>

                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-white text-[40px] font-medium inline-block my-10'>
                                Education
                            </span>

                            <VerticalTimeline>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#CC2B52', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #CC2B52' }}
                                    date="2021 - 2024"
                                    iconStyle={{ background: '#CC2B52', color: '#fff' }}
                                    icon={<FaGraduationCap />}
                                >
                                    <h3 className="vertical-timeline-element-title">Mercu Buana University</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                                    <p>
                                        Bachelor of Science in Information Systems (S1)
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2024"
                                    contentStyle={{ background: '#16423C', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #16423C' }}
                                    iconStyle={{ background: '#16423C', color: '#fff' }}
                                    icon={<FaCode />}
                                >
                                    <h3 className="vertical-timeline-element-title">Dicoding IDCamp Front-End Web Development</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                                    <p>
                                        Complete Course About Front-End Web Development Held By Dicoding Indonesia
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2023"
                                    contentStyle={{ background: '#605EA1', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #605EA1' }}
                                    iconStyle={{ background: '#605EA1', color: '#fff' }}
                                    icon={<FaNetworkWired />}
                                >
                                    <h3 className="vertical-timeline-element-title">DTS TSA Kemenkominfo</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                                    <p>
                                        A Programming Intensive Course Introduced By Government
                                    </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date="2023"
                                    contentStyle={{ background: '#D74B76', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #D74B76' }}
                                    iconStyle={{ background: '#D74B76', color: '#fff' }}
                                    icon={<FaNetworkWired />}
                                >
                                    <h3 className="vertical-timeline-element-title">Progate Python Programming</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
                                    <p>
                                        3 Month Offline Training As Data Analyst Held By Progate Indonesia
                                    </p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>

                    </Col>
                </Row>
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
    )
}

export default Education