import { useState, useEffect } from 'react'
import './App.css'
import Materials from './components/Materials'
import Literatura from './components/Literatura'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [currentPage, setCurrentPage] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle initial page load from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && ['home', 'materijal', 'literatura', 'kviz'].includes(hash)) {
      setCurrentPage(hash)
      setActiveSection(hash)
    }
  }, [])

  // Listen for hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      if (['home', 'materijal', 'literatura', 'kviz'].includes(hash)) {
        setCurrentPage(hash)
        setActiveSection(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    setActiveSection(page)
    window.location.hash = page
    window.scrollTo(0, 0)
  }

  // Render different pages based on currentPage
  if (currentPage === 'materijal') {
    return (
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
              <span className="logo-icon">🎵</span>
              <span className="logo-text">AI Audio Restoration</span>
            </div>
            <ul className="nav-menu">
              <li className={activeSection === 'home' ? 'active' : ''}>
                <a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Početna</a>
              </li>
              <li className={activeSection === 'materijal' ? 'active' : ''}>
                <a href="#materijal" onClick={(e) => { e.preventDefault(); navigateTo('materijal'); }}>Materijal</a>
              </li>
              <li className={activeSection === 'literatura' ? 'active' : ''}>
                <a href="#literatura" onClick={(e) => { e.preventDefault(); navigateTo('literatura'); }}>Literatura</a>
              </li>
              <li className={activeSection === 'kviz' ? 'active' : ''}>
                <a href="#kviz" onClick={(e) => { e.preventDefault(); navigateTo('kviz'); }}>Kviz</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <Materials />
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>AI Audio Restoration</h3>
                <p>Edukativni projekat o primeni veštačke inteligencije u oporavku zvuka</p>
              </div>
              <div className="footer-section">
                <h4>Linkovi</h4>
                <ul>
                  <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Početna</a></li>
                  <li><a href="#materijal" onClick={(e) => { e.preventDefault(); navigateTo('materijal'); }}>Materijal</a></li>
                  <li><a href="#literatura" onClick={(e) => { e.preventDefault(); navigateTo('literatura'); }}>Literatura</a></li>
                  <li><a href="#kviz" onClick={(e) => { e.preventDefault(); navigateTo('kviz'); }}>Kviz</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Autori</h4>
                <div className="authors">
                  <p>👨‍🎓 Đorđe Đoković 121/2023</p>
                  <p>👨‍🎓 Igor Janičijević</p>
                  <p>👨‍🎓 Đorđe Marković 127/2023</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  // Render Literatura page
  if (currentPage === 'literatura') {
    return (
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
              <span className="logo-icon">🎵</span>
              <span className="logo-text">AI Audio Restoration</span>
            </div>
            <ul className="nav-menu">
              <li className={activeSection === 'home' ? 'active' : ''}>
                <a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Početna</a>
              </li>
              <li className={activeSection === 'materijal' ? 'active' : ''}>
                <a href="#materijal" onClick={(e) => { e.preventDefault(); navigateTo('materijal'); }}>Materijal</a>
              </li>
              <li className={activeSection === 'literatura' ? 'active' : ''}>
                <a href="#literatura" onClick={(e) => { e.preventDefault(); navigateTo('literatura'); }}>Literatura</a>
              </li>
              <li className={activeSection === 'kviz' ? 'active' : ''}>
                <a href="#kviz" onClick={(e) => { e.preventDefault(); navigateTo('kviz'); }}>Kviz</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <Literatura />
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>AI Audio Restoration</h3>
                <p>Edukativni projekat o primeni veštačke inteligencije u oporavku zvuka</p>
              </div>
              <div className="footer-section">
                <h4>Linkovi</h4>
                <ul>
                  <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }}>Početna</a></li>
                  <li><a href="#materijal" onClick={(e) => { e.preventDefault(); navigateTo('materijal'); }}>Materijal</a></li>
                  <li><a href="#literatura" onClick={(e) => { e.preventDefault(); navigateTo('literatura'); }}>Literatura</a></li>
                  <li><a href="#kviz" onClick={(e) => { e.preventDefault(); navigateTo('kviz'); }}>Kviz</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Autori</h4>
                <div className="authors">
                  <p>👨‍🎓 Đorđe Đoković 121/2023</p>
                  <p>👨‍🎓 Igor Janičijević</p>
                  <p>👨‍🎓 Đorđe Marković 127/2023</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🎵</span>
            <span className="logo-text">AI Audio Restoration</span>
          </div>
          <ul className="nav-menu">
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={() => setActiveSection('home')}>Početna</a>
            </li>
            <li className={activeSection === 'materijal' ? 'active' : ''}>
              <a href="#materijal" onClick={(e) => { e.preventDefault(); navigateTo('materijal'); }}>Materijal</a>
            </li>
            <li className={activeSection === 'literatura' ? 'active' : ''}>
              <a href="#literatura" onClick={(e) => { e.preventDefault(); navigateTo('literatura'); }}>Literatura</a>
            </li>
            <li className={activeSection === 'kviz' ? 'active' : ''}>
              <a href="#kviz" onClick={() => setActiveSection('kviz')}>Kviz</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Veštačka Inteligencija</span>
            <br />
            u Oporavku Zvuka
          </h1>
          <p className="hero-subtitle">
            Revolucija u obnovi i poboljšanju audio zapisa korišćenjem naprednih AI tehnologija
          </p>
          <div className="hero-animation">
            <div className="sound-wave">
              <div className="wave-bar" style={{ animationDelay: '0s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.1s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.2s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.3s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.4s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.3s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.2s' }}></div>
              <div className="wave-bar" style={{ animationDelay: '0.1s' }}></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="section ai-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content fade-in-left">
              <h2 className="section-title">
                <span className="icon">🤖</span>
                Šta je Veštačka Inteligencija?
              </h2>
              <p className="section-text">
                Veštačka inteligencija (AI) je grana računarstva koja se bavi kreiranjem inteligentnih sistema 
                sposobnih da izvršavaju zadatke koji obično zahtevaju ljudsku inteligenciju. To uključuje učenje, 
                zaključivanje, prepoznavanje obrazaca i prilagođavanje novim situacijama.
              </p>
              <p className="section-text">
                U kontekstu obrade zvuka, AI koristi napredne algoritme mašinskog učenja i duboke neuronske mreže 
                da analizira, razume i poboljšava audio signale na načine koji prevazilaze tradicionalne metode.
              </p>
              <div className="features-grid">
                <div className="feature-card">
                  <span className="feature-icon">🧠</span>
                  <h3>Mašinsko Učenje</h3>
                  <p>Algoritmi koji uče iz podataka</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🔍</span>
                  <h3>Prepoznavanje Obrazaca</h3>
                  <p>Identifikacija šumova i distorzija</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">⚡</span>
                  <h3>Automatizacija</h3>
                  <p>Brza i efikasna obrada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Sound Section */}
      <section className="section sound-section">
        <div className="container">
          <div className="section-content reverse">
            <div className="text-content fade-in-right">
              <h2 className="section-title">
                <span className="icon">🎵</span>
                Šta je Zvuk?
              </h2>
              <p className="section-text">
                Zvuk je mehanički talas koji se prostire kroz medijum (vazduh, vodu, čvrste materijale) kao 
                rezultat vibracija. U digitalnom svetu, zvuk se predstavlja kao niz numeričkih vrednosti 
                koje opisuju amplitudu talasa u različitim trenucima.
              </p>
              <p className="section-text">
                Kvalitet zvučnog zapisa može biti ugrožen šumom, distorzijom, ehoviranjem i drugim artefaktima. 
                Tradicionalni pristupi oporavku zvuka često zahtevaju ručno podešavanje parametara, što je 
                vremenski zahtevno i zahteva stručnost.
              </p>
              <div className="sound-properties">
                <div className="property">
                  <div className="property-label">Frekvencija</div>
                  <div className="property-bar" style={{ width: '70%' }}></div>
                  <div className="property-value">20 Hz - 20 kHz</div>
                </div>
                <div className="property">
                  <div className="property-label">Amplituda</div>
                  <div className="property-bar" style={{ width: '85%' }}></div>
                  <div className="property-value">Jačina zvuka</div>
                </div>
                <div className="property">
                  <div className="property-label">Kvalitet</div>
                  <div className="property-bar" style={{ width: '60%' }}></div>
                  <div className="property-value">Sample Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI in Audio Restoration */}
      <section className="section restoration-section">
        <div className="container">
          <div className="section-content">
            <div className="text-content fade-in-up">
              <h2 className="section-title centered">
                <span className="icon">✨</span>
                AI u Oporavku Zvuka
              </h2>
              <p className="section-text centered">
                Primena veštačke inteligencije u oporavku zvuka donosi revolucionarne mogućnosti koje 
                transformišu način na koji pristupamo restauraciji audio zapisa.
              </p>
              
              <div className="restoration-features">
                <div className="resto-card">
                  <div className="resto-icon">🔇</div>
                  <h3>Uklanjanje Šuma</h3>
                  <p>
                    AI algoritmi mogu prepoznati i ukloniti različite vrste šumova (pozadinski šum, šum mikrofona, 
                    električni šum) bez degradacije originalnog audio signala.
                  </p>
                </div>
                
                <div className="resto-card">
                  <div className="resto-icon">🎚️</div>
                  <h3>Poboljšanje Jasnoće</h3>
                  <p>
                    Neuronske mreže mogu povećati jasnoću govora, poboljšati tonalnost i balansirati 
                    frekventni spektar za optimalan audio kvalitet.
                  </p>
                </div>
                
                <div className="resto-card">
                  <div className="resto-icon">🔊</div>
                  <h3>Restauracija Oštećenih Zapisa</h3>
                  <p>
                    AI može rekonstruisati nedostajuće delove audio zapisa, popraviti distorziju i 
                    obnoviti istorijske snimke do studijskog kvaliteta.
                  </p>
                </div>
                
                <div className="resto-card">
                  <div className="resto-icon">🎼</div>
                  <h3>Separacija Izvora</h3>
                  <p>
                    Napredni algoritmi mogu razdvojiti različite audio izvore (vokali, instrumenti) 
                    iz miks zapisa, omogućavajući individualnu obradu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technologies Section */}
      <section className="section tech-section">
        <div className="container">
          <h2 className="section-title centered">
            <span className="icon">🔬</span>
            Ključne Tehnologije
          </h2>
          
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-header">
                <span className="tech-number">01</span>
                <h3>Duboke Neuronske Mreže</h3>
              </div>
              <p>
                Konvolucione i rekurentne neuronske mreže (CNN, RNN) omogućavaju dubinsku analizu 
                audio signala i učenje kompleksnih obrazaca šuma i distorzije.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-header">
                <span className="tech-number">02</span>
                <h3>Generativne Mreže (GAN)</h3>
              </div>
              <p>
                Generativne adversarijalne mreže mogu generisati "čist" audio iz šumnog ulaza, 
                učeći razliku između kvalitetnog i degradiranog zvuka.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-header">
                <span className="tech-number">03</span>
                <h3>Spektralna Analiza</h3>
              </div>
              <p>
                AI koristi naprednu spektralnu analizu (STFT, Mel spektrogrami) da razume 
                frekventne karakteristike i targetuje specifične probleme.
              </p>
            </div>
            
            <div className="tech-card">
              <div className="tech-header">
                <span className="tech-number">04</span>
                <h3>Transfer Learning</h3>
              </div>
              <p>
                Modeli trenirani na velikim datasetima mogu biti prilagođeni specifičnim zadacima, 
                omogućavajući brzo i efikasno učenje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="section importance-section">
        <div className="container">
          <h2 className="section-title centered">
            <span className="icon">💡</span>
            Zašto je Ovo Važno?
          </h2>
          
          <div className="importance-content">
            <div className="importance-item">
              <div className="importance-number">📚</div>
              <div className="importance-text">
                <h3>Očuvanje Kulturne Baštine</h3>
                <p>
                  AI omogućava restauraciju istorijskih audio zapisa, snimaka govora, muzičkih dela 
                  i dokumenata, čuvajući ih za buduće generacije.
                </p>
              </div>
            </div>
            
            <div className="importance-item">
              <div className="importance-number">🎬</div>
              <div className="importance-text">
                <h3>Film i Produkcija</h3>
                <p>
                  U filmskoj i muzičkoj industriji, AI alati za oporavak zvuka ubrzavaju postprodukciju 
                  i omogućavaju kreativne mogućnosti koje ranije nisu bile dostupne.
                </p>
              </div>
            </div>
            
            <div className="importance-item">
              <div className="importance-number">🔬</div>
              <div className="importance-text">
                <h3>Naučna Istraživanja</h3>
                <p>
                  U forenzici, medicini i nauci, kvalitetni audio zapisi su ključni za analizu, 
                  dijagnozu i istraživanje.
                </p>
              </div>
            </div>
            
            <div className="importance-item">
              <div className="importance-number">♿</div>
              <div className="importance-text">
                <h3>Pristupačnost</h3>
                <p>
                  Poboljšani audio kvalitet čini sadržaj pristupačnijim osobama sa oštećenjem sluha 
                  i olakšava komunikaciju u svim oblicima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>AI Audio Restoration</h3>
              <p>Edukativni projekat o primeni veštačke inteligencije u oporavku zvuka</p>
            </div>
            <div className="footer-section">
              <h4>Linkovi</h4>
              <ul>
                <li><a href="#home">Početna</a></li>
                <li><a href="#materijal">Materijal</a></li>
                <li><a href="#literatura">Literatura</a></li>
                <li><a href="#kviz">Kviz</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Autori</h4>
              <div className="authors">
                <p>👨‍🎓 Đorđe Đoković 121/2023</p>
                <p>👨‍🎓 Igor Janičijević 000/2023</p>
                <p>👨‍🎓 Đorđe Marković 127/2023</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
