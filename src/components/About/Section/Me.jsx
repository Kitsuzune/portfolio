import Particles, { initParticlesEngine } from '@tsparticles/react';
import React, { useEffect, useState } from 'react'
import { FaCloud, FaChartBar, FaLock, FaCode, FaLaptop } from 'react-icons/fa';
import { loadBasic } from "@tsparticles/basic"

const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-100">
        <div className="text-blue-500 text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-500 font-semibold">
            Learn More <span aria-hidden="true">→</span>
        </a>
    </div>
);

const Me = () => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            // await loadFull(engine);
            // await loadSlim(engine);
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className='about-me-content relative bg-transparent px-4 lg:px-10 pt-10 lg:pt-20 pb-5 lg:pb-10 flex flex-col lg:flex-row'>
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: {
                        // enable: false,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: "#F5F5F5",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            // value: "#ffffff",
                            // orange
                            value: "#FF7F50",
                        },
                        links: {
                            // color: "#ffffff",
                            // orange
                            color: "#FF7F50",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {/* Overlapping Image */}
            <div className='about-me-image block lg:absolute -top-20 lg:-top-40 left-0 lg:left-40 w-full lg:w-[450px] z-10 order-1 lg:order-none'>
                <div className='lg:rounded-md lg:bg-gradient-to-r lg:from-orange-500 lg:via-red-500 lg:to-yellow-500 lg:p-1 lg:w-full h-full lg:shadow-lg'>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQFqsSOLRKNjdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718961962298?e=1738800000&v=beta&t=l0VdQizgPg57Irzw6upkALl-mqNE1DDbRXrN_fdZoVU"
                        alt="Profile"
                        className="first-letter:rounded-lg shadow-lg object-cover h-60 lg:h-[700px] w-full lg:w-auto"
                    />
                </div>
            </div>

            {/* About Me Content */}
            <div className="about-me-text mt-10 lg:ml-[630px] order-2 lg:order-none my-52">
                <span className="text-[36px] lg:text-[54px] font-semibold">About Me</span>
                <span className='text-[16px] lg:text-[24px] inline-block text-justify indent-5 lg:indent-10'>
                    Hey, I’m Bowo! I grew up in the Jakarta and love all things creative. From the misty forests to the vibrant city streets, my surroundings have always fueled my passion for design and coding. As a self-taught developer, I found my calling in blending artistic flair with technical skill. My journey has led me to specialize in FullStack development, where I craft interactive experiences that are not just functional, but more importantly all aspects of the web application like performance, security, and scalability.
                    When I'm not coding, you'll find me experimenting with digital art or exploring the latest in web animation.
                    <br />
                    <br />
                    Join me as I continue to push the boundaries of what's possible in the digital world! Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or build scalable cloud-native. A List of Services I Offer:
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    <ServiceCard
                        icon={<FaCode />}
                        title="BackEnd API Development"
                        description="I can help you build scalable and secure backend systems for your web applications."
                    />
                    <ServiceCard
                        icon={<FaCode />}
                        title="FrontEnd Design & Implementation"
                        description="I can help you design and implement the frontend of your web applications to provide a seamless user experience."
                    />
                    <ServiceCard
                        icon={<FaCode />}
                        title="FullStack Development"
                        description="Mix with both frontend and backend, I can help you build scalable and secure web applications from scratch."
                    />
                    <ServiceCard
                        icon={<FaCloud />}
                        title="Cloud Computing Solutions"
                        description="I can help you migrate to the cloud, optimize your existing infrastructure, or build scalable cloud-native."
                    />
                    <ServiceCard
                        icon={<FaChartBar />}
                        title="Data Science & AI"
                        description="I can help you unlock actionable insights and drive informed decision-making with advanced data analytics and business intelligence services."
                    />
                    <ServiceCard
                        icon={<FaLaptop />}
                        title="Hardware Support"
                        description="I can help you fix any hardware issues you have either on your local machine or server."
                    />
                </div>

            </div>
        </div>
    )
}

export default Me