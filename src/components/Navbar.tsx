import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaGraduationCap, FaTools, FaBook, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', name: 'Strona główna', icon: <FaHome /> },
    { id: 'about', name: 'O mnie', icon: <FaUser /> },
    { id: 'experience', name: 'Doświadczenie', icon: <FaBriefcase /> },
    { id: 'education', name: 'Edukacja', icon: <FaGraduationCap /> },
    { id: 'skills', name: 'Umiejętności', icon: <FaTools /> },
    { id: 'courses', name: 'Kursy', icon: <FaBook /> },
    { id: 'contact', name: 'Kontakt', icon: <FaEnvelope /> },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        scrolled ? 'bg-opacity-80 glassmorphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Removed name from navbar */}

        {/* Desktop menu - increased spacing between items */}
        <div className="hidden lg:flex space-x-40">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-primary"
              className="flex items-center space-x-1 text-sm font-medium text-white opacity-80 hover:opacity-100 hover:text-primary transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="text-xs">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <motion.button
          className="flex lg:hidden text-2xl text-white focus:outline-none"
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-50 flex justify-end lg:hidden"
          >
            <motion.div 
              className="bg-gradient-to-b from-[#111827] to-[#1f2937] w-3/4 h-full shadow-xl glassmorphism"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="text-2xl text-white"
                >
                  <FaTimes />
                </motion.button>
              </div>
              <div className="flex flex-col space-y-6 p-6">
                {menuItems.map((item) => (
                  <motion.div key={item.id} variants={menuItemVariants}>
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="text-primary"
                      className="flex items-center space-x-4 text-white p-3 hover:bg-white/10 rounded-lg transition-all cursor-pointer"
                      onClick={toggleMenu}
                    >
                      <span className="text-lg text-primary">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 bg-black bg-opacity-50"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 