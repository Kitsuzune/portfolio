import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FaCoffee } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/About/Section/Contact';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Pt. Nusantara Infrastructure Tbk",
        duration: "Feb 2024 - Jun 2024",
        description: [
            "Assisting in the development and maintenance of web applications using Node.js",
            "Led the development of the OttoParking website, utilizing Next.js for the front-end to create a modern, responsive, and user-friendly interface.",
            "Expanded the OttoParking project by developing OttoOperator mobile apps, providing APIs to support mobile functionality.",
            "Implemented the back-end using the latest Laravel 11, ensuring robust and scalable server-side logic and data management.",
            "Collaborated closely with mobile developers to create and integrate APIs, facilitating seamless communication between the mobile app and server.",
            "Conducted comprehensive testing and debugging of both web and mobile applications to ensure high-quality and reliable performance.",
            "Integrated various third-party services and APIs to enhance the capabilities and user experience of the applications.",
            "Managed project timelines and deliverables, ensuring on-time completion of milestones and project goals."
        ],
        logo: "https://www.nusantarainfrastructure.com/assets/images/release/large/press_release_1595916487_6_large.jpeg",
        durationLabel: "6 Months"
    },
    {
        title: "Full Stack Developer",
        company: "PT Nusantara Compnet Integrator",
        duration: "Jan 2024 - Jun 2024",
        description: [
            "Managed the Kemendag (Kementerian Perdagangan) project, ensuring the delivery of robust and efficient solutions.",
            "Developed and maintained the front-end of the application using React, creating responsive and user-friendly interfaces.",
            "Implemented the back-end using Express.js, ensuring seamless integration with front-end components.",
            "Collaborated closely with stakeholders to gather requirements and translate them into technical specifications.",
            "Integrated various APIs and third-party services to enhance the functionality and user experience of the application.",
            "Worked with cross-functional teams to ensure timely delivery of project milestones and objectives.",
            "Optimized application performance and scalability to handle a large number of concurrent users.",
            "Kept abreast of the latest trends and advancements in React and Express.js development to implement best practices."
        ],
        logo: "https://www.compnet.co.id/wp-content/uploads/2022/05/about-us-1-1.png",
        durationLabel: "6 Months"
    },
    {
        title: "Fullstack Engineer",
        company: "PT. Vanz Inovatif Teknologi",
        duration: "Des 2023 - Jun 2024",
        description: [
            "Spearheaded the development of hybrid applications using React Native, React.js, and Next.js, ensuring seamless performance across web and mobile platforms.",
            "Innovated and implemented progressive features for mobile applications, optimizing user experience and engagement.",
            "Collaborated cross-functionally to conceptualize and deliver high-quality solutions aligned with client objectives and industry standards.",
            "Leveraged React Native and associated technologies to design and develop dynamic mobile interfaces, enhancing usability and functionality.",
            "Conducted rigorous testing and debugging procedures, ensuring robustness and reliability in both web and mobile applications.",
            "Integrated third-party APIs and services to expand application capabilities and drive enhanced user experiences.",
            "Actively contributed to architectural discussions and problem-solving sessions to create scalable and efficient solutions.",
            "Keeping up-to-date with the latest industry trends and best practices in Node.js development."
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujKCwwnkClIU6iZgY-taQQHNu2pnWaG0HuA&s",
        durationLabel: "6 Months"
    },
    {
        title: "Fullstack Developer",
        company: "PT. MX Solution Indonesia",
        duration: "Jun 2023 - Nov 2023",
        description: [
            "Assisting in the development and maintenance of web applications using Node.js",
            "Developin A Cross Functional Application With React JS As Front-End & Express As Back-End",
            "Collaborating with the development team to understand and analyze system requirements",
            "Implementing efficient and scalable solutions using Node.js and related technologies",
            "Optimizing application performance by identifying and resolving bottlenecks",
            "Integrating APIs and third-party services to enhance functionality and user experience",
            "Working closely with designers and UX/UI team to ensure visually appealing and intuitive interfaces",
            "Conducting thorough testing and debugging to ensure high-quality and error-free code",
            "Participating in code reviews and providing constructive feedback to improve overall codebase",
            "Keeping up-to-date with the latest industry trends and best practices in Node.js development"
        ],
        logo: "https://vulcanpost.com/wp-content/uploads/2022/09/binance-mxglobal-001-1024x536.jpeg",
        durationLabel: "6 Months"
    },
    {
        title: "BackEnd Developer",
        company: "PT. Sentra Support Service",
        duration: "Jun 2022 - Des 2022",
        description: [
            "Developed and maintained web applications using PHP With Ikatan Advokat Indonesia (Ikadin)",
            "Collaborated with the development team to analyze system requirements and propose effective solutions",
            "Implemented database architecture and optimized queries for efficient data retrieval",
            "Created and maintained APIs to facilitate seamless integration with external systems",
            "Worked closely with designers and UX/UI team to implement visually appealing and user-friendly interfaces",
            "Collaborated with cross-functional teams to deliver projects within specified timelines and budget constraints"
        ],
        logo: "https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2022/09/d843c687c37a27c9e96b756407e43c90.jpg",
        durationLabel: "6 Months"
    },
    {
        title: "Wordpress Developer",
        company: "Worklab (PT Muda Maju Berkreasi)",
        duration: "Sep 2021 - Jan 2022",
        description: [
            "Created and customized WordPress themes and plugins to meet client requirements",
            "Implemented responsive designs to ensure optimal user experience across different devices",
            "Managed website content and updates using WordPress CMS",
            "Conducted thorough testing and debugging to identify and resolve issues",
            "Provided technical support and guidance to clients regarding WordPress usage and best practices"
        ],
        logo: "https://www.ixoraseo.com/wp-content/uploads/2023/09/wordpress-developer-adalah.jpg",
        durationLabel: "6 Months"
    }

];

