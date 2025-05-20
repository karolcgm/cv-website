import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt } from 'react-icons/fa';

const Courses = () => {
  const certifications = [
    {
      title: "GoodWe+",
      description: "Certyfikat profesjonalnego instalatora firmy GoodWe.",
      date: "05.2025"
    },
    {
      title: "FIBER ACADEMY PLAY",
      description: "Certyfikat uczestnictwa w szkoleniu FIBER ACADEMY PLAY.",
      date: "03.2021"
    },
    {
      title: "Uprawnienia SEP do 1 kV D+E",
      description: "Uprawnienia elektryczne do 1kV w zakresie dozoru i eksploatacji.",
      date: "11.2019"
    },
    {
      title: "Uprawnienia SEP G3 D+E",
      description: "Uprawnienia gazowe G3 w zakresie dozoru i eksploatacji.",
      date: "11.2019"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.4
      }
    }
  };

  return (
    <section id="courses" className="py-20 relative">
      <motion.div 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-montserrat relative inline-block">
            Kursy i Certyfikaty
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
              whileHover={{ 
                y: -5,
                boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Background decoration */}
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/10 transform rotate-45 transition-transform group-hover:rotate-90 duration-500"></div>
              
              <div className="relative z-10">
                <FaCertificate className="text-3xl text-primary mb-4" />
                
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-80 mb-4">{cert.description}</p>
                
                <div className="flex items-center gap-2 text-sm opacity-70 font-medium">
                  <FaCalendarAlt className="text-primary" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Courses; 