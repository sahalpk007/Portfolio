import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - Custom neon pointer */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 pointer-events-none z-50 rounded-full shadow-lg"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`,
          transition: 'transform 0.1s ease-out',
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.8), 0 0 30px rgba(168, 85, 247, 0.6)',
        }}
      />

      {/* Outer ring - Subtle glow */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-purple-500 pointer-events-none z-40 rounded-full"
        style={{
          mixBlendMode: 'difference',
          boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.6 : isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Hover effect - Expanding circle */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-20 rounded-full border border-pink-500"
          style={{
            boxShadow: '0 0 25px rgba(236, 72, 153, 0.7)',
          }}
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            x: { type: "spring", stiffness: 500, damping: 28 },
            y: { type: "spring", stiffness: 500, damping: 28 },
          }}
        />
      )}

      {/* Click effect - Ripple */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 border-2 border-pink-500 pointer-events-none z-20 rounded-full"
          style={{
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 4,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );
};

export default Cursor;