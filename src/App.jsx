import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import AppRoutes from './Route';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [counter, setCounter] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(() => {
    const introComplete = localStorage.getItem('introComplete') === 'true';
    const lastIntroTime = localStorage.getItem('lastIntroTime');
    const oneHour = 60 * 60 * 1000;
    return introComplete && (Date.now() - lastIntroTime < oneHour);
  });

  useEffect(() => {
    if (!isIntroComplete) {
      const interval = setInterval(() => {
        setCounter(prevCounter => {
          if (prevCounter < 100) {
            return prevCounter + 1;
          } else {
            clearInterval(interval);
            return prevCounter;
          }
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isIntroComplete]);

  useEffect(() => {
    if (counter === 100 && !isIntroComplete) {
      gsap.to(".counter-intro", { 
        opacity: 0, 
        duration: 1, 
        onComplete: () => {
          setTimeout(() => {
            document.querySelector(".counter-intro").style.display = "none";
            document.querySelector(".overlay-intro").style.display = "none";
            localStorage.setItem('introComplete', 'true');
            localStorage.setItem('lastIntroTime', Date.now());
            setIsIntroComplete(true);
          }, 3500);
        }
      });
      gsap.to(".bar", {
        delay: 3,
        height: 0,
        stagger: {
          amount: 0.5
        },
        ease: "power4.inOut"
      });
    }
  }, [counter, isIntroComplete]);

  return (
    <>
      {!isIntroComplete && (
        <div className="overlay-intro fixed w-screen h-screen z-50 flex">
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
          <div className='bar' />
        </div>
      )}

      {!isIntroComplete && (
        <div className="counter-intro">
          {counter}.
        </div>
      )}
      {!isAdminRoute && <Navbar />}
      <AppRoutes />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
