import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Code, Zap } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 1.5,
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8"
      style={{ y, opacity }}
    >
      {/* Dynamic background effects */}
      <div className="absolute inset-0">
        {/* Interactive gradient that follows mouse */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.15), transparent 40%)`,
          }}
        />

        {/* Animated mesh gradients */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)", // Keep this for visual effect
              "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)", // Keep this for visual effect
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
              scale: 0.3
            }}
            animate={{
              scale: [0.3, 1, 0.3],
              opacity: [0.5, 1, 0.5], // Add opacity animation
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <div
              className={`w-6 h-6 md:w-8 md:h-8 ${
                i % 4 === 0
                  ? "bg-pink-500/30 rounded-full"
                  : i % 4 === 1
                  ? "bg-purple-500/30 rotate-45"
                  : i % 4 === 2
                  ? "bg-blue-500/30 rounded-full"
                  : "bg-emerald-500/30 rotate-12"
              } blur-sm`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-7xl px-2 sm:px-6 lg:px-8 w-full">
        <motion.div className="mx-auto" initial="hidden" animate="visible">
          {/* Profile Photo and Name Layout - Side by Side */}
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 mb-8 sm:mb-12 w-full"
            variants={textVariants}
            custom={1}
          >
            {/* Profile Photo - Left Side */}
            <motion.div
              className="relative flex-shrink-0 order-1 lg:order-1 w-full max-w-[14rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] xl:max-w-[16rem]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div className="relative w-full aspect-square">
                {/* Illuminating rings with pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)",
                    padding: "4px",
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5], // Use opacity animation instead of boxShadow
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full bg-black rounded-full p-2">
                    <motion.div
                      className="w-full h-full rounded-full overflow-hidden relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <img
                        src="/mspk_profile1.webp"
                        alt="Muhammed Sahal P K"
                        className="w-full h-full object-cover object-center rounded-full max-w-full max-h-full border-2 border-purple-500"
                        style={{ objectPosition: "center center" }}
                        draggable="false"
                      />

                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Orbiting light particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div // Reduced number of particles from 6 to 3
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${
                        i % 4 === 0
                          ? "#3b82f6"
                          : i % 4 === 1
                          ? "#8b5cf6"
                          : i % 4 === 2
                          ? "#06b6d4"
                          : "#ec4899"
                      }, transparent)`,
                      top: "50%",
                      left: "50%",
                      transformOrigin: "0 0",
                      filter: "blur(0.5px)",
                    }}
                    animate={{
                      rotate: 360,
                      scale: [0.8, 1.2, 0.8], // Simplified scale animation
                      opacity: [0.4, 1, 0.4],
                    }}
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      },
                    }}
                    initial={{
                      x:
                        Math.cos((i * 60 * Math.PI) / 180) *
                        (typeof window !== "undefined" &&
                        window.innerWidth > 768
                          ? 100
                          : 70),
                      y:
                        Math.sin((i * 60 * Math.PI) / 180) *
                        (typeof window !== "undefined" &&
                        window.innerWidth > 768
                          ? 100
                          : 70),
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Name and Title - Right Side */}
            <motion.div className="text-center lg:text-left order-2 lg:order-2 w-full break-words">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 relative"
                variants={textVariants}
                custom={1}
              >
                <motion.span
                  className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  MUHAMMED
                </motion.span>

                <motion.span
                  className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  SAHAL P K{/* Glitch effect overlay */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.4, 0],
                      x: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  >
                    SAHAL P K
                  </motion.span>
                </motion.span>
              </motion.h1>
            </motion.div>
          </motion.div>

          {/* Animated subtitle with typewriter effect */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light relative px-4"
            variants={textVariants}
            custom={2}
          >
            <motion.div className="flex items-center justify-center gap-3 flex-wrap">
              <Code size={20} className="text-pink-400 flex-shrink-0" />
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 3, delay: 3 }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-pink-400"
              >
                Software Engineer & UI/UX Designer
              </motion.span>
              <Zap size={20} className="text-purple-400 flex-shrink-0" />
            </motion.div>
          </motion.div>

          {/* Enhanced description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4"
            variants={textVariants}
            custom={3}
          >
            Crafting extraordinary digital experiences through
            <span className="text-pink-400 font-semibold">
              {" "}
              innovative design
            </span>
            ,
            <span className="text-purple-400 font-semibold">
              {" "}
              seamless functionality
            </span>
            , and
            <span className="text-blue-400 font-semibold">
              {" "}
              cutting-edge technology
            </span>
            .
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
            variants={textVariants}
            custom={4}
          >
            <a
              href="/Resume_sahal_latest.pdf"
              download
              className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl font-semibold text-white overflow-hidden text-base sm:text-lg w-full sm:w-auto flex items-center justify-center"
              data-cursor="pointer"
            >
              {/* Animated background */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />

              <span className="relative flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
            </a>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/20 rounded-2xl font-semibold text-white hover:bg-white/10 transition-all duration-500 relative overflow-hidden text-base sm:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="pointer"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Let's Collaborate</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
