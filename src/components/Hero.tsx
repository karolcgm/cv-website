import { motion } from 'framer-motion';
import { FaCode, FaTools, FaServer, FaHome } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.7,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };
  
  const floatingShapes = [
    { size: 'w-16 h-16', color: 'bg-purple-500/20', delay: 0, duration: 12, x: '10%', y: '20%' },
    { size: 'w-24 h-24', color: 'bg-blue-500/20', delay: 2, duration: 15, x: '80%', y: '60%' },
    { size: 'w-32 h-32', color: 'bg-green-500/20', delay: 4, duration: 18, x: '60%', y: '15%' },
    { size: 'w-20 h-20', color: 'bg-pink-500/20', delay: 1, duration: 16, x: '25%', y: '70%' },
    { size: 'w-28 h-28', color: 'bg-yellow-500/20', delay: 3, duration: 14, x: '85%', y: '30%' },
    { size: 'w-14 h-14', color: 'bg-indigo-500/20', delay: 5, duration: 13, x: '40%', y: '85%' },
  ];

  const cards = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Programowanie',
      description: 'Java, Kotlin, SQL, Swift, React'
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: 'Bazy Danych',
      description: 'PostgreSQL, Cassandra, MongoDB'
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Automatyka Domowa',
      description: 'Inteligentne systemy, czujniki, sterowniki'
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Fotowoltaika',
      description: 'Instalacja i konfiguracja systemów PV'
    }
  ];

  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Animated floating shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl -z-10 ${shape.color} ${shape.size}`}
          initial={{ x: shape.x, y: shape.y, opacity: 0 }}
          animate={{ 
            opacity: 0.6,
            y: [`${parseFloat(shape.y) - 5}%`, `${parseFloat(shape.y) + 5}%`, `${parseFloat(shape.y) - 5}%`],
            x: [`${parseFloat(shape.x) + 3}%`, `${parseFloat(shape.x) - 3}%`, `${parseFloat(shape.x) + 3}%`],
          }}
          transition={{ 
            delay: shape.delay, 
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Mouse follower gradient */}
      <motion.div 
        className="fixed w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none -z-10"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
          mass: 0.5
        }}
      />

      <div className="container mx-auto relative z-10 pt-16">
        {/* Cards section - moved up to fill the space */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 px-6 mt-28"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-xl h-full border border-white/10 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Card background glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {card.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{card.title}</h3>
              <p className="opacity-70 text-center">{card.description}</p>
              
              {/* Accent line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              className="px-12 py-5 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30 relative overflow-hidden group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button glow hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center">
                <span>Poznaj mnie lepiej</span>
                <motion.span 
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>

          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              className="px-12 py-5 text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/30 relative overflow-hidden group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              {/* Button glow hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center">
                <span>Skontaktuj się</span>
                <motion.span 
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.6 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements - enlarged */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Pulsing ring elements */}
      <div className="absolute top-1/3 right-1/4">
        <motion.div
          className="w-6 h-6 rounded-full border-2 border-blue-500 absolute top-0 left-0"
          animate={{
            scale: [1, 2, 2, 1],
            opacity: [1, 0.5, 0, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="absolute bottom-1/3 left-1/4">
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-purple-500 absolute top-0 left-0"
          animate={{
            scale: [1, 2, 2, 1],
            opacity: [1, 0.5, 0, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </section>
  );
};

export default Hero; 