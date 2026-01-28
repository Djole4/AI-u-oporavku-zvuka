import { useState, useRef } from 'react'
import './Literatura.css'

function Literatura() {
  const [activeExample, setActiveExample] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPlayingBefore, setIsPlayingBefore] = useState(false)
  const [isPlayingAfter, setIsPlayingAfter] = useState(false)
  const [isPlayingVocal, setIsPlayingVocal] = useState(false)
  const [isPlayingInstrumental, setIsPlayingInstrumental] = useState(false)
  const [showAfter, setShowAfter] = useState(false)
  
  const audioBeforeRef = useRef(null)
  const audioAfterRef = useRef(null)
  const audioVocalRef = useRef(null)
  const audioInstrumentalRef = useRef(null)

  const aiExamples = [
    {
      id: 1,
      title: 'Uklanjanje šuma iz govora',
      icon: '🔊',
      iconBig: '🔊',
      before: 'Audio sa pozadinskim šumom',
      after: 'Čist govor bez šuma',
      technique: 'Deep Neural Networks',
      accuracy: '95%',
      speed: '~2s',
      hardware: 'GPU',
      color: '#667eea',
      type: 'single',
      audioFiles: {
        before: '/audio/noisy-speech.mp3',
        after: '/audio/clean-speech.mp3'
      }
    },
    {
      id: 2,
      title: 'Razdvajanje vokala i instrumentala',
      icon: '🎵',
      iconBig: '🎼',
      before: 'Kompletna pesma sa svim elementima',
      after: 'Razdvojeni vokal i instrumental',
      technique: 'Source Separation AI',
      accuracy: '92%',
      speed: '~4s',
      hardware: 'GPU',
      color: '#f093fb',
      type: 'dual',
      audioFiles: {
        before: '/audio/song.mp3',
        vocal: '/audio/vocal.mp3',
        instrumental: '/audio/instrumental.mp3'
      }
    }
  ]

  const stopAllAudio = () => {
    if (audioBeforeRef.current) {
      audioBeforeRef.current.pause()
      audioBeforeRef.current.currentTime = 0
    }
    if (audioAfterRef.current) {
      audioAfterRef.current.pause()
      audioAfterRef.current.currentTime = 0
    }
    if (audioVocalRef.current) {
      audioVocalRef.current.pause()
      audioVocalRef.current.currentTime = 0
    }
    if (audioInstrumentalRef.current) {
      audioInstrumentalRef.current.pause()
      audioInstrumentalRef.current.currentTime = 0
    }
    setIsPlayingBefore(false)
    setIsPlayingAfter(false)
    setIsPlayingVocal(false)
    setIsPlayingInstrumental(false)
  }

  const handleProcess = () => {
    setIsProcessing(true)
    stopAllAudio()
    
    setTimeout(() => {
      setIsProcessing(false)
      setShowAfter(true)
    }, 2000)
  }

  const togglePlayBefore = () => {
    if (!audioBeforeRef.current) return
    stopAllAudio()
    
    if (!isPlayingBefore) {
      audioBeforeRef.current.play()
      setIsPlayingBefore(true)
    }
  }

  const togglePlayAfter = () => {
    if (!audioAfterRef.current) return
    stopAllAudio()
    
    if (!isPlayingAfter) {
      audioAfterRef.current.play()
      setIsPlayingAfter(true)
    }
  }

  const togglePlayVocal = () => {
    if (!audioVocalRef.current) return
    stopAllAudio()
    
    if (!isPlayingVocal) {
      audioVocalRef.current.play()
      setIsPlayingVocal(true)
    }
  }

  const togglePlayInstrumental = () => {
    if (!audioInstrumentalRef.current) return
    stopAllAudio()
    
    if (!isPlayingInstrumental) {
      audioInstrumentalRef.current.play()
      setIsPlayingInstrumental(true)
    }
  }

  const handleAudioEnded = (type) => {
    if (type === 'before') setIsPlayingBefore(false)
    else if (type === 'after') setIsPlayingAfter(false)
    else if (type === 'vocal') setIsPlayingVocal(false)
    else if (type === 'instrumental') setIsPlayingInstrumental(false)
  }

  const handleExampleChange = (index) => {
    stopAllAudio()
    setShowAfter(false)
    setActiveExample(index)
  }

  const currentExample = aiExamples[activeExample]
  const hasAudio = currentExample.audioFiles !== null
  const isDualOutput = currentExample.type === 'dual'

  return (
    <div className="literatura-page">
      {/* Hero Section */}
      <section className="literatura-hero">
        <div className="container">
          <div className="ai-badge">
            <span className="badge-icon">👥</span>
            <span>Studentski Projekat uz AI Podršku</span>
          </div>
          <h1 className="page-title">
            <span className="gradient-text">Naš Tim & Korišćene Tehnologije</span>
          </h1>
          <p className="hero-subtitle">
            Ovaj projekat su razvili studenti koristeći moderne AI alate kao podršku.<br />
            Koristili smo veštačku inteligenciju za ubrzanje razvoja i rešavanje tehničkih izazova.
          </p>
        </div>
      </section>

      {/* Team Contribution Section */}
      <section className="ai-tools-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">👨‍💻</span>
            Naš Doprinos Projektu
          </h2>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🎯</div>
              <h3>Konceptualizacija</h3>
              <p>Osmišljavanje funkcionalnosti i korisničkog iskustva aplikacije</p>
              <div className="tool-stat">
                <span className="stat-value">100%</span>
                <span className="stat-label">Naš Rad</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">💻</div>
              <h3>Backend Razvoj</h3>
              <p>Kreiranje PHP API-ja, baze podataka i server logike</p>
              <div className="tool-stat">
                <span className="stat-value">PHP</span>
                <span className="stat-label">MySQL</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <h3>Frontend Dizajn</h3>
              <p>Razvoj React komponenti i korisničkog interfejsa</p>
              <div className="tool-stat">
                <span className="stat-value">React</span>
                <span className="stat-label">Vite</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🧪</div>
              <h3>Testiranje & Debug</h3>
              <p>Testiranje funkcionalnosti, ispravljanje grešaka i optimizacija</p>
              <div className="tool-stat">
                <span className="stat-value">QA</span>
                <span className="stat-label">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Used Section */}
      <section className="ai-tools-section" style={{ background: 'linear-gradient(180deg, rgba(102, 126, 234, 0.05) 0%, transparent 100%)' }}>
        <div className="container">
          <h2 className="section-title">
            <span className="icon">🤖</span>
            AI Alati Koje Smo Koristili
          </h2>
          
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">💬</div>
              <h3>GitHub Copilot</h3>
              <p>Pomoć pri pisanju koda i sugestije za optimizaciju</p>
              <div className="tool-stat">
                <span className="stat-value">AI</span>
                <span className="stat-label">Asistent</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <h3>ChatGPT & Claude</h3>
              <p>Rešavanje tehničkih problema i generisanje ideja</p>
              <div className="tool-stat">
                <span className="stat-value">AI</span>
                <span className="stat-label">Pomoćnik</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">📝</div>
              <h3>AI Dokumentacija</h3>
              <p>Pomoć pri pisanju komentara i README fajlova</p>
              <div className="tool-stat">
                <span className="stat-value">AI</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
            
            <div className="tool-card">
              <div className="tool-icon">🔍</div>
              <h3>AI Code Review</h3>
              <p>Analiza koda i predlozi za poboljšanja</p>
              <div className="tool-stat">
                <span className="stat-value">AI</span>
                <span className="stat-label">Reviewer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Examples Section */}
      <section className="examples-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">🎯</span>
            Interaktivni Primeri AI Obrade Zvuka
          </h2>
          <p className="section-subtitle">
            Klikni na primer da vidiš kako AI transformiše audio signale
          </p>
          
          <div className="examples-container">
            {/* Example Selector */}
            <div className="examples-selector">
              {aiExamples.map((example, index) => (
                <div
                  key={example.id}
                  className={`example-tab ${activeExample === index ? 'active' : ''}`}
                  onClick={() => handleExampleChange(index)}
                  style={{ '--tab-color': example.color }}
                >
                  <span className="tab-icon">{example.icon}</span>
                  <span className="tab-title">{example.title}</span>
                  {activeExample === index && <div className="tab-indicator"></div>}
                  {example.audioFiles && <span className="audio-badge">🔊</span>}
                </div>
              ))}
            </div>

            {/* Example Display */}
            <div className="example-display">
              <div className="example-content">
                <div className="example-header">
                  <div className="example-icon" style={{ background: currentExample.color }}>
                    <span className="icon-big">{currentExample.iconBig || currentExample.icon}</span>
                  </div>
                  <div>
                    <h3>{currentExample.title}</h3>
                    <p className="technique-badge">
                      <span className="badge-dot"></span>
                      {currentExample.technique}
                    </p>
                  </div>
                </div>

                {/* Single Output Layout */}
                {!isDualOutput && (
                  <div className="audio-comparison">
                    <div 
                      className={`audio-box before ${hasAudio ? 'clickable' : ''} ${isPlayingBefore ? 'playing' : ''}`}
                      onClick={hasAudio ? togglePlayBefore : undefined}
                    >
                      <div className="audio-label">
                        <span className="label-icon">🔴</span>
                        PRE OBRADE
                        {hasAudio && (
                          <span className="play-indicator">
                            {isPlayingBefore ? '⏸️' : '▶️'}
                          </span>
                        )}
                      </div>
                      <div className="waveform">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`wave-bar noisy ${isPlayingBefore ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                      <p className="audio-desc">{currentExample.before}</p>
                      {hasAudio && !isPlayingBefore && (
                        <p className="click-hint">Klikni da čuješ</p>
                      )}
                    </div>

                    <div className="process-arrow">
                      <button 
                        className={`process-btn ${isProcessing ? 'processing' : ''}`}
                        onClick={handleProcess}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner"></span>
                            Obrađuje...
                          </>
                        ) : (
                          <>
                            <span className="arrow">→</span>
                            AI Obrada
                          </>
                        )}
                      </button>
                    </div>

                    <div 
                      className={`audio-box after ${!showAfter ? 'hidden' : ''} ${hasAudio ? 'clickable' : ''} ${isPlayingAfter ? 'playing' : ''}`}
                      onClick={hasAudio && showAfter ? togglePlayAfter : undefined}
                    >
                      <div className="audio-label">
                        <span className="label-icon">🟢</span>
                        POSLE OBRADE
                        {hasAudio && showAfter && (
                          <span className="play-indicator">
                            {isPlayingAfter ? '⏸️' : '▶️'}
                          </span>
                        )}
                      </div>
                      <div className="waveform">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`wave-bar clean ${isPlayingAfter ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                      <p className="audio-desc">{currentExample.after}</p>
                      {hasAudio && showAfter && !isPlayingAfter && (
                        <p className="click-hint">Klikni da čuješ</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Dual Output Layout (Vocal & Instrumental) */}
                {isDualOutput && (
                  <div className="dual-output-container">
                    <div 
                      className={`audio-box-full source ${hasAudio ? 'clickable' : ''} ${isPlayingBefore ? 'playing' : ''}`}
                      onClick={hasAudio ? togglePlayBefore : undefined}
                    >
                      <div className="audio-label">
                        <span className="label-icon">🎵</span>
                        ORIGINALNA PESMA
                        {hasAudio && (
                          <span className="play-indicator">
                            {isPlayingBefore ? '⏸️' : '▶️'}
                          </span>
                        )}
                      </div>
                      <div className="waveform-large">
                        {[...Array(30)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`wave-bar mixed ${isPlayingBefore ? 'active' : ''}`}
                          ></div>
                        ))}
                      </div>
                      <p className="audio-desc">{currentExample.before}</p>
                      {hasAudio && !isPlayingBefore && (
                        <p className="click-hint">Klikni da čuješ originalnu pesmu</p>
                      )}
                    </div>

                    <div className="separator-with-button">
                      <div className="separator-line"></div>
                      <button 
                        className={`process-btn-dual ${isProcessing ? 'processing' : ''}`}
                        onClick={handleProcess}
                      >
                        {isProcessing ? (
                          <>
                            <span className="spinner"></span>
                            Razdvajam...
                          </>
                        ) : (
                          <>
                            <span className="split-icon">✂️</span>
                            AI Razdvajanje
                          </>
                        )}
                      </button>
                      <div className="separator-line"></div>
                    </div>

                    <div className={`dual-outputs ${!showAfter ? 'hidden' : ''}`}>
                      <div 
                        className={`audio-box-dual vocal ${hasAudio && showAfter ? 'clickable' : ''} ${isPlayingVocal ? 'playing' : ''}`}
                        onClick={hasAudio && showAfter ? togglePlayVocal : undefined}
                      >
                        <div className="output-badge vocal-badge">
                          <span className="badge-emoji">🎤</span>
                          <span className="badge-text">VOKAL</span>
                          {hasAudio && showAfter && (
                            <span className="play-indicator-dual">
                              {isPlayingVocal ? '⏸️' : '▶️'}
                            </span>
                          )}
                        </div>
                        <div className="waveform">
                          {[...Array(20)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`wave-bar vocal ${isPlayingVocal ? 'active' : ''}`}
                            ></div>
                          ))}
                        </div>
                        <p className="audio-desc">Izolovani vokal</p>
                        {hasAudio && showAfter && !isPlayingVocal && (
                          <p className="click-hint">Klikni za vokal</p>
                        )}
                      </div>

                      <div 
                        className={`audio-box-dual instrumental ${hasAudio && showAfter ? 'clickable' : ''} ${isPlayingInstrumental ? 'playing' : ''}`}
                        onClick={hasAudio && showAfter ? togglePlayInstrumental : undefined}
                      >
                        <div className="output-badge instrumental-badge">
                          <span className="badge-emoji">🎸</span>
                          <span className="badge-text">INSTRUMENTAL</span>
                          {hasAudio && showAfter && (
                            <span className="play-indicator-dual">
                              {isPlayingInstrumental ? '⏸️' : '▶️'}
                            </span>
                          )}
                        </div>
                        <div className="waveform">
                          {[...Array(20)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`wave-bar instrumental ${isPlayingInstrumental ? 'active' : ''}`}
                            ></div>
                          ))}
                        </div>
                        <p className="audio-desc">Izolovani instrumental</p>
                        {hasAudio && showAfter && !isPlayingInstrumental && (
                          <p className="click-hint">Klikni za instrumental</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Hidden Audio Elements */}
                {hasAudio && !isDualOutput && (
                  <>
                    <audio 
                      ref={audioBeforeRef} 
                      src={currentExample.audioFiles.before}
                      onEnded={() => handleAudioEnded('before')}
                    />
                    <audio 
                      ref={audioAfterRef} 
                      src={currentExample.audioFiles.after}
                      onEnded={() => handleAudioEnded('after')}
                    />
                  </>
                )}

                {hasAudio && isDualOutput && (
                  <>
                    <audio 
                      ref={audioBeforeRef} 
                      src={currentExample.audioFiles.before}
                      onEnded={() => handleAudioEnded('before')}
                    />
                    <audio 
                      ref={audioVocalRef} 
                      src={currentExample.audioFiles.vocal}
                      onEnded={() => handleAudioEnded('vocal')}
                    />
                    <audio 
                      ref={audioInstrumentalRef} 
                      src={currentExample.audioFiles.instrumental}
                      onEnded={() => handleAudioEnded('instrumental')}
                    />
                  </>
                )}

                <div className="example-stats">
                  <div className="stat-item accuracy">
                    <div className="stat-icon-wrapper">
                      <span className="stat-emoji">🎯</span>
                    </div>
                    <div className="stat-circle" style={{ 
                      '--circle-color': currentExample.color,
                      '--progress': parseInt(currentExample.accuracy)
                    }}>
                      <div className="circle-progress">
                        <div className="circle-value">{currentExample.accuracy}</div>
                      </div>
                    </div>
                    <span className="stat-label">Preciznost</span>
                  </div>
                  <div className="stat-item speed">
                    <div className="stat-icon-wrapper">
                      <span className="stat-emoji">⚡</span>
                    </div>
                    <div className="stat-circle" style={{ 
                      '--circle-color': '#43e97b',
                      '--progress': 85
                    }}>
                      <div className="circle-progress">
                        <div className="circle-value">{currentExample.speed}</div>
                      </div>
                    </div>
                    <span className="stat-label">Vreme Obrade</span>
                  </div>
                  <div className="stat-item hardware">
                    <div className="stat-icon-wrapper">
                      <span className="stat-emoji">🖥️</span>
                    </div>
                    <div className="stat-circle" style={{ 
                      '--circle-color': '#f093fb',
                      '--progress': 90
                    }}>
                      <div className="circle-progress">
                        <div className="circle-value">{currentExample.hardware}</div>
                      </div>
                    </div>
                    <span className="stat-label">Ubrzano</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Impact Section */}
      <section className="ai-impact-section">
        <div className="container">
          <div className="impact-content">
            <div className="impact-text">
              <h2>Kako Nam je AI Pomogao u Razvoju</h2>
              <div className="impact-points">
                <div className="impact-point">
                  <span className="point-icon">⚡</span>
                  <div>
                    <h4>Ubrzanje Razvoja</h4>
                    <p>AI alati su nam pomogli da brže pišemo kod i rešavamo rutinske zadatke</p>
                  </div>
                </div>
                <div className="impact-point">
                  <span className="point-icon">💡</span>
                  <div>
                    <h4>Nove Ideje</h4>
                    <p>Dobijali smo sugestije za dizajn i implementaciju funkcionalnosti</p>
                  </div>
                </div>
                <div className="impact-point">
                  <span className="point-icon">🐛</span>
                  <div>
                    <h4>Brže Debugging</h4>
                    <p>AI nam je pomagao da pronađemo i ispravimo greške u kodu</p>
                  </div>
                </div>
                <div className="impact-point">
                  <span className="point-icon">📖</span>
                  <div>
                    <h4>Učenje i Razvoj</h4>
                    <p>Kroz rad sa AI alatima smo naučili nove tehnike i best practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="impact-visual">
              <div className="ai-brain">
                <div className="brain-core"></div>
                <div className="brain-wave wave-1"></div>
                <div className="brain-wave wave-2"></div>
                <div className="brain-wave wave-3"></div>
                <div className="brain-particles">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="particle" style={{ '--i': i }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Literatura
