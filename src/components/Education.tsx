import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "APJ Abdul Kalam Technological University (APJAKTU)",
      location: "Kerala, India",
      period: "2021 - 2025",
      grade: "First Class",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Active participant in coding competitions and technical clubs.",
      achievements: [
        "Graduated with First Class",
        "Served as the member of the TACS (Technical Association for Cyber Streams) Computer Science Society",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    {
      title: "IEEEXtreme 16.0 Programming Competition",
      issuer: "IEEEXtreme",
      date: "2022",
      credentialId: undefined,
      color: "from-blue-700 to-purple-500",
    },
    {
      title: "Introduction to UI/UX Designing using Figma Workshop",
      issuer: "OFB",
      date: "2023",
      credentialId: undefined,
      color: "from-pink-500 to-yellow-400",
    },
  ];

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
      id="education"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
              ACADEMIC JOURNEY
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Education &
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.div>

          {/* Education Section */}
          <motion.div className="mb-12 sm:mb-16" variants={itemVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Academic Background
            </motion.h3>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  data-cursor="pointer"
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6">
                    <div className="mb-4 lg:mb-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <motion.div
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap size={24} className="text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-base sm:text-lg font-semibold text-purple-400">
                            {edu.field}
                          </p>
                        </div>
                      </div>

                      <div className="text-base sm:text-lg font-semibold text-gray-300 mb-2">
                        {edu.institution}
                      </div>

                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${edu.color} rounded-xl font-bold text-base sm:text-lg text-white`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {edu.grade}
                    </motion.div>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                      <Star size={18} className="text-yellow-400" />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2 sm:space-y-3">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                        >
                          <div
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${edu.color} rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Professional Certifications
            </motion.h3>

            <motion.div
              className="grid sm:grid-cols-2 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  data-cursor="pointer"
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}
                  />

                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award size={20} className="text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">
                        {cert.issuer}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-400 gap-2">
                        <span>Issued: {cert.date}</span>
                        {cert.credentialId && (
                          <motion.span
                            className="bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full font-mono border border-gray-700"
                            whileHover={{ scale: 1.05 }}
                          >
                            {cert.credentialId}
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
