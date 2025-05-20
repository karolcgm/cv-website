import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaLanguage, FaRobot } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Języki programowania",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-400",
      skills: ["Java", "Kotlin", "SQL", "Swift"]
    },
    {
      title: "Znajomość SOFT/IDE",
      icon: <FaTools />,
      color: "from-purple-500 to-indigo-400",
      skills: ["Eclipse", "IntelliJ IDEA", "Xcode", "GitHub", "Środowisko Docker", "Springbot"]
    },
    {
      title: "Bazy danych",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-400",
      skills: ["PostgreSQL", "Cassandra", "MongoDB"]
    },
    {
      title: "Znajomość AI",
      icon: <FaRobot />,
      color: "from-pink-500 to-rose-400",
      skills: ["Ollama + Deepseek", "API OpenAI", "API Anthropic", "Cursor"]
    },
    {
      title: "Języki obce",
      icon: <FaLanguage />,
      color: "from-amber-500 to-yellow-400",
      skills: ["Angielski (B2)"]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
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
            Umiejętności
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-xl relative overflow-hidden group"
              whileHover={{ 
                y: -8, 
                boxShadow: '0 25px 35px -12px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Background gradient that moves on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={{ rotate: 0, scale: 1.5 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Animated border */}
              <div className="absolute inset-0 p-0.5">
                <div className="h-full w-full rounded-lg relative overflow-hidden">
                  <motion.div
                    className={`absolute -inset-[100%] bg-gradient-to-r ${category.color} opacity-30`}
                    animate={{
                      top: ['100%', '-100%'],
                      left: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <motion.div 
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color} text-2xl`}
                  whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)'
                    }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-full text-sm font-medium relative overflow-hidden group/skill`}
                  >
                    <span className="relative z-10">{skill}</span>
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 group-hover/skill:opacity-20 transition-opacity duration-300`}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 glassmorphism p-6 rounded-xl relative overflow-hidden group"
        >
          {/* Background gradient animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 relative z-10">
            <motion.div 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 text-2xl"
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <FaTools />
            </motion.div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
              Dodatkowe umiejętności
            </span>
          </h3>
          
          <ul className="space-y-4 relative z-10">
            {[
              "Opracowanie, zaprogramowanie oraz zbudowanie systemu komercyjnego do zbierania danych telemetrycznych oraz analizy i ich prezentacji. System został zbudowany dla potrzeb monitorowania oraz sterowania instalacją prototypową firmy SOLHOTAIR.",
              "Podstawowa znajomość programów do tworzenia obiektów 3D.",
              "Bardzo dobra znajomość w zakresie obsługi, naprawy oraz serwisowania komputerów (Hardware, Software)."
            ].map((skill, index) => (
              <motion.li 
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-all"
                whileHover={{ x: 3, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              >
                <span className="text-pink-400 text-xl mt-0.5">•</span>
                <span className="opacity-90">{skill}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills; 