import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Structural Analysis</p>
          <p>Reinforced Concrete Design</p>
          <p>Construction Materials</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] md:text-[14vw] leading-none font-sans font-bold tracking-tighter select-none text-[#f4f4f4] w-full text-center">
          Gunasekar
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full font-medium gap-8 md:gap-0 mt-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-white/60 font-mono text-[10px] md:text-xs">
          <p>&copy; {new Date().getFullYear()} Gunasekar K</p>
          <p>All rights reserved.</p>
        </div>
        
        <div className="flex flex-col gap-2 items-center md:items-end text-[11px] md:text-xs text-white/80">
          <p>Contact: <span className="text-white">7558135470</span></p>
          <p>E-mail: <a href="mailto:gunasekarjaha@gmail.com" className="text-white underline hover:text-red-400 transition-colors underline-offset-4 decoration-1 lowercase">gunasekarjaha@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
