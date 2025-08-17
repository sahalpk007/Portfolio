import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Code2, Database, Cloud } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState(0);

  // Updated Skills & Expertise structure
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "C", level: 60, color: "from-blue-700 to-blue-400" },
        { name: "Python", level: 62, color: "from-yellow-400 to-blue-500" },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Database,
      skills: [
        { name: "Git/GitHub", level: 65, color: "from-gray-800 to-gray-500" },
        { name: "Flutter", level: 55, color: "from-cyan-500 to-blue-400" },
        {
          name: "Overleaf (LaTeX)",
          level: 60,
          color: "from-green-600 to-green-400",
        },
        { name: "VS Code", level: 70, color: "from-blue-600 to-indigo-400" },
        { name: "HTML", level: 65, color: "from-orange-400 to-pink-500" },
        { name: "CSS", level: 63, color: "from-blue-400 to-cyan-400" },
        {
          name: "JavaScript",
          level: 60,
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "Figma",
          level: 60,
          color: "from-pink-500 to-purple-500",
        },
      ],
    },
    {
      title: "Languages",
      icon: Cloud,
      skills: [
        {
          name: "Malayalam (native)",
          level: 100,
          color: "from-green-500 to-green-700",
        },
        {
          name: "English (professional)",
          level: 70,
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "Arabic (elementary)",
          level: 40,
          color: "from-yellow-500 to-yellow-700",
        },
        {
          name: "Hindi (elementary)",
          level: 40,
          color: "from-orange-500 to-orange-700",
        },
      ],
    },
    {
      title: "Interests",
      icon: Sparkles,
      skills: [
        {
          name: "Software development",
          level: 100,
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Machine learning",
          level: 100,
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Programming",
          level: 100,
          color: "from-green-400 to-blue-400",
        },
        {
          name: "Tackling real-world challenges",
          level: 100,
          color: "from-yellow-400 to-orange-400",
        },
        {
          name: "Collaborating with dynamic teams",
          level: 100,
          color: "from-cyan-400 to-blue-400",
        },
        {
          name: "Improving leadership qualities",
          level: 100,
          color: "from-pink-400 to-purple-400",
        },
      ],
    },
  ];

  // No additional skills for this version

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Animated mesh gradients */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="container mx-auto px-2 sm:px-6 lg:px-8 relative z-10 w-full"
        ref={ref}
      >
        <motion.div
          className="max-w-7xl mx-auto"
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
              className="inline-flex items-center gap-2 text-blue-400 text-xs sm:text-sm font-light tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="animate-pulse" />
              TECHNICAL MASTERY
              <Sparkles size={14} className="animate-pulse" />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Skills &
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
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
                Expertise
              </motion.span>
            </motion.h2>

            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex justify-center mb-10 sm:mb-12"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-1.5 sm:p-2 gap-1 sm:gap-0">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-500 text-xs sm:text-sm ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  <category.icon size={16} />
                  {category.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            className="mb-12 sm:mb-16"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between items-center mb-2 sm:mb-3">
                    <span className="text-white font-semibold text-sm sm:text-base group-hover:text-blue-300 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span
                      className=\"text-gray-400 font-medium text-xs sm:text-sm\"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  <div className="relative h-2.5 sm:h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        delay: index * 0.1 + 0.5,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Technologies section removed as per new structure */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
