import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <Container fluid className='bg-black'>
        
        <Row fluid className='bg-[#0F0F0F] py-5'>

            <Navbar />

        </Row>

    </Container>
  )
}

export default Home