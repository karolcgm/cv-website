import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import Card from './components/ui/Card'
import './index.css'

// Ostatnia aktualizacja: CV Piotr Peszko

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
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500 shadow-lg shadow-indigo-500/50">
          <div className="h-12 w-12 rounded-full border-r-2 border-l-2 border-purple-500 animate-spin absolute top-2 left-2"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Tło z gwiazdami */}
      <div className="fixed inset-0 z-0">
        <BackgroundEffects />
      </div>
      
      {/* Maski cieniowania na górze i dole */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0f1129] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f1129] to-transparent z-10"></div>

      <div className="relative z-20">
        <div className="main-container">
          {/* Header */}
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
              <a href="mailto:piotr.peszkoo@gmail.com" className="contact-item" style={{ width: '250px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>piotr.peszkoo@gmail.com</span>
              </a>
              
              <div className="contact-item" style={{ width: '250px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+48 535272451</span>
              </div>
              
              <div className="contact-item" style={{ width: '250px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Kukułcza 26, 43-190 Mikołów, Poland</span>
              </div>
            </motion.div>
          </header>

          {/* Główna zawartość */}
          <main>
            <div className="grid-layout">
              {/* Edukacja (przeniesiona jako pierwsza kolumna) */}
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