import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import Card from './components/ui/Card'
import './index.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Symulacja ładowania
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500 shadow-lg shadow-indigo-500/50"></div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <BackgroundEffects />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      
      <motion.div 
        className="relative z-10 container-narrow mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.header 
          id="hero" 
          className="mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <h1 className="mb-6 text-6xl font-bold tracking-tight">
              PESZKO PIOTR
            </h1>
            <div className="h-0.5 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-glow"></div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:piotr.peszkoo@gmail.com" className="contact-item flex items-center gap-2 hover:text-indigo-400 transition-colors px-3 py-2 rounded-lg hover:bg-indigo-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>piotr.peszkoo@gmail.com</span>
            </a>
            
            <span className="contact-item flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+48 535272451</span>
            </span>
            
            <span className="contact-item flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-indigo-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Kukułcza 26, 43-190 Mikołów, Poland</span>
            </span>
          </motion.div>
        </motion.header>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="lg:col-span-2">
            <Card title="Doświadczenie zawodowe" delay={0.1}>
              <div className="space-y-6">
                <div className="experience-item">
                  <div className="flex flex-wrap justify-between mb-2 items-center">
                    <h3 className="font-semibold text-blue-400 text-lg">GU-BAU Technic</h3>
                    <span className="text-sm text-indigo-300 font-medium bg-indigo-900/30 px-3 py-1 rounded-full">10.2024 - obecnie</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2 italic">Szwajcaria, Ebnat-Kappel</p>
                  <ul className="list-disc list-inside text-gray-300 pl-1 space-y-1">
                    <li>Monter - instalacja oraz integracja urządzeń grzewczych z systemami chmurowymi</li>
                  </ul>
                </div>

                <div className="experience-item relative pb-6">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent"></div>
                  <div className="pl-6">
                    <div className="flex flex-wrap justify-between mb-2 items-center">
                      <h3 className="font-semibold text-blue-400 text-lg">Piotr Peszko PUR-THERM ECO</h3>
                      <span className="text-sm text-indigo-300 font-medium bg-indigo-900/30 px-3 py-1 rounded-full">04.2016 - Aktualnie</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2 italic">Samozatrudnienie, Mikołów</p>
                    <ul className="list-disc list-inside text-gray-300 pl-1 space-y-1">
                      <li>Instalator fotowoltaiki, urządzeń grzeczych oraz chłodniczych</li>
                      <li>Projektowanie oraz montaż automatyki inteligentnego domu</li>
                      <li>Tworzenie własnych, autorskich systemów sterowania inteligentnym domem, opartych o MCU serii Atmega oraz ESP</li>
                      <li>Integrowanie systemów opartych protokoły Modbus, Opentherm</li>
                      <li>Instalowanie systemów komercyjnych opartych o sieć zigbee</li>
                      <li>Wprowadzanie rozwiązań IoT, zarządzanie strumieniami danych</li>
                      <li>Programowanie sterowników w C++ / bascom AVR</li>
                    </ul>
                  </div>
                </div>

                <div className="experience-item relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 to-transparent"></div>
                  <div className="pl-6">
                    <p className="text-sm text-gray-300 mb-2 font-medium">Współpraca jako partner biznesowy sieci PLAY:</p>
                    <ul className="list-disc list-inside text-gray-300 pl-1 space-y-1">
                      <li>Budowa sieci HFC, sieci światłowodowych, sieci LAN</li>
                      <li>Montaż, konfiguracja, serwis i naprawa instalacji u klienta</li>
                      <li>Konfiguracja komputerów, urządzeń sieciowych Klientów sieci PLAY, T-mobile</li>
                      <li>Obsługa klienta zarówno biznesowego jak i zwykłego</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card title="Edukacja" delay={0.2}>
            <div className="space-y-6">
              <div className="education-item relative pb-4">
                <div className="flex flex-wrap justify-between mb-2 items-start">
                  <div className="w-full md:w-auto mr-4 mb-2 md:mb-0">
                    <h3 className="font-semibold text-blue-400">Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie</h3>
                  </div>
                  <span className="text-sm text-indigo-300 whitespace-nowrap font-medium bg-indigo-900/30 px-3 py-1 rounded-full">koniec 2025</span>
                </div>
                <div className="bg-indigo-900/20 px-4 py-3 rounded-lg">
                  <p className="text-gray-300">Kierunek "Geodezja i Kartografia"</p>
                </div>
              </div>

              <div className="education-item relative">
                <div className="flex flex-wrap justify-between mb-2 items-start">
                  <div className="w-full md:w-auto mr-4 mb-2 md:mb-0">
                    <h3 className="font-semibold text-blue-400">Politechnika Śląska Gliwice</h3>
                  </div>
                  <span className="text-sm text-indigo-300 whitespace-nowrap font-medium bg-indigo-900/30 px-3 py-1 rounded-full">09.2022 - 01.2023</span>
                </div>
                <div className="bg-indigo-900/20 px-4 py-3 rounded-lg">
                  <p className="text-gray-300">Studia podyplomowe</p>
                  <p className="text-gray-300 mt-1">Kierunek Inżynieria Aplikacji Mobilnych i Baz Danych</p>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Kursy i certyfikaty" delay={0.3}>
            <div className="space-y-4">
              <div className="certificate-item p-3 rounded-lg transition-all duration-300 hover:bg-indigo-900/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-indigo-300">GoodWe+</span>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">05.2025</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">Certyfikat profesjonalnego instalatora firmy GoodWe</p>
              </div>

              <div className="certificate-item p-3 rounded-lg transition-all duration-300 hover:bg-indigo-900/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-indigo-300">FIBER ACADEMY PLAY</span>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">03.2021</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">Certyfikat uczestnictwa w szkoleniu</p>
              </div>

              <div className="certificate-item p-3 rounded-lg transition-all duration-300 hover:bg-indigo-900/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-indigo-300">Uprawnienia SEP do 1 kV D+E</span>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">11.2019</span>
                </div>
              </div>

              <div className="certificate-item p-3 rounded-lg transition-all duration-300 hover:bg-indigo-900/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-indigo-300">Uprawnienia SEP G3 D+E</span>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded">11.2019</span>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Umiejętności techniczne" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h3 className="text-md font-semibold text-indigo-400 mb-3 pb-1 border-b border-indigo-900/50">Języki programowania</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Kotlin</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Swift</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-semibold text-indigo-400 mb-3 pb-1 border-b border-indigo-900/50">Języki</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">
                    <span className="mr-1">🇬🇧</span> Angielski - B2
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-md font-semibold text-indigo-400 mb-3 pb-1 border-b border-indigo-900/50">Znajomość SOFT/IDE</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Eclipse</span>
                  <span className="skill-tag">IntelliJ IDEA</span>
                  <span className="skill-tag">Xcode</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Środowisko Docker</span>
                  <span className="skill-tag">Springbot</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">Cassandra</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-md font-semibold text-indigo-400 mb-3 pb-1 border-b border-indigo-900/50">Znajomość AI</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Ollama + Deepseek</span>
                  <span className="skill-tag">API OpenAI</span>
                  <span className="skill-tag">API Anthropic</span>
                  <span className="skill-tag">Cursor</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card title="Dodatkowe umiejętności i osiągnięcia" delay={0.5}>
            <ul className="space-y-3">
              <li className="flex gap-3 p-2 rounded-lg hover:bg-indigo-900/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Umiejętność współpracy z klientami w relacjach B2B oraz B2C, tworzenie ofert, planowanie, realizacja, budowanie wizerunku firmy</span>
              </li>
              <li className="flex gap-3 p-2 rounded-lg hover:bg-indigo-900/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Opracowanie, zaprogramowanie oraz zbudowanie systemu komercyjnego do zbierania danych telemetrycznych oraz analizy i ich prezentacji. System został zbudowany dla potrzeb monitorowania oraz sterowania instalacją prototypową firmy SOLHOTAIR</span>
              </li>
              <li className="flex gap-3 p-2 rounded-lg hover:bg-indigo-900/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Podstawowa znajomość programów do tworzenia obiektów 3D</span>
              </li>
              <li className="flex gap-3 p-2 rounded-lg hover:bg-indigo-900/20 transition-colors duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Bardzo dobra znajomość w zakresie obsługi, naprawy oraz serwisowania komputerów (Hardware, Software)</span>
              </li>
            </ul>
          </Card>
          
          <Card title="Dane personalne" delay={0.6}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-indigo-900/20 p-4 rounded-lg">
                <p className="text-sm font-medium text-indigo-400 mb-1">Data urodzenia</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  20.01.1988
                </p>
              </div>
              <div className="bg-indigo-900/20 p-4 rounded-lg">
                <p className="text-sm font-medium text-indigo-400 mb-1">Narodowość</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <span>🇵🇱</span>Polska
                </p>
              </div>
              <div className="bg-indigo-900/20 p-4 rounded-lg">
                <p className="text-sm font-medium text-indigo-400 mb-1">Prawo jazdy</p>
                <p className="text-gray-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Kategoria B
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          className="mt-12 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} | CV Piotr Peszko</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App 