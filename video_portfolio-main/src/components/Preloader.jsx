import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Faster total duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    exit: { 
      opacity: 0, 
      transition: { duration: 0.3, delay: 0.8 } // Wait for doors to swing open before unmounting
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 w-full h-screen z-[100000] flex pointer-events-none"
          style={{ perspective: '2000px' }}
        >
          {/* LEFT 3D DOOR */}
          <motion.div
            exit={{ rotateY: -100, opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'left' }}
            className="w-1/2 h-full bg-[#ff2a2a] relative border-r border-black/20 shadow-[inset_-20px_0_50px_rgba(0,0,0,0.2)] flex justify-end items-center"
          >
             {/* Left Door Paneling */}
             <div className="absolute top-8 bottom-8 right-4 left-8 border-[3px] border-black/10 rounded-md"></div>
             {/* Door Handle */}
             <div className="absolute top-1/2 right-6 w-3 h-20 bg-black/40 rounded-full transform -translate-y-1/2 shadow-lg"></div>
          </motion.div>

          {/* RIGHT 3D DOOR */}
          <motion.div
            exit={{ rotateY: 100, opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: 'right' }}
            className="w-1/2 h-full bg-[#ff2a2a] relative border-l border-white/20 shadow-[inset_20px_0_50px_rgba(0,0,0,0.2)] flex justify-start items-center"
          >
             {/* Right Door Paneling */}
             <div className="absolute top-8 bottom-8 left-4 right-8 border-[3px] border-black/10 rounded-md"></div>
             {/* Door Handle */}
             <div className="absolute top-1/2 left-6 w-3 h-20 bg-black/40 rounded-full transform -translate-y-1/2 shadow-lg"></div>
          </motion.div>

          {/* OVERLAY CONTENT (Building construct & camera fly-through) */}
          <motion.div
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
          >
            {/* Building Construction Effect (Live Blueprint drawing) */}
            <motion.div className="mb-8 relative flex items-end justify-center">

              <svg width="150" height="150" viewBox="0 0 120 120" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg relative z-0">
                {/* Foundation */}
                <motion.path d="M 10 110 L 110 110" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.3, ease:"easeOut"}} />
                {/* Outer Walls */}
                <motion.path d="M 20 110 L 20 50 M 100 110 L 100 30" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.4, ease:"easeOut", delay: 0.2}} />
                {/* Roofs */}
                <motion.path d="M 10 50 L 60 20 L 110 50" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.5, ease:"easeInOut", delay: 0.4}} />
                {/* Inner Columns */}
                <motion.path d="M 40 110 L 40 32 M 60 110 L 60 20 M 80 110 L 80 42" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.5, ease:"easeOut", delay: 0.6}} />
                {/* Floors/Slabs */}
                <motion.path d="M 20 80 L 100 80 M 20 50 L 100 50" initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:0.4, ease:"easeOut", delay: 0.8}} />
                {/* Crane hook dropping in to finish the job */}
                <motion.path d="M 60 0 L 60 20" initial={{pathLength:0, y:-20}} animate={{pathLength:1, y:0}} transition={{duration:0.5, ease:"easeOut", delay: 1.1}} />
              </svg>
            </motion.div>

            {/* Cinematic Text Reveal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "0em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
              className="relative text-5xl md:text-7xl font-black uppercase text-white drop-shadow-2xl z-40"
            >
              <span>Gunasekar</span>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="text-black ml-1 md:ml-2"
              >
                .
              </motion.span>
            </motion.div>

            {/* Cinematic Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              className="mt-6 text-xs md:text-sm font-black tracking-[0.5em] text-black/60 uppercase"
            >
              Structural Engineer
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