const Experience = () => {
    const breadcrumbs = useBreadcrumbs();
    const cardRefs = useRef([]);
    const labelRefs = useRef([]);
    const logoRefs = useRef([]);

    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(card, {
                opacity: 0,
                y: 50,
                rotate: 3
            }, {
                opacity: 1,
                y: 0,
                rotate: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "top 70%",
                    scrub: 2
                }
            });
        });

        labelRefs.current.forEach((label, index) => {
            gsap.fromTo(label, {
                opacity: 0,
                x: -50,
                y: 50,
                rotate: 70
            }, {
                opacity: 1,
                x: 0,
                y: 0,
                rotate: -6,
                duration: 1,
                stagger: 3,
                scrollTrigger: {
                    trigger: label,
                    start: "top 80%",
                    end: "top 65%",
                    scrub: 2,
                }
            });
        });

        logoRefs.current.forEach((logo, index) => {
            gsap.fromTo(logo, {
                rotate: 15
            }, {
                rotate: -6,
                duration: 1,
                scrollTrigger: {
                    trigger: logo,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 2
                }
            });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-section",
                start: "50% bottom",
                end: "center center",
                scrub: 2,
            }
        });

        tl.to(".contact-section", { clipPath: "circle(100% at 50% 50%)" }, "reveal");
    }, []);

    return (
        <Container fluid className="bg-[#0F0F0F] w-full flex flex-col justify-center items-center m-0 px-0">
            <div className="w-[90%]">

                <Row>
                    <Col md={6} className="py-4">
                        {breadcrumbs.map(({ match, breadcrumb }, index) => (
                            <li key={index + 1} className="inline-flex items-center">
                                <Link
                                    className={`text-decoration-none ${index === breadcrumbs.length - 1
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {breadcrumb}
                                </Link>
                                {index < breadcrumbs.length - 1 && (
                                    <span className="mx-2 text-gray-500">/</span>
                                )}
                            </li>
                        ))}
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col md={12}>
                        <div className='flex flex-col justify-center items-center'>
                            <span className='text-white text-[40px] font-medium inline-block mb-10'>
                                Experience
                            </span>

                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative mx-4 my-4 w-full md:mx-16"
                                    ref={el => cardRefs.current[index] = el}
                                >
                                    <span
                                        className="absolute py-1 z-10 px-3 -left-4 -top-2 -rotate-[10deg] black_border bg-violet-500 text-white font-bold md:-left-8"
                                        ref={el => labelRefs.current[index] = el}
                                    >
                                        {exp.durationLabel}
                                    </span>

                                    <div className="p-4 border-2 border-purple-700 orange_border bg-white rounded-xl z-20 grid grid-cols-1 md:grid-cols-6 space-x-0 md:space-x-14 w-full">
                                        <div className='col-span-1 mb-4 md:mb-0'>
                                            <img
                                                src={exp.logo}
                                                alt="logo-nusantara"
                                                className='w-full h-full border-2 border-black -rotate-6 orange_border object-cover'
                                                ref={el => logoRefs.current[index] = el}
                                            />
                                        </div>

                                        <div className='col-span-5'>
                                            <div className='flex flex-col'>
                                                <div className='flex flex-col justify-start items-start'>
                                                    <span className='text-black text-[20px] font-medium inline-block mb-2 text-start'>
                                                        {exp.title}
                                                    </span>

                                                    <span className='text-black text-[14px] inline-block mb-2'>
                                                        <div className='flex items-center'>
                                                            <Icon icon="mdi:coffee" />
                                                            <span className='ml-2'>
                                                                {exp.company}
                                                            </span>
                                                        </div>
                                                    </span>

                                                    <span className='text-black text-[14px] inline-block mb-2'>
                                                        <div className='flex items-center'>
                                                            <Icon icon="mdi:calendar-month" />
                                                            <span className='ml-2'>
                                                                {exp.duration}
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>

                                                <span className='text-black text-[14px] inline-block mb-2'>
                                                    {exp.description.map((desc, i) => (
                                                        <React.Fragment key={i}>
                                                            o {desc}
                                                            <br />
                                                        </React.Fragment>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            </div>

            <div className='w-full'>
                <div
                    className="w-full flex flex-col justify-center items-center z-10 contact-section"
                    style={{
                        clipPath: "circle(0% at 50% 50%)",
                    }}
                >
                    <Contact />
                </div>

            </div>
        </Container>
    )
}

export default Experience