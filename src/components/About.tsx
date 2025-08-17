import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Heart, Users, Zap, Target, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code,
      title: "Clean Code Architect",
      description: "Crafting maintainable, scalable solutions with modern development practices and cutting-edge technologies.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Collaborative Leader",
      description: "Building high-performing teams through effective communication and agile methodologies.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Innovation Driver",
      description: "Passionate about solving complex challenges with creative, user-centered solutions.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Coffee,
      title: "Lifelong Learner",
      description: "Constantly evolving with emerging technologies and industry best practices.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Delivering lightning-fast applications with exceptional user experiences.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Exceeding expectations through meticulous attention to detail and quality delivery.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-light tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="animate-pulse" />
              DISCOVER MY STORY
              <Sparkles size={14} className="animate-pulse" />
            </motion.div>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Me
              </motion.span>
            </motion.h2>
            
            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left Content */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white">Transforming Ideas into</span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Digital Excellence
                </motion.span>
              </motion.h3>
              
              <motion.div
                className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  I'm a passionate full-stack developer who thrives on creating innovative digital experiences 
                  that push the boundaries of what's possible. With a deep understanding of modern technologies 
                  and user-centered design principles, I craft solutions that are both beautiful and functional.
                </p>

                <p>
                  My expertise spans the entire development ecosystem - from intuitive frontend interfaces 
                  to robust backend architectures. I believe in writing clean, maintainable code that 
                  scales with your business needs while delivering exceptional performance.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                variants={itemVariants}
              >
                {['Innovation', 'Excellence', 'Collaboration'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-white backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 1 }}
                    data-cursor="pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Photo */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Illuminating rings with pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #ec4899, #3b82f6)',
                    padding: '4px'
                  }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
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
                        className="w-full h-full object-cover object-center"
                        style={{ objectPosition: 'center center' }}
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
                
                {/* Outer illuminating ring */}
                <motion.div
                  className="absolute inset-[-8px] rounded-full border-2 border-transparent"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(139, 92, 246, 0.3), transparent)',
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Orbiting light particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${
                        i % 4 === 0 ? '#3b82f6' : 
                        i % 4 === 1 ? '#8b5cf6' : 
                        i % 4 === 2 ? '#06b6d4' : '#ec4899'
                      }, transparent)`,
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      filter: 'blur(0.5px)'
                    }}
                    animate={{
 rotate: 360 * (i + 1), // Give each particle a unique rotation
 scale: [0.8, 1.2, 0.8], // Simplified scale animation
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }
                    }}
                    initial={{
                      x: Math.cos((i * 45) * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth > 768 ? 120 : 100),
                      y: Math.sin((i * 45) * Math.PI / 180) * (typeof window !== 'undefined' && window.innerWidth > 768 ? 120 : 100),
                    }}
                  />
                ))}

                {/* Additional glow effect */}
                <motion.div
                  className="absolute inset-[-12px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1), transparent)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                data-cursor="pointer"
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                />
                
                {/* Icon */}
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={20} className="text-white" />
                </motion.div>
                
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300 relative z-10">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;