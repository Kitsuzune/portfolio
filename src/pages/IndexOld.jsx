import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import GridLines from 'react-gridlines';
import Spline from '@splinetool/react-spline';
import lamp from '../assets/images/object-4.png'
import cloud from '../assets/images/cloud-bg.png'
import pseudo from '../assets/images/pseudo.png'
import CarouselCustom from '../components/Carousel.jsx';

const IndexOld = () => {

    const spline = useRef();

    function onLoad(splineApp) {
        spline.current = splineApp;
    }


    return (
        <Container fluid className='m-0 p-0'>

            <Container fluid className='bg-home' style={{ height: '200vh' }}>

                <GridLines className="grid-area" cellWidth={50} strokeWidth={5} lineColor='rgba(255, 255, 255, 0.03)'>




                    <Row className='p-[10px] xl:px-[250px] d-flex justify-content-center'>
                        <img src={cloud} alt='cloud' style={{ position: 'absolute', width: "90%", top: 100 }} className='d-flex justify-content-center align-items-center' />
                        <Col md={6} xl={4} className='d-flex justify-content-center align-items-center'>
                            <Row>
                                <span style={{ fontSize: 50, fontWeight: 600, lineHeight: 1, position: 'relative', display: 'block' }} className='text-white'>
                                    Where
                                    <img src={lamp} alt='lamp' style={{ width: 100, position: 'absolute', top: -30, display: 'inline' }} />
                                    <br />
                                    Creativity Meets
                                    <br />
                                    Functionality!
                                </span>
                                <span style={{ fontSize: 15 }} className='text-white'>
                                    Crafting Digital Dreams: Where Ideas Meet Design
                                </span>
                            </Row>
                        </Col>



                        <Col md={6} xl={8}>
                            <Spline
                                scene="https://prod.spline.design/ovpRKPr76Xzcq3Aw/scene.splinecode"
                                onLoad={onLoad}
                                style={{ width: '100%', height: '500px' }}
                            />

                        </Col>
                    </Row>

                    <Row className='p-[10px] xl:px-[350px] py-[200px]'>

                        <Row>
                            <Col md={6} className='py-2'>
                                <img src={pseudo} alt='pseudo' className='pb-2'/>

                                <span style={{ fontSize: 35, fontWeight: 600, lineHeight: 1, position: 'relative', display: 'block' }} className='text-white'>
                                    We’ve More Then 254+
                                    <br />
                                    Global Partners
                                </span>

                            </Col>

                            <Col md={6} className='text-[#A8ADB3] flex justify-center items-center'>
                                <span>
                                    Sed ut perspiciatis unde omnis natus error voluptatem santium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                    ab nllo inventore veritatis quasi architecto beatae vitae
                                </span>
                            </Col>
                        </Row>

                        <hr className='border-[2px] border-[#A8ADB3] my-4' />

                        <CarouselCustom />

                    </Row>

                </GridLines>

            </Container>

        </Container>
    )
}

export default IndexOld