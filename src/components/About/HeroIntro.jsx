import React from 'react'
import { Shapes } from './3D/Shapes'
import { Row, Col } from 'react-bootstrap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const HeroIntro = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // Split the text into individual inline-block elements, preserving spaces
    const textElement = document.querySelector(".text-fullstack");
    const textContent = textElement.textContent;
    textElement.innerHTML = textContent.split("").map(letter => {
      if (letter === " ") {
        return `<span style="display: inline-block; width: 0.5em;">&nbsp;</span>`;
      }
      return `<span style="display: inline-block;">${letter}</span>`;
    }).join("");

    // Create a timeline for sequential animations
    const tl = gsap.timeline();

    // Animate each letter in sequence
    tl.fromTo(".text-fullstack span",
      { x: -100, opacity: 0, rotate: -10 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        ease: "elastic.out(1,0.3)",
        duration: 1,
        transformOrigin: "left top",
        stagger: 0.1, // Stagger each letter by 0.1 seconds in order
      }
    );

    // Animate the name-personal elements when text-fullstack is halfway
    tl.fromTo(".name-personal",
      {
        y: 20,
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: "elastic.out(1,0.3)",
      },
      "-=1.5" // Start 0.5 seconds before the text-fullstack animation ends
    );

  }, []);

  return (
    <div className="w-full md:w-[80%] md:py-16">
      <Row className='pt-10 md:pt-20 pb-10 md:pb-20 mb-10 md:mb-20'>
        <Col md={6} className="flex items-center">
          <div className="text-white flex flex-col ml-2 md:ml-5">
            <span className="text-fullstack text-[30px] md:text-[54px] font-semibold">FullStack Developer</span>
            <div className='flex items-center gap-1 md:gap-2 name-personal'>
              <span className='text-[40px] md:text-[90px] font-bold text-white' style={{ textShadow: '2px 3px 3px orange' }}>Teguh</span>
              <span className='text-[40px] md:text-[90px] font-bold text-orange-500 shadow-lg' style={{ textShadow: '1px 1px 2px black' }}>Wibowo</span>
            </div>
          </div>
        </Col>

        <Col md={6} className="flex items-center">
          <div className='w-full h-[300px] md:h-[500px]'>
            <Shapes />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeroIntro