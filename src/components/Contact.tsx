import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "piotr.peszkoo@gmail.com",
      link: "mailto:piotr.peszkoo@gmail.com"
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: "Telefon",
      value: "+48 535 272 451",
      link: "tel:+48535272451"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: "Lokalizacja",
      value: "Mikołów, Polska",
      link: "https://maps.google.com/?q=Mikołów,Poland"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "Profil LinkedIn",
      link: "https://www.linkedin.com/in/piotr-peszko/"
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "Profil GitHub",
      link: "https://github.com/piotrpeszko"
    }
  ];
  
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
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        className="container mx-auto"
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
            Kontakt
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
        </motion.div>
        
        <div className="flex justify-center">
          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl"
          >
            <div className="glassmorphism p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Informacje kontaktowe</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-white/10 p-4 rounded-lg transition-all contact-link"
                    whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-lg">{info.label}</p>
                      <p className="opacity-80">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                {/* Removed paragraph as requested */}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact; 