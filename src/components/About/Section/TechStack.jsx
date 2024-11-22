import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const techStackRef = useRef(null);

  useEffect(() => {
    const techItems = techStackRef.current.querySelectorAll(".tech-item, .tech-icon");
    const title = techStackRef.current.querySelector(".title");

    gsap.fromTo(
      [title, ...techItems],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: techStackRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  const techItems = [
    { name: "React", color: "#61DAFB" },
    // { name: "JavaScript", color: "#F7DF1E" },
    // { name: "Node.js", color: "#68A063" },
    // { name: "CSS", color: "#2965F1" },
    // { name: "HTML", color: "#E34C26" },
    { name: "Next.js", color: "#7e9ccc" },
    { name: "Nest.js", color: "#E0234E" },
    { name: "Express", color: "#F7DF1E" },
    { name: "Laravel", color: "#2965F1" },
    { name: ".Net", color: "#512BD4" },
    { name: "Rails", color: "#701515" },
  ];

  return (
    <div ref={techStackRef} className="w-full flex justify-center items-center tech-stack bg-[#0F0F0F]">
      <div className="w-full">
        <div className="flex justify-center w-full lg:w-[90%] pb-32 pt-5">
        <span className="title text-white text-[40px] md:text-[80px] lg:text-[120px] font-bold text-start">
            What I Use
          </span>
        </div>

        {techItems.map((item, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          >
            {Array.from({ length: 15 }).map((_, subIndex) => (
              <React.Fragment key={subIndex}>
                <span
                  className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                  style={{ color: subIndex === 7 ? item.color : "inherit" }}
                >
                  {item.name}
                </span>
                <span className="tech-icon text-3xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
