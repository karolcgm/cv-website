import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import Card from './components/ui/Card'
import './index.css'

// CV Piotr Peszko - ostatnia zmiana 21.05.2025

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // czekamy 2 sekundy na załadowanie
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500 shadow-lg shadow-indigo-500/50">
          <div className="h-12 w-12 rounded-full border-r-2 border-l-2 border-purple-500 animate-spin absolute top-2 left-2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* gwiazdy w tle */}
      <div className="fixed inset-0 z-0">
        <BackgroundEffects />
      </div>
      
      {/* cienie na gorze i dole zeby lepiej bylo widac */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0f1129] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f1129] to-transparent z-10"></div>

      <div className="relative z-20">
        <div className="main-container">
          {/* naglowek */}
          <header className="header">
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-2xl font-bold mb-2" style={{ 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent' 
              }}>
                PIOTR PESZKO
              </h1>
              <p className="text-sm opacity-80">20.01.1988 | Polska</p>
            </motion.div>
            
            <motion.div 
              className="header-separator"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="mailto:piotr.peszkoo@gmail.com" className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22,5L12,13L2,5" />
                  <line x1="2" y1="19" x2="9" y2="13" />
                  <line x1="22" y1="19" x2="15" y2="13" />
                </svg>
                <span>piotr.peszkoo@gmail.com</span>
              </a>
              
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+48 535272451</span>
              </div>
              
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kukułcza 26, 43-190 Mikołów, Poland</span>
              </div>
            </motion.div>
          </header>

          {/* zawartosc */}
          <main>
            <div className="grid-layout">
              {/* edukacja - pierwsza kolumna*/}
              <Card title="Edukacja" delay={0.1}>
                <div className="space-y-5">
                  <div>
                    <div className="flex flex-wrap justify-between mb-2">
                      <h3 className="job-title">Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie</h3>
                      <span className="date-badge">1.10.2008 - 8.06.2013</span>
                    </div>
                    <p className="job-description">Kierunek "Geodezja i Kartografia"</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap justify-between mb-2">
                      <h3 className="job-title">Politechnika Śląska Gliwice</h3>
                      <span className="date-badge">10.2024 - obecnie</span>
                    </div>
                    <p className="job-description">Studia podyplomowe</p>
                    <p className="job-description">Kierunek Inżynieria Aplikacji Mobilnych i Baz Danych</p>
                    <p className="job-description">Planowane zakończenie: koniec 2025</p>
                  </div>
                </div>
              </Card>

              <div className="grid-col-span-2">
                <Card title="Doświadczenie zawodowe" delay={0.2}>
                  <div className="space-y-6">
                    <div className="timeline-item">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <h3 className="job-title">Monter</h3>
                          <p className="job-company">GU-BAU Technic, Szwajcaria, Ebnat-Kappel</p>
                        </div>
                        <span className="date-badge">09.2022 - 01.2023</span>
                      </div>
                      <ul className="custom-list">
                        <li>Instalacja oraz integracja urządzeń grzewczych z systemami chmurowymi</li>
                      </ul>
                    </div>

                    <div className="timeline-item">
                      <div className="flex flex-wrap justify-between mb-2">
                        <div>
                          <h3 className="job-title">Samozatrudnienie</h3>
                          <p className="job-company">Piotr Peszko PUR-THERM ECO, Mikołów</p>
                        </div>
                        <span className="date-badge">04.2016 - Aktualnie</span>
                      </div>
                      <ul className="custom-list">
                        <li>Instalator fotowoltaiki, urządzeń grzeczych oraz chłodniczych</li>
                        <li>Projektowanie oraz montaż automatyki inteligentnego domu</li>
                        <li>Tworzenie własnych, autorskich systemów sterowania inteligentnym domem, opartych o MCU serii Atmega oraz ESP</li>
                        <li>Integrowanie systemów opartych o protokoły Modbus, Opentherm</li>
                        <li>Instalowanie systemów komercyjnych opartych o sieć zigbee</li>
                        <li>Wprowadzanie rozwiązań IoT, zarządzanie strumieniami danych</li>
                        <li>Programowanie sterowników w C++ / bascom AVR</li>
                      </ul>
                    </div>

                    <div className="timeline-item">
                      <h3 className="job-title">Partner biznesowy sieci PLAY</h3>
                      <ul className="custom-list">
                        <li>Budowa sieci HFC, sieci światłowodowych, sieci LAN</li>
                        <li>Montaż, konfiguracja, serwis i naprawa instalacji u klienta</li>
                        <li>Konfiguracja komputerów, urządzeń sieciowych Klientów sieci PLAY, T-mobile</li>
                        <li>Obsługa klienta zarówno biznesowego jak i zwykłego</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Card title="Kursy i certyfikaty" delay={0.3}>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-[rgba(99,102,241,0.1)]">
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{color: 'var(--primary-light)'}}>Certyfikat profesjonalnego instalatora firmy GoodWe</span>
                      <span className="date-badge">03.2021</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-[rgba(99,102,241,0.1)]">
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{color: 'var(--primary-light)'}}>FIBER ACADEMY PLAY</span>
                      <span className="date-badge">05.2025</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-[rgba(99,102,241,0.1)]">
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{color: 'var(--primary-light)'}}>Uprawnienia SEP do 1 kV D+E</span>
                      <span className="date-badge">11.2019</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg transition-all duration-300 hover:bg-[rgba(99,102,241,0.1)]">
                    <div className="flex justify-between items-center">
                      <span className="font-medium" style={{color: 'var(--primary-light)'}}>Uprawnienia SEP G3 D+E</span>
                      <span className="date-badge">11.2019</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid-col-span-2">
                <Card title="Umiejętności techniczne" delay={0.4} className="grid-col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-opacity-20" style={{color: 'var(--primary-light)', borderColor: 'var(--primary)'}}>
                        Języki programowania
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="tag">Java</span>
                        <span className="tag">Kotlin</span>
                        <span className="tag">SQL</span>
                        <span className="tag">Swift</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-opacity-20" style={{color: 'var(--primary-light)', borderColor: 'var(--primary)'}}>
                        Języki obce
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="tag">Angielski - B2</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-opacity-20" style={{color: 'var(--primary-light)', borderColor: 'var(--primary)'}}>
                      Znajomość SOFT/IDE
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="tag">Eclipse</span>
                      <span className="tag">IntelliJ IDEA</span>
                      <span className="tag">Xcode</span>
                      <span className="tag">GitHub</span>
                      <span className="tag">Środowisko Docker</span>
                      <span className="tag">Springbot</span>
                      <span className="tag">React</span>
                      <span className="tag">PostgreSQL</span>
                      <span className="tag">Cassandra</span>
                      <span className="tag">MongoDB</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-opacity-20" style={{color: 'var(--primary-light)', borderColor: 'var(--primary)'}}>
                      Znajomość AI
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="tag">Ollama + Deepseek</span>
                      <span className="tag">API OpenAI</span>
                      <span className="tag">API Anthropic</span>
                      <span className="tag">Cursor</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="grid-col-span-2">
                <Card title="Dodatkowe umiejętności i osiągnięcia" delay={0.5}>
                  <ul className="custom-list space-y-4">
                    <li>Umiejętność współpracy z klientami w relacjach B2B oraz B2C, tworzenie ofert, planowanie, realizacja, budowanie wizerunku firmy</li>
                    <li>Opracowanie, zaprogramowanie oraz zbudowanie systemu komercyjnego do zbierania danych telemetrycznych oraz analizy i ich prezentacji. System został zbudowany dla potrzeb monitorowania oraz sterowania instalacją prototypową firmy SOLHOTAIR</li>
                    <li>Podstawowa znajomość programów do tworzenia obiektów 3D</li>
                    <li>Bardzo dobra znajomość w zakresie obsługi, naprawy oraz serwisowania komputerów (Hardware, Software)</li>
                    <li>Posiadane prawo jazdy kategorii B</li>
                  </ul>
                </Card>
              </div>
            </div>
          </main>
          
          <footer className="footer">
            <p>© {new Date().getFullYear()} | CV Piotr Peszko</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App 