import React, { Suspense, useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Shapes } from './3D/Shapes'
import { Canvas } from '@react-three/fiber';
import { Environment, Helper, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Char from './3D/Char';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Intro3D = () => {
  const charRef = useRef();

  useEffect(() => {
    if (charRef.current) {
      const { actions } = charRef.current;

      // Assuming the animation you want to control is named 'intro'
      const introAction = actions['Intro'];

      if (introAction) {
        introAction.reset().fadeIn(0.5).play();

        ScrollTrigger.create({
          trigger: '.w-full', // Adjust this selector to your needs
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,  
          onUpdate: (self) => {
            introAction.timeScale(self.direction);
            introAction.paused = false;
            introAction.time(self.progress * introAction.getClip().duration);
          },
        });
      }
    }
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
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 1]} />
              <Char ref={charRef} scale={1} position={[0, -1.5, 0]} />
              <Environment preset="forest" />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </Col>
      </Row>
    </div>
  )
}

export default Intro3D