import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Footer = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const authUser = useAuthUser();
  return (
    <Container fluid className="bg-black text-white p-5 flex-column justify-content-center">
      <Row className="text-center text-md-start">
        <Col md={3} className="mb-4">
          <h5>IT'S U</h5>
          <p>Subscribe</p>
          <p>Seek Support By Contacting Us</p>
          <Button variant="outline-light" className="mt-2">
            {'Send Suppot Email ->'}
          </Button>
        </Col>
        <Col md={3} className="mb-4">
          <h5>Contact</h5>
          <p>111 Bowo, Fian, Wildan 1515, Jakarta.</p>
          <p>ITSU@gmail.com</p>
          <p>+62015-88888-9999</p>
        </Col>
        <Col md={3} className="mb-4">
          <h5>Account</h5>
          <ul className="list-unstyled">
            {isAuthenticated && <li>My Account</li>}
            {!isAuthenticated && (
              <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/login')}>
                Login / Register
              </li>
            )}
            <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/cart')}>
              Cart
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/wishlist')}>
              Wishlist
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/market')}>
              Shop
            </li>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h5>Quick Link</h5>
          <ul className="list-unstyled">
            <li>Contact</li>
          </ul>
        </Col>
      </Row>
      <Row className="pt-4 border-top border-secondary">
        <Col className="text-center">
          <small>&copy; 2024 IT'S U. All Rights Reserved.</small>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
