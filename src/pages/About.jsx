import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import HeroIntro from '../components/About/HeroIntro';
import TimelineSec from '../components/About/TimelineSec';
import Intro3D from '../components/About/Intro3D';
const About = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <Container fluid className="w-full flex flex-col justify-center items-center m-0 px-0">
            {/* <div className="w-full flex justify-center items-center bg-[#0F0F0F]">
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
                </div>
            </div> */}


            <div className="w-full flex justify-center items-center bg-[#0F0F0F]">
                <HeroIntro />
            </div>

            <div className='w-full flex justify-center items-center'>
                <TimelineSec />
            </div>


        </Container >
    )
}

export default About
