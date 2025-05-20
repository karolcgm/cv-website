import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "PUR-THERM ECO",
      position: "Właściciel / Specjalista",
      date: "04.2016 – Aktualnie",
      location: "Mikołów",
      description: [
        "Instalator fotowoltaiki, urządzeń grzeczych oraz chłodniczych.",
        "Projektowanie oraz montaż automatyki inteligentnego domu.",
        "Tworzenie własnych, autorskich systemów sterowania inteligentnym domem, opartych o MCU serii Atmega oraz ESP.",
        "Integrowanie systemów opartych protokoły Modbus, Opentherm.",
        "Instalowanie systemów komercyjnych opartych o sieć zigbee.",
        "Wprowadzanie rozwiązań IoT, zarządzanie strumieniami danych.",
        "Programowanie sterowników w C++ / bascom AVR.",
        "Współpraca jako partner biznesowy sieci PLAY w zakresie:",
        "Budowa sieci HFC, sieci światłowodowych, sieci LAN",
        "Montaż, konfiguracja, serwis i naprawa instalacji u klienta",
        "Konfiguracja komputerów, urządzeń sieciowych Klientów sieci PLAY, T-mobile",
        "Obsługa klienta zarówno biznesowego jak i zwykłego."
      ]
    },
    {
      title: "GU-BAU Technic",
      position: "Monter",
      date: "09.2022 - 01.2023",
      location: "Szwajcaria, Ebnat-Kappel",
      description: [
        "Instalacja oraz integracja urządzeń grzewczych z systemami chmurowymi"
      ]
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
    <section id="experience" className="py-20 relative">
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
            Doświadczenie Zawodowe
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-white/30 to-secondary transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full shadow-glow transform -translate-x-1/2 hidden md:block"></div>
                
                {/* Left or full width on mobile */}
                <div className={`glassmorphism p-6 rounded-xl col-span-1 ${
                  index % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2 md:row-start-1'
                }`}>
                  <div className="flex items-center gap-2 mb-2 text-primary text-lg font-semibold">
                    <FaBriefcase className={`${index % 2 === 1 ? '' : 'md:order-last'}`} />
                    <h3>{exp.title}</h3>
                  </div>
                  <p className="text-secondary font-medium mb-1">{exp.position}</p>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm opacity-70">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 list-inside ml-0 text-sm md:text-base">
                    {exp.description.map((item, i) => (
                      <li key={i} className="opacity-80 hover:opacity-100 transition-opacity">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Empty div for layout on desktop */}
                <div className={`hidden md:block ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Experience; 