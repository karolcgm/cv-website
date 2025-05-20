import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaUserAlt, FaCalendarAlt, FaIdCard, FaFlag } from 'react-icons/fa';

const About = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
  
  const personalInfo = [
    { icon: <FaCalendarAlt />, label: "Data urodzenia", value: "20.01.1988" },
    { icon: <FaIdCard />, label: "Prawo jazdy", value: "B" },
    { icon: <FaFlag />, label: "Narodowość", value: "Polska" },
  ];
  
  return (
    <motion.section 
      id="about"
      ref={sectionRef}
      className="py-20 relative"
      style={{ opacity, y }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-montserrat relative inline-block">
            O Mnie
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-xl h-full bg-white/0 shadow-none">
              <h3 className="text-xl font-semibold mb-4 text-primary">Profil zawodowy</h3>
              <div className="space-y-4">
                <p>
                  Specjalista w zakresie instalacji fotowoltaicznych, urządzeń grzewczych oraz chłodniczych.
                  Zajmuję się projektowaniem oraz montażem systemów automatyki inteligentnego domu.
                </p>
                <p>
                  <span className="font-medium text-primary">Moje umiejętności obejmują:</span>
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Tworzenie własnych, autorskich systemów sterowania inteligentnym domem, opartych o MCU serii Atmega oraz ESP.</li>
                  <li>Integrowanie systemów opartych o protokoły Modbus i Opentherm.</li>
                  <li>Instalowanie systemów komercyjnych bazujących na sieci Zigbee.</li>
                  <li>Wprowadzanie rozwiązań IoT i zarządzanie strumieniami danych.</li>
                  <li>Programowanie sterowników w C++ / bascom AVR.</li>
                </ul>
                <p>
                  Współpracuję także jako partner biznesowy sieci PLAY, zajmując się budową sieci HFC, sieci światłowodowych i sieci LAN.
                  Wykonuję montaż, konfigurację, serwis i naprawę instalacji u klientów, a także zajmuję się konfiguracją komputerów i urządzeń
                  sieciowych klientów sieci PLAY i T-mobile.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-xl h-full bg-white/0 shadow-none">
              <h3 className="text-xl font-semibold mb-4 text-primary">Dane personalne</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-primary text-lg">{info.icon}</div>
                    <div>
                      <p className="text-sm opacity-70">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <h4 className="flex items-center gap-2 mb-2">
                    <FaUserAlt className="text-primary" />
                    <span className="font-medium">Umiejętności interpersonalne</span>
                  </h4>
                  <p className="text-sm opacity-80">
                    Umiejętność współpracy z klientami w relacjach B2B oraz B2C, tworzenie ofert, planowanie, realizacja,
                    budowanie wizerunku firmy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </motion.section>
  );
};

export default About; 