import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Jr. UI/UX Designer | Team Lead",
      company: "Pro26",
      location: "Manjeri, Kerala",
      period: "May 2025 - Present",
      description:
        "Accelerated team integration by assuming leadership role within three weeks, guiding a group of 3 junior designers to develop innovative UI/UX solutions that enhanced user engagement by 40%.",
      achievements: [
        "Facilitated entrepreneurial mindset development through collaborative workshops, leading to a 30% improvement in creative problem-solving efficiency among team members and fostering future leadership potential.",
        "Continuously refined skills through hands-on involvement in real-world projects, contributing to a 15% improvement in usability scores and enhancing overall project delivery quality.",
      ],
      technologies: ["UI/UX Design", "Figma", "Usability Testing"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div
        className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10 w-full"
        ref={ref}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-block text-purple-400 text-xs sm:text-sm font-light tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              CAREER JOURNEY
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Amoeba-like flowing thread timeline using SVG */}
            <svg
              className="absolute left-6 md:left-1/2 top-0 bottom-0 z-0 pointer-events-none"
              width="40" // wide enough for the wave
              height="100%"
              style={{ minHeight: "100%", height: "100%", width: "40px" }}
              viewBox="0 0 40 1000" // 1000 is a large enough height for most screens
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="timeline-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#a78bfa" />
                  <stop offset="0.5" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#ec4899" />
                </linearGradient>
                <filter
                  id="glow"
                  x="-20"
                  y="-20"
                  width="80"
                  height="1040"
                  filterUnits="userSpaceOnUse"
                >
                  <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M20 0
                  C 30 100, 10 200, 20 300
                  S 30 500, 20 700
                  S 10 900, 20 1000"
                stroke="url(#timeline-gradient)"
                strokeWidth="6"
                filter="url(#glow)"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            {/* Add keyframes for gradient movement in your CSS/tailwind config: */}
            {/*
            @keyframes gradient-move {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-move {
              background-size: 200% 200%;
              animation: gradient-move 8s ease-in-out infinite;
            }
            */}

            <div className="space-y-12 sm:space-y-16 w-full">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={itemVariants}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-black z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      delay: index * 0.3 + 1.5,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`w-full max-w-xl md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-6 lg:pr-8"
                        : "md:ml-auto md:pl-6 lg:pl-8"
                    } break-words`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="group relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-500">
                      {/* Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                      />

                      {/* Company Icon */}
                      <motion.div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Briefcase size={20} className="text-white" />
                      </motion.div>

                      {/* Job Details */}
                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="text-base sm:text-lg font-semibold text-purple-400 mb-2 sm:mb-3">
                          {exp.company}
                        </div>
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: achievementIndex * 0.1 }}
                              >
                                <div
                                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${exp.color} rounded-full mt-1.5 sm:mt-2 flex-shrink-0`}
                                ></div>
                                {achievement}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
