import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sahalpk007',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/muhammedsahalpk/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:muhammedsahalpk.official@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTopButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  MUHAMMED SAHAL P K
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 max-w-md text-sm">
                  Full-Stack Developer passionate about creating innovative solutions 
                  and building exceptional digital experiences. Let's connect and 
                  create something amazing together.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gradient-to-br from-gray-800/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
 whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      data-cursor="pointer"
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-base font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-left text-sm"
                      whileHover={{ scale: 1.05 }}
                      data-cursor="pointer"
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-base font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <motion.p
                  whileHover={{ x: 3 }}
                >
                  Kerala, India
                </motion.p>
                <motion.a
                  href="mailto:muhammedsahalpk.official@gmail.com"
                  className="block hover:text-purple-400 transition-colors duration-300"
 whileHover={{ scale: 1.05 }}
                  data-cursor="pointer"
                >
                  muhammedsahalpk.official@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+917025788341"
                  className="block hover:text-purple-400 transition-colors duration-300"
 whileHover={{ scale: 1.05 }}
                  data-cursor="pointer"
                >
                  +91 70257 88341
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-white/10 pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                className="text-gray-400 text-sm mb-3 md:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                © {currentYear} Muhammed Sahal P K. All rights reserved.
              </motion.p>
            </div>
          </motion.div>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollToTopButton && (
              <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                data-cursor="pointer"
              >
                <ArrowUp size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;