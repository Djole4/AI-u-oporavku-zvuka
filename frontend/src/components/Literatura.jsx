import './Literatura.css'

function Literatura() {
  // OVDE UBACI LINKOVE I PODATKE O LITERATURI
  const references = {
    books: [
      {
        id: 1,
        title: 'Deep Learning for Audio Signal Processing',
        authors: 'Author Name Here', // UBACI IME AUTORA
        year: '2023',
        publisher: 'Publisher Name', // UBACI IZDAVAČA
        // UBACI LINK (opciono):
        link: '',
        description: 'Knjiga o primeni dubokog učenja u obradi audio signala'
      },
      {
        id: 2,
        title: 'Audio Restoration Techniques',
        authors: 'Author Name Here', // UBACI IME AUTORA
        year: '2022',
        publisher: 'Publisher Name', // UBACI IZDAVAČA
        // UBACI LINK (opciono):
        link: '',
        description: 'Tehnike restauracije audio zapisa'
      },
      {
        id: 3,
        title: 'Neural Networks and Audio Processing',
        authors: 'Author Name Here', // UBACI IME AUTORA
        year: '2024',
        publisher: 'Publisher Name', // UBACI IZDAVAČA
        // UBACI LINK (opciono):
        link: '',
        description: 'Neuronske mreže u audio obradi'
      }
    ],
    articles: [
      {
        id: 1,
        title: 'AI-Based Audio Enhancement: A Survey',
        authors: 'Author Names', // UBACI AUTORE
        journal: 'Journal Name', // UBACI NAZIV ČASOPISA
        year: '2023',
        // UBACI LINK:
        link: '',
        doi: '' // UBACI DOI (opciono)
      },
      {
        id: 2,
        title: 'Noise Reduction Using Deep Neural Networks',
        authors: 'Author Names', // UBACI AUTORE
        journal: 'Journal Name', // UBACI NAZIV ČASOPISA
        year: '2024',
        // UBACI LINK:
        link: '',
        doi: '' // UBACI DOI (opciono)
      },
      {
        id: 3,
        title: 'Machine Learning Approaches to Audio Restoration',
        authors: 'Author Names', // UBACI AUTORE
        journal: 'Journal Name', // UBACI NAZIV ČASOPISA
        year: '2023',
        // UBACI LINK:
        link: '',
        doi: '' // UBACI DOI (opciono)
      }
    ],
    webResources: [
      {
        id: 1,
        title: 'TensorFlow Audio Processing Tutorial',
        source: 'TensorFlow Official Documentation',
        // UBACI LINK:
        link: 'https://www.tensorflow.org/tutorials/audio',
        accessDate: '2024',
        description: 'Zvanična TensorFlow dokumentacija za audio obradu'
      },
      {
        id: 2,
        title: 'PyTorch Audio Documentation',
        source: 'PyTorch Official',
        // UBACI LINK:
        link: '',
        accessDate: '2024',
        description: 'PyTorch biblioteke za audio'
      },
      {
        id: 3,
        title: 'Librosa - Python Audio Analysis',
        source: 'Librosa Documentation',
        // UBACI LINK:
        link: '',
        accessDate: '2024',
        description: 'Python biblioteka za analizu audio signala'
      },
      {
        id: 4,
        title: 'Audio AI Research Papers',
        source: 'ArXiv.org',
        // UBACI LINK:
        link: '',
        accessDate: '2024',
        description: 'Naučni radovi o AI u audio obradi'
      }
    ],
    videos: [
      {
        id: 1,
        title: 'Introduction to Audio Deep Learning',
        channel: 'YouTube Channel Name', // UBACI KANAL
        // UBACI LINK:
        link: '',
        duration: '45:00',
        description: 'Video tutorial o dubokom učenju u audio obradi'
      },
      {
        id: 2,
        title: 'Audio Signal Processing with Python',
        channel: 'YouTube Channel Name', // UBACI KANAL
        // UBACI LINK:
        link: '',
        duration: '1:20:00',
        description: 'Kompletan kurs o obradi audio signala'
      }
    ]
  }

  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <div className="literatura-page">
      {/* Hero Section */}
      <section className="literatura-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="icon">📖</span>
            <span className="gradient-text">Literatura</span>
          </h1>
          <p className="page-subtitle">
            Pregled svih izvora korišćenih u istraživanju i izradi projekta
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="references-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">📚</span>
            Knjige
          </h2>
          
          <div className="references-grid">
            {references.books.map((book) => (
              <div key={book.id} className="reference-card book-card">
                <div className="ref-number">{book.id}</div>
                <div className="ref-content">
                  <h3>{book.title}</h3>
                  <p className="ref-authors">{book.authors}</p>
                  <div className="ref-meta">
                    <span className="ref-year">{book.year}</span>
                    <span className="ref-separator">•</span>
                    <span className="ref-publisher">{book.publisher}</span>
                  </div>
                  <p className="ref-description">{book.description}</p>
                  {book.link && (
                    <button 
                      className="ref-link-btn"
                      onClick={() => handleLinkClick(book.link)}
                    >
                      <span>🔗</span> Pogledaj
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="references-section alt-bg">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">📄</span>
            Naučni Članci
          </h2>
          
          <div className="references-grid">
            {references.articles.map((article) => (
              <div key={article.id} className="reference-card article-card">
                <div className="ref-number">{article.id}</div>
                <div className="ref-content">
                  <h3>{article.title}</h3>
                  <p className="ref-authors">{article.authors}</p>
                  <div className="ref-meta">
                    <span className="ref-journal">{article.journal}</span>
                    <span className="ref-separator">•</span>
                    <span className="ref-year">{article.year}</span>
                  </div>
                  {article.doi && (
                    <p className="ref-doi">DOI: {article.doi}</p>
                  )}
                  {article.link && (
                    <button 
                      className="ref-link-btn"
                      onClick={() => handleLinkClick(article.link)}
                    >
                      <span>🔗</span> Pročitaj
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Resources Section */}
      <section className="references-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">🌐</span>
            Web Resursi
          </h2>
          
          <div className="web-resources-grid">
            {references.webResources.map((resource) => (
              <div key={resource.id} className="web-resource-card">
                <div className="resource-icon">🔗</div>
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p className="resource-source">{resource.source}</p>
                  <p className="resource-description">{resource.description}</p>
                  <div className="resource-footer">
                    <span className="resource-date">Pristupljeno: {resource.accessDate}</span>
                    {resource.link && (
                      <button 
                        className="resource-visit-btn"
                        onClick={() => handleLinkClick(resource.link)}
                      >
                        Poseti →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="references-section alt-bg">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">🎬</span>
            Video Tutoriali
          </h2>
          
          <div className="video-refs-grid">
            {references.videos.map((video) => (
              <div key={video.id} className="video-ref-card">
                <div className="video-thumbnail">
                  <span className="play-icon">▶</span>
                </div>
                <div className="video-ref-content">
                  <h3>{video.title}</h3>
                  <p className="video-channel">📺 {video.channel}</p>
                  <p className="video-description">{video.description}</p>
                  <div className="video-ref-footer">
                    <span className="video-duration">⏱️ {video.duration}</span>
                    {video.link && (
                      <button 
                        className="video-watch-btn"
                        onClick={() => handleLinkClick(video.link)}
                      >
                        Gledaj
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation Note */}
      <section className="citation-section">
        <div className="container">
          <div className="citation-box">
            <h3>📋 Napomena o Citiranju</h3>
            <p>
              Svi navedeni izvori su korišćeni u skladu sa akademskim standardima citiranja.
              Za detaljnije informacije o korišćenim izvorima, posetite linkove ili kontaktirajte autore projekta.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Literatura
