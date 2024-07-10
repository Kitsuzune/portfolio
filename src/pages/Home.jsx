import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Carousel from "react-multi-carousel";
import CarouselStyle from "../components/CarouselStyle";
import Countdown from "react-countdown";
import ReactStars from "react-rating-stars-component";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Icon } from '@iconify/react/dist/iconify.js'
import { getProduct } from "../api";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduct(1, 10);
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container fluid className="bg-[#0F0F0F] m-0 px-0">
      <Row fluid className="pb-10">
        <CarouselStyle image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format" />
      </Row>

      {/* // Flash Sale */}
      <Row className="w-75 justify-content-center mx-auto">
        <Row>
          <Col md={12} className="flex gap-3">
            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
              Today's
            </span>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="flex gap-[60px]">
            <span className="text-white text-[40px] font-sans fw-bold flex items-end">
              Flash Sales
            </span>
            <span className="text-white text-[24px] font-sans fw-bold">
              <Countdown
                date={Date.now() + 100000000}
                intervalDelay={0}
                precision={3}
                renderer={(props) => (
                  <div className="flex text-white gap-3">
                    <div className="flex-1">
                      <div className="text-[14px]">Days</div>
                      <div className="text-[40px] fw-medium">
                        {props.days < 10 ? `0${props.days}` : props.days}
                      </div>
                    </div>
                    <div className="flex items-end text-[35px] text-[#DB4444]">
                      :
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px]">Hours</div>
                      <div className="text-[40px] fw-medium">
                        {props.hours < 10 ? `0${props.hours}` : props.hours}
                      </div>
                    </div>
                    <div className="flex items-end text-[35px] text-[#DB4444]">
                      :
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px]">Minutes</div>
                      <div className="text-[40px] fw-medium">
                        {props.minutes < 10
                          ? `0${props.minutes}`
                          : props.minutes}
                      </div>
                    </div>
                    <div className="flex items-end text-[35px] text-[#DB4444]">
                      :
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px]">Seconds</div>
                      <div className="text-[40px] fw-medium">
                        {props.seconds < 10
                          ? `0${props.seconds}`
                          : props.seconds}
                      </div>
                    </div>
                  </div>
                )}
              />
            </span>
          </Col>
        </Row>

        <Row className="py-3">
          <ScrollMenu>
            {products.map((product, index) => (
              <Card className="mx-4" style={{ border: 0 }} key={index}>
                <Row className="bg-white rounded-t-lg">
                  <img
                    src={product.productImage}
                    style={{
                      width: 200,
                      height: 200,
                    }}
                  />
                </Row>
                <Row className="bg-black w-[200px] py-2 rounded-b-lg">
                  <span className="text-white text-[14px] font-sans">
                    {product.name}
                  </span>
                  <span className="text-[#DB4444] text-[14px] font-sans">
                    Rp.{product.price}
                  </span>
                  <div className="flex w-auto">
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <span className="text-white text-[18px] font-sans flex items-center">
                      (0)
                    </span>
                  </div>
                </Row>
              </Card>
            ))}
          </ScrollMenu>
        </Row>

        <Row>
          <div className="flex justify-center w-full mt-4">
            <button className="bg-[#DB4444] text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]" onClick={() => navigate('/market')}>
              View All Product
            </button>
          </div>
        </Row>
      </Row>


      {/* // This Month's Best Selling Product */}
      <Row fluid className="py-10 mt-5">
        <div className="h-[450px] w-full rounded-3xl flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg"
            className="h-full w-[90%] object-cover rounded-3xl"
          />
        </div>
      </Row>

      <Row className="w-75 justify-content-center mx-auto">
        <Row>
          <Col md={12} className="flex gap-3">
            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
              This Months
            </span>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={6}>
            <span className="text-white text-[40px] font-sans font-medium flex items-end">
              Best Selling Product
            </span>
          </Col>
          <Col md={6} className="flex justify-end">
            <button className="bg-[#DB4444] text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]">
              View All
            </button>
          </Col>
        </Row>

        <Row className="py-3 flex justify-center">
          {products.map((product, index) => (
            <Card
              className="mx-4 mb-4 w-auto"
              style={{ border: 0 }}
              key={index}
            >
              <Row>
                <img
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              </Row>
              <Row className="bg-black w-[200px] py-2">
                <span className="text-white text-[14px] font-sans">
                  Product Name
                </span>
                <span className="text-[#DB4444] text-[14px] font-sans">
                  Rp.90000
                </span>
                <div className="flex w-auto">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <span className="text-white text-[18px] font-sans flex items-center">
                    (0)
                  </span>
                </div>
              </Row>
            </Card>
          ))}
        </Row>

        <Row>
          <div className="flex justify-center w-full mt-4">
            <button className="bg-[#DB4444] text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]">
              View All Product
            </button>
          </div>
        </Row>
      </Row>


      {/* // Explore Our Product */}
      <Row fluid className="py-10 mt-5">
        <div className="h-[450px] w-full rounded-3xl flex justify-center items-center">
          <img
            src="https://t4.ftcdn.net/jpg/06/20/18/63/360_F_620186329_8mjJMsPcZQm5dSgVlMoZM0qQocHL7AZC.jpg"
            className="h-full w-[90%] object-cover rounded-3xl"
          />
        </div>
      </Row>

      <Row className="w-75 justify-content-center mx-auto">
        <Row>
          <Col md={12} className="flex gap-3">
            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
              Our Products
            </span>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={12}>
            <span className="text-white text-[40px] font-sans font-medium flex items-end">
              Explore Our Products
            </span>
          </Col>
        </Row>

        <Row className="py-3 flex justify-center">
          {products.map((product, index) => (
            <Card
              className="mx-4 mb-4 w-auto"
              style={{ border: 0 }}
              key={index}
            >
              <Row>
                <img
                  src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              </Row>
              <Row className="bg-black w-[200px] py-2">
                <span className="text-white text-[14px] font-sans">
                  Product Name
                </span>
                <span className="text-[#DB4444] text-[14px] font-sans">
                  Rp.90000
                </span>
                <div className="flex w-auto">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <span className="text-white text-[18px] font-sans flex items-center">
                    (0)
                  </span>
                </div>
              </Row>
            </Card>
          ))}
        </Row>

        <Row>
          <div className="flex justify-center w-full mt-4">
            <button className="bg-[#DB4444] text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]">
              View All Product
            </button>
          </div>
        </Row>
      </Row>


      {/* // New Arrival */}
      <Row className="w-75 justify-content-center mx-auto mt-5">
        <Row>
          <Col md={12} className="flex gap-3">
            <div className="rounded-[4px] w-[10px] h-[50px] bg-[#DB4444]" />
            <span className="text-[#DB4444] text-[24px] font-sans fw-bold flex items-center">
              Featured
            </span>
          </Col>
        </Row>

        <Row className="py-3">
          <Col md={12}>
            <span className="text-white text-[40px] font-sans font-medium flex items-end">
              New Arrival
            </span>
          </Col>
        </Row>

        <Row className='g-4'>
          <Col md={6}>
            <div className='relative h-full'>
              <img
                src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user"
                alt="Lukisan Kanvas"
                className='w-full h-full'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
              <div className='absolute bottom-4 left-4 text-white'>
                <h3 className='text-2xl'>Lukisan Kanvas</h3>
                <p>Beautiful and nice canvas painting</p>
                <Button variant='light' className='mt-2'>Shop Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Row className='g-4'>
              <Col md={12}>
                <div className='relative'>
                  <img
                    src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user"
                    alt="Canvas Collections"
                    className='w-full h-auto'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Canvas Collections</h3>
                    <p>Featured canvas collections that give you another vibe.</p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='relative'>
                  <img
                    src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user"
                    alt="Lukisan"
                    className='w-full h-auto'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Lukisan</h3>
                    <p>Original painting</p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='relative'>
                  <img
                    src="https://img.freepik.com/free-photo/anime-style-character-space_23-2151133952.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user"
                    alt="Lukisan"
                    className='w-full h-auto'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Lukisan</h3>
                    <p>Original painting</p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </Row>


      {/* // Optional */}
      <Row className="w-75 justify-content-center mx-auto text-center" style={{ marginTop: 90 }}>
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

    </Container>
  );
};

export default Home;
