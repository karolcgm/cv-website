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
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="fixed inset-0 z-0">
        <BackgroundEffects />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-10">
        <main className="relative z-10">
          <motion.section 
            id="hero" 
            className="mx-auto mb-16 max-w-4xl text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                PESZKO PIOTR
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-gray-300">
              <a href="mailto:piotr.peszkoo@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                piotr.peszkoo@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +48 535272451
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Kukułcza 26, 43-190 Mikołów, Poland
              </span>
            </div>
          </motion.section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Doświadczenie" delay={0.1}>
              <div className="space-y-6">
                <div className="experience-item">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-blue-400">GU-BAU Technic</h3>
                    <span className="text-sm text-gray-400">10.2024 - obecnie</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Szwajcaria, Ebnat-Kappel</p>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    <li>Monter - instalacja oraz integracja urządzeń grzewczych z systemami chmurowymi</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-blue-400">Piotr Peszko PUR-THERM ECO</h3>
                    <span className="text-sm text-gray-400">04.2016 - Aktualnie</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-1">Samozatrudnienie, Mikołów</p>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    <li>Instalator fotowoltaiki, urządzeń grzeczych oraz chłodniczych</li>
                    <li>Projektowanie oraz montaż automatyki inteligentnego domu</li>
                    <li>Tworzenie własnych, autorskich systemów sterowania inteligentnym domem, opartych o MCU serii Atmega oraz ESP</li>
                    <li>Integrowanie systemów opartych protokoły Modbus, Opentherm</li>
                    <li>Instalowanie systemów komercyjnych opartych o sieć zigbee</li>
                    <li>Wprowadzanie rozwiązań IoT, zarządzanie strumieniami danych</li>
                    <li>Programowanie sterowników w C++ / bascom AVR</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <p className="text-sm text-gray-300 mb-1">Współpraca jako partner biznesowy sieci PLAY w zakresie:</p>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    <li>Budowa sieci HFC, sieci światłowodowych, sieci LAN</li>
                    <li>Montaż, konfiguracja, serwis i naprawa instalacji u klienta</li>
                    <li>Konfiguracja komputerów, urządzeń sieciowych Klientów sieci PLAY, T-mobile</li>
                    <li>Obsługa klienta zarówno biznesowego jak i zwykłego</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="Edukacja" delay={0.2}>
              <div className="space-y-6">
                <div className="education-item">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-blue-400">Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie</h3>
                    <span className="text-sm text-gray-400">koniec 2025</span>
                  </div>
                  <p className="text-sm text-gray-300">Kierunek "Geodezja i Kartografia"</p>
                </div>

                <div className="education-item">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-blue-400">Politechnika Śląska Gliwice</h3>
                    <span className="text-sm text-gray-400">09.2022 - 01.2023</span>
                  </div>
                  <p className="text-sm text-gray-300">Studia podyplomowe</p>
                  <p className="text-sm text-gray-300">Kierunek Inżynieria Aplikacji Mobilnych i Baz Danych</p>
                </div>
              </div>
            </Card>

            <Card title="Kursy i certyfikaty" delay={0.3}>
              <div className="space-y-4">
                <div className="certificate-item">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-300">GoodWe+</span>
                    <span className="text-sm text-gray-400">05.2025</span>
                  </div>
                  <p className="text-sm text-gray-300">Certyfikat profesjonalnego instalatora firmy GoodWe</p>
                </div>

                <div className="certificate-item">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-300">FIBER ACADEMY PLAY</span>
                    <span className="text-sm text-gray-400">03.2021</span>
                  </div>
                  <p className="text-sm text-gray-300">Certyfikat uczestnictwa w szkoleniu</p>
                </div>

                <div className="certificate-item">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-300">Uprawnienia SEP do 1 kV D+E</span>
                    <span className="text-sm text-gray-400">11.2019</span>
                  </div>
                </div>

                <div className="certificate-item">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-300">Uprawnienia SEP G3 D+E</span>
                    <span className="text-sm text-gray-400">11.2019</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Umiejętności techniczne" delay={0.4}>
              <div className="mb-6">
                <h3 className="text-md font-semibold text-blue-400 mb-2">Języki programowania</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Kotlin</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Swift</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-md font-semibold text-blue-400 mb-2">Znajomość SOFT/IDE</h3>
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
              
              <div className="mb-6">
                <h3 className="text-md font-semibold text-blue-400 mb-2">Znajomość AI</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Ollama + Deepseek</span>
                  <span className="skill-tag">API OpenAI</span>
                  <span className="skill-tag">API Anthropic</span>
                  <span className="skill-tag">Cursor</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-md font-semibold text-blue-400 mb-2">Języki</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">Angielski - B2</span>
                </div>
              </div>
            </Card>
            
            <Card title="Dodatkowe umiejętności i osiągnięcia" delay={0.5}>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-3">
                <li>Umiejętność współpracy z klientami w relacjach B2B oraz B2C, tworzenie ofert, planowanie, realizacja, budowanie wizerunku firmy</li>
                <li>Opracowanie, zaprogramowanie oraz zbudowanie systemu komercyjnego do zbierania danych telemetrycznych oraz analizy i ich prezentacji. System został zbudowany dla potrzeb monitorowania oraz sterowania instalacją prototypową firmy SOLHOTAIR</li>
                <li>Podstawowa znajomość programów do tworzenia obiektów 3D</li>
                <li>Bardzo dobra znajomość w zakresie obsługi, naprawy oraz serwisowania komputerów (Hardware, Software)</li>
              </ul>
            </Card>
            
            <Card title="Dane personalne" delay={0.6}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-400">Data urodzenia</p>
                  <p className="text-sm text-gray-300">20.01.1988</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400">Narodowość</p>
                  <p className="text-sm text-gray-300">Polska</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-400">Prawo jazdy</p>
                  <p className="text-sm text-gray-300">Kategoria B</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App 