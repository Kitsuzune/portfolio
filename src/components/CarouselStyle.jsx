import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselStyle = ({ image, style = 'Classic' }) => {
  const defaultStyle = {
    className: "h-[400px] mx-16 rounded-3xl",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    keyBoardControl: true,
    minimumTouchDrag: 80,
    pauseOnHover: true,
    renderArrowsWhenDisabled: false,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30,
      },
    },
  };

  const carouselStyle = style === 'Classic' ? defaultStyle : { ...defaultStyle, ...style };

  return (
    <div className='w-full'>
      <Carousel {...carouselStyle}>
        <img src={image} alt='placeholder'/>
      </Carousel>
    </div>
  );
};

export default CarouselStyle;