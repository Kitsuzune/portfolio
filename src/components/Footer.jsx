import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='bg-black text-white p-5 flex-column justify-content-center'>
      <Row className='text-center text-md-start'>
        <Col md={3} className='mb-4'>
          <h5>IT'S U</h5>
          <p>Subscribe</p>
          <p>Seek Support By Contacting Us</p>
          <Button variant="outline-light" className='mt-2'>{'Send Suppot Email ->'}</Button>
        </Col>
        <Col md={3} className='mb-4'>
          <h5>Contact</h5>
          <p>111 Bowo, Fian, Wildan 1515, Jakarta.</p>
          <p>ITSU@gmail.com</p>
          <p>+62015-88888-9999</p>
        </Col>
        <Col md={3} className='mb-4'>
          <h5>Account</h5>
          <ul className='list-unstyled'>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </Col>
        <Col md={3} className='mb-4'>
          <h5>Quick Link</h5>
          <ul className='list-unstyled'>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </Col>
      </Row>
      <Row className='pt-4 border-top border-secondary'>
        <Col className='text-center'>
          <small>&copy; 2024 IT'S U. All Rights Reserved.</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
