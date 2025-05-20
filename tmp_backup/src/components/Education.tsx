import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      school: "Politechnika Śląska Gliwice",
      degree: "Studia podyplomowe",
      field: "Inżynieria Aplikacji Mobilnych i Baz Danych",
      date: "10.2024 - obecnie (koniec 2025)",
      location: "Gliwice, ul. Akademicka 16",
      current: true
    },
    {
      school: "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
      degree: "Studia wyższe",
      field: "Geodezja i Kartografia",
      date: "1.10.2008 - 8.06.2013",
      location: "Kraków",
      current: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="py-20 relative">
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
            Edukacja
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-white/20 hidden sm:block"></div>
          
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-start gap-6"
            >
              {/* Timeline dot and icon */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 z-10 relative">
                  <FaGraduationCap className="text-2xl text-primary" />
                </div>
                <div className="absolute left-8 top-8 w-3 h-3 bg-primary rounded-full z-20 hidden sm:block"></div>
              </div>
              
              {/* Content */}
              <div className="glassmorphism rounded-xl p-6 flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FaUniversity className="text-primary text-lg" />
                      <h3 className="text-xl font-semibold">{item.school}</h3>
                    </div>
                    <p className="text-secondary font-medium">
                      {item.degree} - {item.field}
                    </p>
                  </div>
                  
                  {/* Date badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm">
                    <FaCalendarAlt className="text-primary" />
                    <span>{item.date}</span>
                    {item.current && (
                      <span className="inline-flex ml-2 w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-sm opacity-70">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Education; 