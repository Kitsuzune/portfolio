import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Me from './Section/Me';
import TechStack from './Section/TechStack';
import Contact from './Section/Contact';


const TimelineSec = () => {
    let component = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        const tl1 = gsap.timeline();
        if (!isMobile) {
        tl1.fromTo(
            ".about-me-content",
            { opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".about-me-content",
                    start: "top bottom",
                    end: "top top",
                    scrub: 1
                },
                opacity: 1,
                    duration: 1
                }
            );
        }

        let ctx = gsap.context(() => {
            const tl2 = gsap.timeline();
            if (!isMobile) {
            tl2.to(
                ".master-tl",
                {
                    scrollTrigger: {
                        trigger: ".about-me-image",
                        endTrigger: ".tech-stack",
                        end: "10% bottom",
                        scrub: true,
                        pin: !isMobile ? ".about-me-image" : false,
                        // pinSpacing: true,
                        // markers: true,
                    },
                    zIndex: 10
                }
                );
            }

            const tl3 = gsap.timeline({
                scrollTrigger: {
                    pin: true, // pin the trigger element while active
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl3.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "power1.inOut",
                },
            );

            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact-section",
                    start: "50% bottom",
                    end: "center center",
                    scrub: 2,
                    // markers: true,
                }
            });
            tl4.to(".contact-section", { clipPath: "circle(100% at 50% 50%)" }, "reveal");

            if (!isMobile) {
            tl4.fromTo(
                ".about-me-content",
                { opacity: 0 },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".about-me-content",
                        start: "top bottom",
                        end: "top top",
                        scrub: 1,
                    },
                    }
                );
            }
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={component} className="master-tl w-full" >
            <div className="w-full lg:w-[90%] flex flex-col lg:flex-row">
                <Me />
            </div>
            
            <div
                className="w-full flex flex-col justify-center items-center bg-transparent z-20"
            >
                <TechStack />
            </div>
            <div
                className="w-full flex flex-col justify-center items-center z-10 contact-section"
                style={{
                    clipPath: "circle(0% at 50% 50%)",
                }}
            >
                <Contact />
            </div>
        </div>
    )
}

export default TimelineSec