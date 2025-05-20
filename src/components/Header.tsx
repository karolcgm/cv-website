import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.header
      className="pt-24 pb-6 relative px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-30" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              PESZKO PIOTR
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 opacity-80">
              Programista & Specjalista Automatyki Inteligentnych Domów
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
              <a 
                href="mailto:piotr.peszkoo@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all group"
              >
                <FaEnvelope className="text-primary group-hover:scale-110 transition-transform" />
                <span>piotr.peszkoo@gmail.com</span>
              </a>
              
              <a 
                href="tel:+48535272451" 
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-all group"
              >
                <FaPhone className="text-primary group-hover:scale-110 transition-transform" />
                <span>+48 535 272 451</span>
              </a>
            </div>
            
            <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>Kukułcza 26, 43-190 Mikołów, Poland</span>
            </div>
          </motion.div>
          
          <motion.div
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary/30 overflow-hidden relative shimmer-bg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)" }}
          >
            {/* Placeholder for profile photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl font-bold font-montserrat text-white animate-pulse">
              PP
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 