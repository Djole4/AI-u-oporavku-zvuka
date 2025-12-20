import { useState, useEffect } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Učitaj pitanja iz API-ja
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:8888/AI-u-oporavku-zvuka/ai-u-oporavku-zvuka/backend/api/quiz.php');
      
      if (!response.ok) {
        throw new Error(`HTTP greška! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.questions) {
        setAllQuestions(data.questions);
      } else {
        throw new Error('Neuspešno učitavanje pitanja');
      }
    } catch (err) {
      console.error('Greška pri učitavanju pitanja:', err);
      setError('Greška pri učitavanju pitanja. Molimo pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = () => {
    if (allQuestions.length === 0) {
      setError('Nema dostupnih pitanja');
      return;
    }
    
    // Backend već vraća 10 nasumičnih pitanja, samo ih koristi
    setSelectedQuestions(allQuestions);
    setQuizStarted(true);
  };

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer !== null || isAnimating) return;

    setSelectedAnswer(answerIndex);
    setIsAnimating(true);

    const isCorrect = selectedQuestions[currentQuestion].answers[answerIndex].correct;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, {
      question: selectedQuestions[currentQuestion].question,
      userAnswer: answerIndex,
      correct: isCorrect
    }]);

    setTimeout(() => {
      if (currentQuestion < selectedQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnimating(false);
      } else {
        setShowResult(true);
        setIsAnimating(false);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    // Reload nove nasumične pitanje iz baze
    fetchQuestions();
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions([]);
    setQuizStarted(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="quiz-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Učitavanje pitanja iz baze...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="quiz-container">
        <div className="start-screen">
          <div className="start-icon">⚠️</div>
          <h1 className="start-title">Greška</h1>
          <p style={{ color: '#ef4444', fontSize: '1.2rem', marginBottom: '2rem' }}>{error}</p>
          <button className="start-quiz-btn" onClick={fetchQuestions}>
            <span className="btn-text">Pokušaj Ponovo</span>
            <span className="btn-icon">🔄</span>
          </button>
        </div>
      </div>
    );
  }

  // Start screen
  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="start-screen">
          <div className="start-icon">🎵</div>
          <h1 className="start-title">Veštačka Inteligencija<br />u Oporavku Zvuka</h1>
          <div className="start-subtitle">
            <p>Testiraj svoje znanje!</p>
            <div className="quiz-info">
              <div className="info-item">
                <span className="info-icon">📝</span>
                <span>10 nasumičnih pitanja</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⏱️</span>
                <span>Bez vremenskog ograničenja</span>
              </div>
              <div className="info-item">
                <span className="info-icon">🎯</span>
                <span>3 odgovora po pitanju</span>
              </div>
            </div>
          </div>
          <button 
            className="start-quiz-btn" 
            onClick={startQuiz}
            disabled={allQuestions.length === 0}
          >
            <span className="btn-text">Započni Kviz</span>
            <span className="btn-icon">🚀</span>
          </button>
          <p className="start-note">Pitanja se biraju iz baze od {allQuestions.length} pitanja</p>
        </div>
      </div>
    );
  }

  if (selectedQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Učitavanje kviza...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = (score / selectedQuestions.length) * 100;
    let message = '';
    let emoji = '';

    if (percentage >= 90) {
      message = 'Odlično! Majstor AI oporavka zvuka! 🎉';
      emoji = '🏆';
    } else if (percentage >= 70) {
      message = 'Vrlo dobro! Solidno poznavanje materije! 👏';
      emoji = '⭐';
    } else if (percentage >= 50) {
      message = 'Dobro! Ima prostora za napredak. 📚';
      emoji = '👍';
    } else {
      message = 'Potrebno je još učenja. Probaj ponovo! 💪';
      emoji = '📖';
    }

    return (
      <div className="quiz-container">
        <div className="result-card">
          <div className="result-emoji">{emoji}</div>
          <h2>Kviz Završen!</h2>
          <div className="score-display">
            <div className="score-circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="circle-bg" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  className="circle-progress"
                  style={{
                    strokeDasharray: `${percentage * 2.827}, 282.7`
                  }}
                />
              </svg>
              <div className="score-text">
                <span className="score-number">{score}</span>
                <span className="score-total">/ {selectedQuestions.length}</span>
              </div>
            </div>
          </div>
          <p className="result-message">{message}</p>
          <p className="percentage">{percentage.toFixed(0)}% tačnih odgovora</p>
          <button className="restart-btn" onClick={restartQuiz}>
            🔄 Ponovi Kviz
          </button>
        </div>
      </div>
    );
  }

  const question = selectedQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>🎵 AI Oporavak Zvuka - Kviz</h1>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <span className="progress-text">
            Pitanje {currentQuestion + 1} od {selectedQuestions.length}
          </span>
        </div>
      </div>

      <div className="question-card">
        <div className="question-number">Pitanje {currentQuestion + 1}</div>
        <h2 className="question-text">{question.question}</h2>
        
        <div className="answers-grid">
          {question.answers.map((answer, index) => {
            let className = 'answer-btn';
            
            if (selectedAnswer !== null) {
              if (answer.correct) {
                className += ' correct';
              } else if (selectedAnswer === index) {
                className += ' incorrect';
              } else {
                className += ' disabled';
              }
            }

            const letters = ['A', 'B', 'C'];
            
            return (
              <button
                key={index}
                className={className}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="answer-letter">{letters[index]}</span>
                <span className="answer-text">{answer.text}</span>
                {selectedAnswer !== null && answer.correct && (
                  <span className="answer-icon">✓</span>
                )}
                {selectedAnswer === index && !answer.correct && (
                  <span className="answer-icon">✗</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="quiz-footer">
        <div className="score-tracker">
          <span className="trophy-icon">🏆</span>
          <span>Tačni odgovori: {score}</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
