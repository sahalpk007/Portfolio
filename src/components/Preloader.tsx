import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden"
      exit={{ 
        clipPath: "circle(0% at 50% 50%)",
        transition: { duration: 1.2, ease: "easeInOut" }
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, ${
                i % 4 === 0 ? '#ec4899' : 
                i % 4 === 1 ? '#a855f7' : 
                i % 4 === 2 ? '#3b82f6' : '#10b981'
              }, transparent)`,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main logo animation */}
        <motion.div
          className="relative mb-16"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="w-40 h-40 mx-auto border-4 border-pink-500 rounded-full relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute inset-3 border-4 border-purple-500 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              {/* Center logo */}
              <motion.div
                className="absolute inset-6 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 30px rgba(236, 72, 153, 0.5)",
                    "0 0 60px rgba(168, 85, 247, 0.8)",
                    "0 0 30px rgba(236, 72, 153, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                MS
              </motion.div>
            </motion.div>
            
            {/* Orbiting dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(45deg, ${
                    i % 4 === 0 ? '#ec4899' : 
                    i % 4 === 1 ? '#a855f7' : 
                    i % 4 === 2 ? '#3b82f6' : '#10b981'
                  }, transparent)`,
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: 360,
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }
                }}
                initial={{
                  x: Math.cos((i * 45) * Math.PI / 180) * 60,
                  y: Math.sin((i * 45) * Math.PI / 180) * 60,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.div
          className="text-white text-3xl font-light tracking-[0.4em] mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            className="inline-block overflow-hidden whitespace-nowrap bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            CRAFTING DIGITAL EXPERIENCES
          </motion.span>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-96 h-2 bg-gray-800 mx-auto rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2.5, 
              delay: 1.8,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Percentage counter */}
        <motion.div
          className="text-gray-400 text-lg mt-6 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            Initializing Creative Mode...
          </motion.span>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-pink-500 rounded-tl-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-purple-500 rounded-tr-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-blue-500 rounded-bl-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-emerald-500 rounded-br-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default Preloader;