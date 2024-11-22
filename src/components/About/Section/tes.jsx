// "use client"
// import { WavyBackground } from "./ui/wavy-background"
// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"
// import ScrollTrigger from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// function Hero() {

//     useGSAP(()=>{
//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".home",
//                 start: "top top",
//                 end: "bottom top",
//                 scrub: 3,
//                 pin: true,
//             }
//         })
//         tl.to(".vid",{
//             clipPath: 'circle(0% at 50% 50%)'
//         },'a')
//         tl.to(".bg",{
//             scale: 1
//         },'a')
//         tl.to(".lt",{
//             x: -250,
//             delay: 0.1
//         },'b')
//         tl.to(".rt",{
//             x: 250,
//             delay: 0.1
//         },'b')
//     })

//   return (
//     <div className="home w-full h-screen relative overflow-hidden">
//       <div className="vid z-[3] w-full h-full overflow-hidden" style={{clipPath: 'circle(100% at 50% 50%)'}}>
//         <video className="w-full h-full object-cover" autoPlay muted loop>
//             <source src="abstractbg.mp4" type="video/mp4"/>
//         </video>
//       </div>
//       <div className="bg z-[-1] scale-[3] w-full h-screen absolute top-0 left-0">
//         <WavyBackground>
//             <div className="flex flex-col gap-5">
//                 <div className="lt marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="rt -translate-x-[10%] marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                     <div className="elem flex gap-5">
//                         <h3 className="text-8xl font-semibold ">
//                             quikcss
//                         </h3>
//                         <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
//                             <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </WavyBackground>
//       </div>
//     </div>
//   )
// }

// export Hero

// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Me from './Section/Me';
// import TechStack from './Section/TechStack';
// import Contact from './Section/Contact';


// const TimelineSec = () => {
//     let component = useRef();
//     gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {

//         const tl1 = gsap.timeline();
//         tl1.fromTo(
//             ".about-me-content",
//             { opacity: 0 },
//             {
//                 scrollTrigger: {
//                     trigger: ".about-me-content",
//                     start: "top bottom",
//                     end: "top top",
//                     scrub: 1
//                 },
//                 opacity: 1,
//                 duration: 1
//             }
//         );

//         let ctx = gsap.context(() => {
//             const tl2 = gsap.timeline();
//             tl2.to(
//                 ".master-tl",
//                 {
//                     scrollTrigger: {
//                         trigger: ".about-me-image",
//                         endTrigger: ".tech-stack",
//                         end: "10% bottom",
//                         scrub: true,
//                         pin: ".about-me-image",
//                         // pinSpacing: true,
//                         markers: true,
//                     },
//                     zIndex: 10
//                 }
//             );

//             const tl3 = gsap.timeline({
//                 scrollTrigger: {
//                     pin: true, // pin the trigger element while active
//                     start: "top bottom",
//                     end: "bottom top",
//                     scrub: 4,
//                 },
//             });

//             tl3.fromTo(
//                 ".tech-row",
//                 {
//                     x: (index) => {
//                         return index % 2 === 0
//                             ? gsap.utils.random(600, 400)
//                             : gsap.utils.random(-600, -400);
//                     },
//                 },
//                 {
//                     x: (index) => {
//                         return index % 2 === 0
//                             ? gsap.utils.random(-600, -400)
//                             : gsap.utils.random(600, 400);
//                     },
//                     ease: "power1.inOut",
//                 },
//             );
            
//         }, component);
//         return () => ctx.revert();
//     }, []);

//     return (
//         <div ref={component} className="master-tl w-full" >
//             <div className="w-full lg:w-[90%] flex flex-col lg:flex-row">
//                 <Me />
//             </div>

//             <div className='w-full flex flex-col justify-center items-center bg-[#ff1616] z-20' style={{ zIndex: 20 }}>
//                 <TechStack />
//             </div>

//             <div className='w-full flex flex-col justify-center items-center z-20' style={{ zIndex: 20, clipPath: "circle(0% at 50% 50%)", }}>
//                 <Contact />
//             </div>
//         </div>
//     )
// }

// export TimelineSec