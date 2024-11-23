import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const authUser = useAuthUser();
  return (
    <Container fluid className="bg-black text-white p-5 flex-column justify-content-center">
      <Row className="text-center text-md-start">
        <Col md={3} className="mb-4">
          <h5>テグーウィボヲ</h5>
          {/* <p>As キツズネ</p>
          <p>Seek Support By Contacting Us</p>
          <Button variant="outline-light" className="mt-2" onClick={() => navigate('/contact')}>
            {'Send Suppot Email ->'}
          </Button> */}
          <ul className="list-unstyled">
            <li className="cursor-pointer">
              As キツズネ
            </li>
            <li className="cursor-pointer">
              Seek Support By Contacting Me
            </li>
            <Button variant="outline-light" className="mt-2" onClick={() => window.open('mailto:teguhwmn189@gmail.com', '_blank')}>
              {'Send Suppot Email ->'}
            </Button>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span 
                  className="text-decoration-none hover:text-red-500 transition duration-200 cursor-pointer"
                  onClick={() => window.open('mailto:teguhwmn189@gmail.com', '_blank')}
                >
                  teguhwmn189@gmail.com
                </span>
              </div>
            </li>
            {/* <li>+62 896 6467 5764</li> */}
            <li>
              <div className="flex items-center gap-2">
                <FaWhatsapp />
                <span className="text-decoration-none hover:text-red-500 transition duration-200 cursor-pointer" 
                  onClick={() => window.open('https://wa.me/6289664675764', '_blank')}
                >
                  +62 896 6467 5764
                </span>
              </div>
            </li>
          </ul>
        </Col>
        <Col md={3} className="mb-4">
          <h5>Account</h5>
          <ul className="list-unstyled">
            {isAuthenticated && <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/profile')}>My Account</li>}
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
            <li className="cursor-pointer hover:text-red-500 transition duration-200" onClick={() => navigate('/contact')}>
              Contact
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="pt-4 border-top border-secondary">
        <Col className="text-center">
          <small>&copy; 2024 Teguh Wibowo All Rights Reserved.</small>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
