import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [navLock, setNavLock] = useState(false);

  // Use refs to persist lockTimeout and scroll target across renders
  const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTargetRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // Special case for hero (Home): only active if at very top
        if (section === "hero") {
          return window.scrollY < 50;
        }
        // For all other sections, active if top is above threshold and bottom is below threshold
        // This makes About easier to select when near the top
        return rect.top <= 120 && rect.bottom > 80;
      });

      // If navLock is active and scroll target is in view, release lock
      if (
        navLock &&
        scrollTargetRef.current &&
        currentSection === scrollTargetRef.current
      ) {
        setNavLock(false);
        scrollTargetRef.current = null;
      }

      if (!navLock && currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, [navLock]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setNavLock(true);
    scrollTargetRef.current = sectionId;
    // Fallback: if scroll never reaches, release lock after 2s
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = setTimeout(() => {
      setNavLock(false);
      scrollTargetRef.current = null;
    }, 2000);
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({ behavior: "smooth" });
      } catch {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Work", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with full name only */}
          <motion.div
            className="relative cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="pointer"
            onClick={() => scrollToSection("hero")}
          >
            <motion.div
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ // Keep style for initial gradient
                backgroundSize: "200% 200%",
              }}
            >
              MUHAMMED SAHAL P K
            </motion.div>

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ zIndex: -1 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full text-sm ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
 whileHover={{ scale: 1.05 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
                data-cursor="pointer"
              >
                {item.label}

                {/* Active indicator */}
                <AnimatePresence>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30"
                      layoutId="activeSection"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            data-cursor="pointer"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior
                      scrollToSection(item.id);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    data-cursor="pointer"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
