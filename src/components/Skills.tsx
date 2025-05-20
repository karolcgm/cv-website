import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaLanguage, FaRobot } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Języki programowania",
      icon: <FaCode />,
      skills: ["Java", "Kotlin", "SQL", "Swift"]
    },
    {
      title: "Znajomość SOFT/IDE",
      icon: <FaTools />,
      skills: ["Eclipse", "IntelliJ IDEA", "Xcode", "GitHub", "Środowisko Docker", "Springbot"]
    },
    {
      title: "Bazy danych",
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "Cassandra", "MongoDB"]
    },
    {
      title: "Znajomość AI",
      icon: <FaRobot />,
      skills: ["Ollama + Deepseek", "API OpenAI", "API Anthropic", "Cursor"]
    },
    {
      title: "Języki obce",
      icon: <FaLanguage />,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-xl"
              whileHover={{ 
                y: -5, 
                boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.2)',
                background: 'rgba(255, 255, 255, 0.07)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary text-2xl">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-white/10 rounded-full text-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 glassmorphism p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
            <FaTools />
            <span>Dodatkowe umiejętności</span>
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-secondary text-lg">•</span>
              <span>Opracowanie, zaprogramowanie oraz zbudowanie systemu komercyjnego do zbierania danych telemetrycznych oraz analizy i ich prezentacji. System został zbudowany dla potrzeb monitorowania oraz sterowania instalacją prototypową firmy SOLHOTAIR.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary text-lg">•</span>
              <span>Podstawowa znajomość programów do tworzenia obiektów 3D.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary text-lg">•</span>
              <span>Bardzo dobra znajomość w zakresie obsługi, naprawy oraz serwisowania komputerów (Hardware, Software).</span>
            </li>
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