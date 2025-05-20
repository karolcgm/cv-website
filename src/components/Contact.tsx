import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "piotr.peszkoo@gmail.com",
      link: "mailto:piotr.peszkoo@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Telefon",
      value: "+48 535 272 451",
      link: "tel:+48535272451"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Lokalizacja",
      value: "Mikołów, Polska",
      link: "https://maps.google.com/?q=Mikołów,Poland"
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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5"
          >
            <div className="glassmorphism p-6 rounded-xl h-full">
              <h3 className="text-xl font-semibold mb-6 text-primary">Informacje kontaktowe</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-white/5 p-3 rounded-lg transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-xl text-primary mt-1">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm opacity-80">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm opacity-70">
                  Skontaktuj się ze mną, jeśli jesteś zainteresowany współpracą lub masz pytania
                  dotyczące moich usług z zakresu programowania, automatyki domowej lub instalacji fotowoltaicznych.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7"
          >
            <form 
              onSubmit={handleSubmit}
              className="glassmorphism p-6 rounded-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 opacity-80">Imię i nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 opacity-80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1 opacity-80">Temat</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1 opacity-80">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ y: 0 }}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </span>
                ) : isSubmitted ? (
                  <span className="text-green-300 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Wysłano!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaPaperPlane />
                    Wyślij wiadomość
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact; 