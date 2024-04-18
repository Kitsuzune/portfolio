
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Navbar() {
  return (
    <Container>
        <Row className='w-[90%] mx-auto'>
            <Col md={2} className='d-flex justify-content-start align-items-center'>
                <span className='text-white font-sans fw-bold text-[24px]'>
                    IT'S U
                </span>
            </Col>

            <Col md={6} className='d-flex justify-content-center gap-5 align-items-center'>
                <span className='text-white text-[16px]'>
                    ABOUT
                </span>

                <span className='text-white text-[16px]'>
                    ABOUT
                </span>

                <span className='text-white text-[16px]'>
                    ABOUT
                </span>

                <span className='text-white text-[16px]'>
                    ABOUT
                </span>
                
            </Col>

            <Col md={4} className='d-flex justify-content-end align-items-center'>

                <div className='mr-5 bg-white w-[60%] rounded-[4px] h-full p-2'>
                    <div className='d-flex justify-content-center align-items-center h-full mx-2'>
                        <input type='text' placeholder='What are you looking for?' className='bg-transparent border-0 w-full h-full outline-none' />
                        <Icon icon="iconamoon:search-thin" className='text-black text-[35px]' />
                    </div>
                </div>

                <Icon icon="solar:heart-linear" className='text-white text-[35px] mr-5' />
                <Icon icon="mdi-light:cart" className='text-white text-[35px]' />
            </Col>
        </Row>
    </Container>
  )
}

export default Navbar