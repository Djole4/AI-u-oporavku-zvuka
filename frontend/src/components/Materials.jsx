import { useState } from 'react'
import './Materials.css'

function Materials() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  // OVDE UBACI PUTANJE DO TVOJIH FAJLOVA
  const documents = [
    {
      id: 1,
      type: 'word',
      title: 'AI u Oporavku Zvuka - Dokumentacija',
      description: 'Detaljno objašnjenje tehnika i metoda',
      icon: '📄',
      // UBACI PUTANJU: /public/materials/dokument.docx
      downloadUrl: '/materials/dokument.docx',
      size: '2.5 MB'
    },
    {
      id: 2,
      type: 'pdf',
      title: 'Istraživanje i Rezultati',
      description: 'Naučni rad i analiza podataka',
      icon: '📕',
      // UBACI PUTANJU: /public/materials/istrazivanje.pdf
      downloadUrl: '/materials/istrazivanje.pdf',
      size: '3.8 MB'
    },
    {
      id: 3,
      type: 'powerpoint',
      title: 'Prezentacija Projekta',
      description: 'PowerPoint prezentacija sa rezultatima',
      icon: '📊',
      // UBACI PUTANJU: /public/materials/prezentacija.pptx
      downloadUrl: '/materials/prezentacija.pptx',
      size: '5.2 MB'
    }
  ]

  const videos = [
    {
      id: 1,
      author: 'Đorđe Đoković 121/2023',
      title: 'Uvod u veštačku inteligenciju i osnovi rada sa zvukom',
      // UBACI PUTANJU: /public/videos/video1.mp4
      videoUrl: '/videos/video1.mp4',
      thumbnail: '🎬'
    },
    {
      id: 2,
      author: 'Igor Janičijević 022/2023',
      title: 'Budućnost AI obrade zvuka i etička pitanja',
      // UBACI PUTANJU: /public/videos/video2.mp4
      videoUrl: '/videos/video2.mp4',
      thumbnail: '🎥'
    },
    {
      id: 3,
      author: 'Đorđe Marković 127/2023',
      title: 'Primene AI u muzici, govoru i svakodnevnom životu',
      // UBACI PUTANJU: /public/videos/video3.mp4
      videoUrl: '/videos/video3.mp4',
      thumbnail: '🎞️'
    },
    {
      id: 4,
      author: 'Svi Autori - Timski Rad',
      title: 'Zajednički rad na projektu - kompletan pregled',
      // UBACI PUTANJU: /public/videos/video4.mp4
      videoUrl: '/videos/video4.mp4',
      thumbnail: '🎭'
    }
  ]

  const handleDownload = (url, title) => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = title
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openVideoModal = (video) => {
    setSelectedVideo(video)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="materials-page">
      {/* Hero Section */}
      <section className="materials-hero">
        <div className="container">
          <h1 className="page-title">
            <span className="icon">📚</span>
            <span className="gradient-text">Materijali</span>
          </h1>
          <p className="page-subtitle">
            Preuzmite dokumentaciju, prezentacije i pogledajte video materijale o projektu
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="documents-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">📂</span>
            Dokumenti za Preuzimanje
          </h2>
          
          <div className="documents-grid">
            {documents.map((doc) => (
              <div key={doc.id} className="document-card">
                <div className="doc-icon">{doc.icon}</div>
                <div className="doc-content">
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="doc-meta">
                    <span className="doc-type">{doc.type.toUpperCase()}</span>
                    <span className="doc-size">{doc.size}</span>
                  </div>
                </div>
                <button 
                  className="download-btn"
                  onClick={() => handleDownload(doc.downloadUrl, doc.title)}
                >
                  <span className="download-icon">⬇</span>
                  Preuzmi
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section">
        <div className="container">
          <h2 className="section-title">
            <span className="icon">🎬</span>
            Video Materijali
          </h2>
          
          <div className="videos-grid">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="video-card"
                onClick={() => openVideoModal(video)}
              >
                <div className="video-author">
                  <span className="author-icon">👨‍🎓</span>
                  {video.author}
                </div>
                
                <div className="video-thumbnail">
                  <div className="play-button">
                    <div className="play-icon">▶</div>
                  </div>
                  
                  {/* Animated sound wave overlay */}
                  <div className="video-overlay">
                    <div className="video-wave">
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                    </div>
                  </div>
                </div>
                
                <div className="video-info">
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="instructions-section">
        <div className="container">
          <div className="instructions-box">
            <h3>📌 Napomena</h3>
            <ul>
              <li>Svi dokumenti su dostupni za besplatno preuzimanje</li>
              <li>Video materijali mogu se gledati direktno na stranici</li>
              <li>Za najbolje iskustvo, koristite moderne web browsere</li>
              <li>Materijali su kreirani u edukativne svrhe</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-overlay"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeVideoModal}>
              <span>✕</span>
            </button>
            
            <div className="modal-header">
              <div className="modal-author">
                <span className="author-icon">👨‍🎓</span>
                {selectedVideo.author}
              </div>
              <h2>{selectedVideo.title}</h2>
            </div>
            
            <div className="modal-video-container">
              <video 
                controls 
                autoPlay
                className="modal-video-player"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Vaš browser ne podržava video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Materials
