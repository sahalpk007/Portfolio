import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

    <div className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 min-h-screen">
      <Cursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="min-h-screen relative w-full"
          >
            {/* Dynamic Background with Mouse Interaction */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900" />
              {/* Interactive gradient that follows mouse */}
              <motion.div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `radial-gradient(80vw circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
                }}
              />
              {/* Floating geometric shapes */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                      opacity: 0, // Initial opacity
                      scale: 0.3, // Initial scale
                    }}
                    animate={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                      opacity: [0, 0.5, 0], // Animate opacity
                      scale: [0.3, 1, 0.3], // Animate scale
                    }}
                    transition={{
                      duration: 15 + Math.random() * 10,
                      delay: Math.random() * 5,
                    }}
                  >
                    <div
                      className={`w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 ${
                        i % 4 === 0
                          ? "bg-pink-500/20 rounded-full"
                          : i % 4 === 1
                          ? "bg-purple-500/20 rotate-45"
                          : i % 4 === 2
                          ? "bg-blue-500/20 rounded-full"
                          : "bg-emerald-500/20 rotate-12"
                      } blur-sm`}
                    />
                  </motion.div>
                ))}
              </div>
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            {/* Noise texture overlay */}
            <div
              className="fixed inset-0 z-0 opacity-[0.02] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10">
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
 <React.Suspense fallback={<div>Loading...</div>}>
 <Experience />
 <Projects />
 <Education />
 <Contact />
 </React.Suspense>
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
