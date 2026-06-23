import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/about/civil_engineer_hero.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]">
      <style>
        {`
          @keyframes craneLift {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-35px); }
          }
          .animate-crane-lift {
            animation: craneLift 8s ease-in-out infinite;
          }
          @keyframes cableScale {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.3); }
          }
          .animate-crane-cable {
            transform-origin: 140px 10px;
            animation: cableScale 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* ── Background faint building outlines (depth layer) ── */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        {/* Faint outlined skyscrapers behind everything */}
        {/* Construction Building - Main Structure */}
        {/* Base Solid part */}
        <rect x="10" y="150" width="100" height="170" stroke="black" strokeWidth="3" strokeOpacity="0.25" fill="none"/>
        
        {/* Windows for Solid part */}
        <rect x="25" y="170" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
        <rect x="75" y="170" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
        <rect x="25" y="220" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
        <rect x="75" y="220" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
        <rect x="25" y="270" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>
        <rect x="75" y="270" width="20" height="30" stroke="black" strokeWidth="2" strokeOpacity="0.2" fill="none"/>

        {/* Exposed Framework / Scaffolding on top */}
        <line x1="10" y1="110" x2="110" y2="110" stroke="black" strokeWidth="3" strokeOpacity="0.25"/>
        <line x1="10" y1="70" x2="110" y2="70" stroke="black" strokeWidth="3" strokeOpacity="0.25"/>
        <line x1="10" y1="150" x2="10" y2="70" stroke="black" strokeWidth="3" strokeOpacity="0.25"/>
        <line x1="60" y1="150" x2="60" y2="70" stroke="black" strokeWidth="3" strokeOpacity="0.25"/>
        <line x1="110" y1="150" x2="110" y2="70" stroke="black" strokeWidth="3" strokeOpacity="0.25"/>
        
        {/* Cross bracing */}
        <line x1="10" y1="110" x2="60" y2="150" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="60" y1="110" x2="10" y2="150" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="60" y1="110" x2="110" y2="150" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="110" y1="110" x2="60" y2="150" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>

        <line x1="10" y1="70" x2="60" y2="110" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="60" y1="70" x2="10" y2="110" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="60" y1="70" x2="110" y2="110" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>
        <line x1="110" y1="70" x2="60" y2="110" stroke="black" strokeWidth="1.5" strokeOpacity="0.25"/>

        {/* Construction Crane */}
        {/* Crane Mast */}
        <line x1="60" y1="70" x2="60" y2="-10" stroke="black" strokeWidth="4" strokeOpacity="0.3"/>
        {/* Crane Jib */}
        <line x1="60" y1="10" x2="170" y2="10" stroke="black" strokeWidth="4" strokeOpacity="0.3"/>
        {/* Crane Counter-Jib */}
        <line x1="60" y1="10" x2="30" y2="10" stroke="black" strokeWidth="4" strokeOpacity="0.3"/>
        {/* Crane Top support cables */}
        <line x1="60" y1="-10" x2="130" y2="10" stroke="black" strokeWidth="1.5" strokeOpacity="0.3"/>
        <line x1="60" y1="-10" x2="40" y2="10" stroke="black" strokeWidth="1.5" strokeOpacity="0.3"/>
        
        {/* Animated Crane Hook, Cable, & Load */}
        <line x1="140" y1="10" x2="140" y2="60" stroke="black" strokeWidth="1.5" strokeOpacity="0.3" className="animate-crane-cable"/>
        <g className="animate-crane-lift">
          <rect x="135" y="60" width="10" height="15" stroke="black" strokeWidth="2" strokeOpacity="0.3" fill="none"/>
          <line x1="135" y1="60" x2="145" y2="75" stroke="black" strokeWidth="1.5" strokeOpacity="0.3"/>
          <line x1="145" y1="60" x2="135" y2="75" stroke="black" strokeWidth="1.5" strokeOpacity="0.3"/>
          {/* Steel Beam Load */}
          <rect x="120" y="75" width="40" height="6" stroke="black" strokeWidth="2" strokeOpacity="0.3" fill="none"/>
          <line x1="120" y1="78" x2="160" y2="78" stroke="black" strokeWidth="1" strokeOpacity="0.3"/>
        </g>

        {/* Mid tower */}
        <rect x="100" y="130" width="40" height="190" stroke="black" strokeWidth="1.5" strokeOpacity="0.10" fill="none"/>
        <rect x="108" y="148" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
        <rect x="124" y="148" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
        <rect x="108" y="168" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
        <rect x="124" y="168" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>

        {/* Right cluster */}
        <rect x="1280" y="100" width="60" height="220" stroke="black" strokeWidth="1.5" strokeOpacity="0.12" fill="none"/>
        <rect x="1290" y="120" width="10" height="14" stroke="black" strokeWidth="1" strokeOpacity="0.10" fill="none"/>
        <rect x="1310" y="120" width="10" height="14" stroke="black" strokeWidth="1" strokeOpacity="0.10" fill="none"/>
        <rect x="1290" y="144" width="10" height="14" stroke="black" strokeWidth="1" strokeOpacity="0.10" fill="none"/>
        <rect x="1310" y="144" width="10" height="14" stroke="black" strokeWidth="1" strokeOpacity="0.10" fill="none"/>
        <rect x="1290" y="168" width="10" height="14" stroke="black" strokeWidth="1" strokeOpacity="0.10" fill="none"/>
        <line x1="1310" y1="100" x2="1310" y2="78" stroke="black" strokeWidth="1.5" strokeOpacity="0.12"/>

        <rect x="1350" y="150" width="45" height="170" stroke="black" strokeWidth="1.5" strokeOpacity="0.10" fill="none"/>
        <rect x="1360" y="168" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
        <rect x="1376" y="168" width="8" height="10" stroke="black" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
      </svg>

      {/* ── Solid city skyline silhouette at the very bottom ── */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[2]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="
            M0,200
            L0,160 L20,160 L20,140 L40,140 L40,120 L50,120 L50,100 L60,100 L60,120 L70,120 L70,90
            L80,90 L80,70 L82,70 L82,50 L88,50 L88,70 L90,70 L90,90
            L105,90 L105,110 L115,110 L115,130 L125,130 L125,110 L135,110 L135,90
            L148,90 L148,65 L152,65 L152,40 L156,40 L156,65 L160,65 L160,90
            L175,90 L175,115 L185,115 L185,90
            L200,90 L200,120 L215,120 L215,90 L220,90 L220,75 L230,75 L230,90
            L250,90 L250,115
            L280,115 L280,85 L285,85 L285,60 L290,60 L290,85 L295,85 L295,115
            L320,115 L320,130
            L370,130 L370,105 L385,105 L385,80 L390,80 L390,55 L395,55 L395,80 L400,80 L400,105 L415,105 L415,130
            L450,130 L450,110 L460,110 L460,130
            L500,130 L500,100 L510,100 L510,75 L515,75 L515,55 L520,55 L520,75 L525,75 L525,100 L535,100 L535,130
            L570,130 L570,145
            L630,145 L630,120 L640,120 L640,100 L645,100 L645,80 L650,80 L650,100 L655,100 L655,120 L665,120 L665,145
            L700,145 L700,130
            L750,130 L750,105 L760,105 L760,85 L770,85 L770,60 L775,60 L775,85 L780,85 L780,105 L790,105 L790,130
            L820,130 L820,115
            L870,115 L870,90 L875,90 L875,65 L880,65 L880,40 L885,40 L885,65 L890,65 L890,90 L895,90 L895,115
            L920,115 L920,130
            L960,130 L960,110 L975,110 L975,90 L985,90 L985,110 L995,110 L995,130
            L1030,130 L1030,145
            L1080,145 L1080,120 L1090,120 L1090,95 L1095,95 L1095,70 L1100,70 L1100,95 L1105,95 L1105,120 L1115,120 L1115,145
            L1150,145 L1150,130
            L1200,130 L1200,105 L1210,105 L1210,80 L1218,80 L1218,58 L1222,58 L1222,80 L1230,80 L1230,105 L1240,105 L1240,130
            L1270,130 L1270,115
            L1310,115 L1310,90 L1325,90 L1325,115
            L1360,115 L1360,130 L1380,130 L1380,115 L1395,115 L1395,100 L1400,100 L1400,115 L1420,115 L1420,130
            L1440,130 L1440,200
            Z
          "
          fill="black"
          fillOpacity="0.15"
        />
        {/* Second layer slightly offset for depth */}
        <path
          d="
            M0,200 L0,170
            L60,170 L60,150 L75,150 L75,135 L90,135 L90,150 L110,150 L110,165
            L160,165 L160,148 L170,148 L170,132 L178,132 L178,148 L190,148 L190,165
            L240,165 L240,150 L255,150 L255,138 L265,138 L265,125 L270,125 L270,138 L280,138 L280,150 L295,150 L295,165
            L350,165 L350,152 L365,152 L365,165
            L420,165 L420,148 L435,148 L435,132 L442,132 L442,118 L448,118 L448,132 L455,132 L455,148 L468,148 L468,165
            L540,165 L540,152 L555,152 L555,165
            L610,165 L610,148 L622,148 L622,130 L628,130 L628,148 L640,148 L640,165
            L700,165 L700,152
            L760,152 L760,138 L772,138 L772,122 L778,122 L778,138 L790,138 L790,152 L805,152 L805,165
            L870,165 L870,150 L885,150 L885,165
            L940,165 L940,148 L952,148 L952,132 L958,132 L958,148 L970,148 L970,165
            L1040,165 L1040,150
            L1100,150 L1100,138 L1112,138 L1112,120 L1118,120 L1118,138 L1130,138 L1130,150 L1145,150 L1145,165
            L1210,165 L1210,152 L1225,152 L1225,165
            L1300,165 L1300,150 L1315,150 L1315,138 L1322,138 L1322,150 L1335,150 L1335,165
            L1440,165 L1440,200
            Z
          "
          fill="black"
          fillOpacity="0.22"
        />
      </svg>

      {/* ── Engineer illustration – anchored to right/bottom ── */}
      <div className="absolute inset-0 flex items-end justify-center md:justify-end pointer-events-none z-[3]">
        <img
          src={heroImage}
          alt="Gunasekar K – Structural Engineer"
          className="h-[60%] md:h-[90%] w-auto object-contain object-bottom select-none max-w-[85%] md:max-w-[60%]"
        />
      </div>

      {/* ── Decorative stars (same as About section) ── */}
      <div className="absolute top-10 right-10 md:right-[38%] text-black opacity-20 pointer-events-none">
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>
      <div className="absolute top-1/3 left-[5%] text-black opacity-10 pointer-events-none">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-32 right-[55%] text-black opacity-10 pointer-events-none">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/>
        </svg>
      </div>

      {/* ── Main content – bottom-left, same style as original hero ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-start pt-32 md:pt-0 md:justify-end pb-20 md:pb-[8%] px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-row justify-between items-end w-full">

          {/* Left: Text block */}
          <div className="flex flex-col items-start text-left max-w-lg">

            {/* Role tag */}
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-8 h-[2px] bg-black"/>
              <span className="text-black text-xs font-black tracking-[0.3em] uppercase opacity-70">
                Structural Engineering
              </span>
            </div>

            {/* Main heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-3xl sm:text-4xl md:text-6xl font-black mb-2 tracking-tight leading-[1.05]"
            >
              Hi, I'm <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>
                Gunasekar K
              </span>
            </h1>

            {/* Subtext */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/90 text-sm md:text-base font-semibold mb-7 max-w-sm leading-relaxed drop-shadow"
            >
              M.E Structural Engineer · AutoCAD · STAAD PRO · REVIT — building what lasts, designed with precision.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-row flex-wrap items-center gap-3"
            >
              <a
                href="#experience"
                className="px-6 py-2.5 rounded-full bg-black text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-white/20 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </div>
          </div>



        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
      >
        <div className="animate-bounce bg-white/90 p-2.5 rounded-full shadow-lg backdrop-blur-sm border border-black/5">
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>

      {/* ── Wave divider at bottom (matches About section top) ── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-8 md:h-12 fill-white">
          <path d="M321.39,36.44c58-6.79,114.16-19.13,172-26.86,82.39-10.72,168.19-11.73,250.45-.39C823.78,21,906.67,52,985.66,62.83c70.05,9.48,146.53,11.09,214.34,3V80H0V75.8C59.71,88.08,130.83,89.62,189.5,79.8,242.79,71.82,282.88,43.6,321.39,36.44Z"/>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
