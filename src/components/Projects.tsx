import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X, Sparkles, Star } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title:
        "NeuVitX: Automated Monitoring of Intravenous Glucose Infusion and Vital Signs",
      description:
        "Real-time monitoring system for glucose drip levels and patient vital signs using Raspberry Pi Zero, HX711 Load Cell amplifier, Load Cell sensor, MAX30102 sensor, Python, Flutter, and Firebase.",
      longDescription:
        "Developed a real-time monitoring system for glucose drip levels and patient vital signs using Raspberry Pi Zero, HX711 Load Cell amplifier, Load Cell sensor, MAX30102 sensor, Python, Flutter, and Firebase. Integrated Firebase for data storage and synchronization with a mobile application. Designed to improve patient care by alerting healthcare providers to low drip levels and vital sign abnormalities.",
      image:
        "https://images.pexels.com/photos/5076517/pexels-photo-5076517.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder image for medical monitoring
      technologies: [
        "Raspberry Pi",
        "Python",
        "Flutter",
        "Firebase",
        "Sensors",
      ],
      github: "#", // Replace with actual GitHub link if available
      demo: "#", // Replace with actual demo link if available
      featured: true,
      category: "IoT",
      color: "from-green-500 to-emerald-500",
      rating: 4.8,
    },
    {
      title: "Local Goods Price Prediction System",
      description:
        "Machine learning-based system using Linear Regression to predict local goods prices.",
      longDescription:
        "Built a machine learning-based system using Linear Regression to predict local goods prices. Analyzed historical data and developed an interactive front-end with HTML, CSS, and JavaScript. Enabled data-driven decision-making through accurate price forecasting.",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800", // Placeholder image for price prediction
      technologies: ["Linear Regression", "HTML", "CSS", "JavaScript"],
      github: "#", // Replace with actual GitHub link if available
      demo: "#", // Replace with actual demo link if available
      featured: true,
      category: "AI/ML",
      color: "from-blue-500 to-cyan-500",
      rating: 4.7,
    },
  ];

  const categories = [
    "All",
    "Full-Stack",
    "IoT",
    "Frontend",
    "Backend",
    "AI/ML",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  const isEmptyCategory = filteredProjects.length === 0; // Check if the category is empty

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="projects"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
              Explore Innovative Projects
              <Sparkles size={14} className="animate-pulse" />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-1.5 sm:p-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-500 text-xs sm:text-sm ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="pointer"
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          {!isEmptyCategory && (
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
              variants={containerVariants}
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  data-cursor="pointer"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <motion.img
                      // Removed image scaling animation on hover
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Rating badge */}
                    <motion.div
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full"
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Star
                        size={12}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-white text-xs font-medium">
                        {project.rating}
                      </span>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.span
                        className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-gray-500 text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Empty Category Message */}
          {activeCategory !== "All" && filteredProjects.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center h-64 text-center text-gray-400"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg sm:text-xl font-semibold">
                More on the Way!
              </p>
            </motion.div>
          )}

          {/* Other Projects */}
          {!isEmptyCategory && otherProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8 }}
              >
                More Projects
              </motion.h3>

              <motion.div
                className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
                variants={containerVariants}
              >
                {otherProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="group p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    data-cursor="pointer"
                  >
                    <div className="flex justify-between items-start mb-3 sm:mb-4 relative z-10">
                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          data-cursor="pointer"
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          data-cursor="pointer"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs font-medium text-gray-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-cursor="pointer"
              >
                <X size={18} />
              </motion.button>

              {/* Project Image */}
              <div className="relative h-48 sm:h-64 md:h-80">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <motion.span
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${projects[selectedProject].color} rounded-full text-xs sm:text-sm font-semibold text-white`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {projects[selectedProject].category}
                  </motion.span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  {projects[selectedProject].longDescription}
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {projects[selectedProject].technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-white backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-white font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="pointer"
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={projects[selectedProject].demo}
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="pointer"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
