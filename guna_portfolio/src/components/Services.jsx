import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, useTransform } from 'framer-motion';
import avatarEdu from '../assets/avatar_edu.png';
import avatarProj from '../assets/avatar_proj.png';
import avatarIntern from '../assets/avatar_intern.png';
import avatarAchieve from '../assets/avatar_achieve.png';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-full max-w-[300px] sm:max-w-[320px] rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 sm:p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>{number}</span>
        
        <h3 className={`text-xl sm:text-2xl font-black mb-3 tracking-tight break-words transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const [currentAvatar, setCurrentAvatar] = useState(avatarEdu);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Switch the avatar image based on the scroll progress (matching the 4 cards)
    if (latest < 0.25) setCurrentAvatar(avatarEdu);
    else if (latest < 0.5) setCurrentAvatar(avatarProj);
    else if (latest < 0.75) setCurrentAvatar(avatarIntern);
    else setCurrentAvatar(avatarAchieve);
  });

  // Smoothly interpolated Bezier curve coordinates for the dashed line
  const scrollSteps = [0, 0.08, 0.16, 0.25, 0.33, 0.41, 0.50, 0.58, 0.66, 0.74, 0.83, 0.91, 1];
  
  // X percentages mapped to the 1000px container
  const avatarXDesktop = useTransform(scrollYProgress, scrollSteps, [
    "65%", "48.4%", "35.6%", "28.9%", "30%", 
    "39.1%", "50.6%", "61.9%", "70%", 
    "64.5%", "53.7%", "41.7%", "30%"
  ]);
  
  // Y percentages mapped to the 1350px container
  const avatarYDesktop = useTransform(scrollYProgress, scrollSteps, [
    "14.8%", "20.8%", "28.6%", "37.4%", "44.4%", 
    "52.9%", "57.8%", "62.6%", "70.3%", 
    "78.4%", "83.3%", "86.2%", "88.8%"
  ]);

  // Rotates the avatar to physically lean into the curves of the slide
  const avatarRotateDesktop = useTransform(scrollYProgress, scrollSteps, [
    "20deg", "30deg", "35deg", "20deg", "0deg", 
    "-20deg", "-35deg", "-20deg", "0deg", 
    "15deg", "25deg", "15deg", "0deg"
  ]);



  return (
    <section 
      id="experience"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Background
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            My Education & Experience Journey
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            A solid academic foundation coupled with practical, hands-on experience in the field of Structural Engineering.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line & Perfect Slider Avatar */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1350px] pointer-events-none z-10">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1000 1350" 
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Faint background path (optional guide) */}
            <path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="2" 
              strokeDasharray="8 10" 
            />

            {/* Mask to reveal the dashed path based on scroll */}
            <mask id="path-mask">
              <motion.path 
                d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
                fill="none" 
                stroke="white" 
                strokeWidth="20" 
                style={{ pathLength }}
              />
            </mask>

            {/* The actual dashed line that gets revealed */}
            <path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" 
              fill="none" 
              stroke="black" 
              strokeWidth="2" 
              strokeDasharray="8 10" 
              mask="url(#path-mask)"
              className="drop-shadow-sm"
            />
          </svg>

          {/* The Sliding Builder Avatar (Desktop - Perfect Path Follow) */}
          <motion.div 
            className="absolute z-[100] w-32 h-32 -ml-16 -mt-32 origin-bottom mix-blend-multiply"
            style={{ 
              left: avatarXDesktop,
              top: avatarYDesktop,
              rotate: avatarRotateDesktop
            }}
          >
            <img src={currentAvatar} alt="Builder Avatar" className="w-full h-full object-contain object-bottom" />
          </motion.div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-start pl-20 pr-4 md:pl-0 md:pr-0 md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          {/* Mobile Animated Vertical Dashed Line */}
          <svg 
            className="md:hidden absolute top-0 left-6 -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
            viewBox="0 0 4 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="#cbd5e1" 
              strokeWidth="4" 
              strokeDasharray="4 6" 
              vectorEffect="non-scaling-stroke"
            />
            <mask id="path-mask-mobile">
              <motion.path 
                d="M 2,0 L 2,100" 
                fill="none" 
                stroke="white" 
                strokeWidth="4" 
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
            <path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="black" 
              strokeWidth="4" 
              strokeDasharray="4 6" 
              mask="url(#path-mask-mobile)"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* The Sliding Builder Avatar (Mobile) */}
          <motion.div 
            className="md:hidden absolute z-30 w-24 h-24 -ml-12 -mt-24 mix-blend-multiply"
            style={{ 
              top: useTransform(scrollYProgress, [0, 1], ["0%", "95%"]),
              left: "24px"
            }}
          >
            <img src={currentAvatar} alt="Builder Avatar" className="w-full h-full object-contain object-bottom" />
          </motion.div>
          
          <TagCard 
            number="01"
            title="Education"
            text="M.E Structural Engg (8.5 CGPA) & B.E Civil Engg (7.82 CGPA) at Thanthai Periyar Govt Institute of Technology."
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="Projects"
            text="Experimental Investigation on Self-Compacting Concrete. Double Layer Paver Block Analysis. Green Residential Building Design."
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="Internships"
            text="Field Execution and Office Documentation at PWD Vellore. Field Training at Dhanam Infra, Chennai."
            className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="04"
            title="Achievements"
            text="1st Place Paper Presentation at C. Abdul Hakeem College. 2nd Place Cad Modelling at Govt College of Engineering."
            className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Always learning!
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
