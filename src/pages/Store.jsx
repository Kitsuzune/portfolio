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
import { useNavigate } from "react-router-dom";
import NumberFormatter from "../hooks/numberFormatter";
import {
  getProduct,
  getProductByBestSeller,
  getThisMonthBanner,
  getHomeCarousel,
  getExploreProduct,
  getNewArrival01,
  getNewArrival02,
  getNewArrival03,
  getNewArrival04,
} from "../api";


const Store = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [thisMonthBanner, setThisMonthBanner] = useState([]);
  const [homeCarousel, setHomeCarousel] = useState([]);
  const [exploreProduct, setExploreProduct] = useState([]);
  const [newArrival01, setNewArrival01] = useState([]);
  const [newArrival02, setNewArrival02] = useState([]);
  const [newArrival03, setNewArrival03] = useState([]);
  const [newArrival04, setNewArrival04] = useState([]);

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

  useEffect(() => {
    const fetchBestSellingProducts = async () => {
      try {
        const response = await getProductByBestSeller();
        setBestSellingProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error('Error fetching best selling products:', error);
      }
    };

    fetchBestSellingProducts();
  }, []);

  useEffect(() => {
    const fetchAllBanners = async () => {
      try {
        const thisMonthBannerResponse = await getThisMonthBanner();
        setThisMonthBanner(thisMonthBannerResponse.data.banner);
        const homeCarouselResponse = await getHomeCarousel();
        setHomeCarousel(homeCarouselResponse.data.banners);
        console.log(homeCarouselResponse.data.banners.image);
        const exploreProductResponse = await getExploreProduct();
        setExploreProduct(exploreProductResponse.data.banner);
        const newArrival01Response = await getNewArrival01();
        setNewArrival01(newArrival01Response.data.banner);
        const newArrival02Response = await getNewArrival02();
        setNewArrival02(newArrival02Response.data.banner);
        const newArrival03Response = await getNewArrival03();
        setNewArrival03(newArrival03Response.data.banner);
        const newArrival04Response = await getNewArrival04();
        setNewArrival04(newArrival04Response.data.banner);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    }

    fetchAllBanners();
  }, []);

  return (
    <Container fluid className="bg-[#0F0F0F] m-0 px-0">
      <Row fluid className="pb-10">
        {/* <CarouselStyle image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format" /> */}
        <Row fluid className="pb-10">
          {homeCarousel.image && (
            <CarouselStyle images={homeCarousel.image} />
          )}
        </Row>

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
          <div className="flex overflow-x-auto bg-gray-100 bg-opacity-10 rounded-lg px-2 py-4 ">
            <ScrollMenu>
              {products.map((product, index) => (
                <Card className="mx-4 cursor-pointer hover:scale-95 transition-all duration-300" style={{ border: 0 }} key={index} onClick={() => navigate('/product/' + product.id)}>
                  <Row className="bg-white rounded-t-lg">
                    <img
                      src={product.productImage}
                      style={{
                        width: 200,
                        height: 200,
                      }}
                      className="object-cover p-0 m-0 rounded-t-lg"
                    />
                  </Row>
                  <Row className="bg-black w-[200px] py-2 rounded-b-lg">
                    <span className="text-white text-[14px] font-sans">
                      {product.name.length > 20
                        ? product.name.substring(0, 20) + '...'
                        : product.name}
                    </span>
                    <span className="text-[#DB4444] text-[14px] font-sans">
                      Rp. <NumberFormatter number={product.price} />
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
                        value={product.rating}
                      />
                      <span className="text-white text-[18px] font-sans flex items-center">
                        ({product.rating})
                      </span>
                    </div>
                  </Row>
                </Card>
              ))}
            </ScrollMenu>
          </div>
        </Row>

        <Row>
          <div className="flex justify-center w-full mt-4">
            <button className="bg-[#DB4444] hover:bg-[#DB4444]/80 transition-all duration-300 text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]" onClick={() => navigate('/market')}>
              View All Product
            </button>
          </div>
        </Row>
      </Row>


      {/* // This Month's Best Selling Product */}
      <Row fluid className="py-10 mt-5">
        <div className="h-[450px] w-full rounded-3xl flex justify-center items-center">
          <img
            src={thisMonthBanner?.image}
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
            <button className="bg-[#DB4444] hover:bg-[#DB4444]/80 transition-all duration-300 text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]" onClick={() => navigate('/market')}>
              View All
            </button>
          </Col>
        </Row>

        <Row className="py-3 flex justify-center">
          {bestSellingProducts.map((product, index) => (
            <Card
              className="mx-4 mb-4 w-auto cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-white rounded-lg hover:shadow-lg hover:shadow-white"
              key={index}
              onClick={() => navigate('/product/' + product.id)}
            >
              <Row>
                <img
                  src={product.productImage}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                  className="object-cover m-0 p-0 rounded-t-lg"
                />
              </Row>
              <Row className="bg-black w-[200px] py-2 rounded-b-lg border-t-2 border-white ">
                <span className="text-white text-[14px] font-sans">
                  {product.name.length > 20
                    ? product.name.substring(0, 20) + '...'
                    : product.name}
                </span>
                <span className="text-[#DB4444] text-[14px] font-sans">
                  Rp. <NumberFormatter number={product.price} />
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
                    value={product.rating}
                  />
                  <span className="text-white text-[18px] font-sans flex items-center">
                    ({product.rating})
                  </span>
                </div>
              </Row>
            </Card>
          ))}
        </Row>
      </Row>


      {/* // Explore Our Product */}
      <Row fluid className="py-10 mt-5">
        <div className="h-[450px] w-full rounded-3xl flex justify-center items-center">
          <img
            src={exploreProduct?.image}
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
              className="mx-4 mb-4 w-auto cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-white rounded-lg hover:shadow-lg hover:shadow-white"
              key={index}
              onClick={() => navigate('/product/' + product.id)}
            >
              <Row>
                <img
                  src={product.productImage}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                  className="object-cover m-0 p-0 rounded-t-lg"
                />
              </Row>
              <Row className="bg-black w-[200px] py-2 rounded-b-lg border-t-2 border-white">
                <span className="text-white text-[14px] font-sans">
                  {/* {product.name} */}
                  {product.name.length > 20
                    ? product.name.substring(0, 20) + '...'
                    : product.name}
                </span>
                <span className="text-[#DB4444] text-[14px] font-sans">
                  Rp. <NumberFormatter number={product.price} />
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
                    value={product.rating}
                  />
                  <span className="text-white text-[18px] font-sans flex items-center">
                    ({product.rating})
                  </span>
                </div>
              </Row>
            </Card>
          ))}
        </Row>

        <Row>
          <div className="flex justify-center w-full mt-4">
            <button className="bg-[#DB4444] hover:bg-[#DB4444]/80 transition-all duration-300 text-white text-[18px] font-sans px-20 h-[70px] rounded-[4px]" onClick={() => navigate('/market')}>
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

        <Row className='g-4 mb-5 pb-5'>
          <Col md={6}>
            <div className='relative h-full'>
              <img
                src={newArrival01?.image}
                alt="Source Code"
                className='w-full h-full opacity-15'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
              <div className='absolute bottom-4 left-4 text-white'>
                <h3 className='text-2xl'>Source Code</h3>
                <p>
                  A collection of source code for your project.
                </p>
                <Button variant='light' className='mt-2'>Shop Now</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Row className='g-4'>
              <Col md={12}>
                <div className='relative'>
                  <img
                    src={newArrival02?.image}
                    alt="Canvas Collections"
                    className='w-full h-auto opacity-15'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Course Material</h3>
                    <p>
                      Learn from the best. Without high price.
                    </p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='relative'>
                  <img
                    src={newArrival03?.image}
                    alt="Lukisan"
                    className='w-full h-auto opacity-15'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Digital Game Key</h3>
                    <p>
                      Purchase your favorite game.
                    </p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className='relative'>
                  <img
                    src={newArrival04?.image}
                    alt="Lukisan"
                    className='w-full h-auto opacity-15'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                  <div className='absolute bottom-4 left-4 text-white'>
                    <h3 className='text-2xl'>Game Item</h3>
                    <p>
                      A Pair of microtransation.
                    </p>
                    <Button variant='light' className='mt-2'>Shop Now</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </Row>

    </Container>
  );
};

export default Store;
