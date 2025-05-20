import { motion } from 'framer-motion';
import { FaCode, FaTools, FaServer, FaHome } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
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

  // Centered name with fade effect
  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Centered name with fade effect */}
      <motion.div
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-bold font-montserrat text-white/5">
            PIOTR PESZKO
          </h1>
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 animate-glow">
            Specjalista od Automatyki i Programista 
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Łączę świat programowania z praktyczną wiedzą o systemach automatyki inteligentnego domu 
            i fotowoltaice. Tworzę autorskie rozwiązania, które usprawniają codzienne życie.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="glassmorphism p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex justify-center mb-6 text-primary">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{card.title}</h3>
              <p className="opacity-70 text-center">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold shadow-lg shadow-primary/20"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Poznaj mnie lepiej
            </motion.button>
          </Link>

          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <motion.button
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-semibold"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              Skontaktuj się
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements - reduced size */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero; 