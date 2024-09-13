import React, { useState, useEffect } from "react";
import "./App.css";
import questionsBel from "./questions-bel.js";
import questionsMat from "./questions-mat.js";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState('bel');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isFlashing, setIsFlashing] = useState(false);

  const questions = selectedQuiz === 'bel' ? questionsBel : questionsMat;

  const optionClicked = (isCorrect) => {
    handleAnswer(isCorrect);
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setIsFlashing(false);
    setIsAnswerCorrect(null);
  };

  const handleQuizChange = (event) => {
    setSelectedQuiz(event.target.value);
    restartGame(); // Reset game on quiz change
  };

  const handleAnswer = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
    setIsFlashing(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setIsFlashing(false);
      setIsAnswerCorrect(null);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000); // Delay before moving to the next question (2 seconds)
  };

  useEffect(() => {
    if (isFlashing && isAnswerCorrect !== null) {
      const timer = setTimeout(() => {
        setIsFlashing(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isFlashing, isAnswerCorrect]);

  return (
    <div className="App">
      <h1>Тестове за входно ниво за 6-ти клас</h1>

      <div className="quiz-selector">
        <label htmlFor="quiz-select">Избери предмет:</label>
        <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
          <option value="bel">Български език</option>
          <option value="mat">Математика</option>
        </select>
      </div>

      <h2>Резултат: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Краен резултат</h1>
          <h2>
            {score} правилни от {questions.length}  - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={restartGame}>Започни отново</button>
        </div>
      ) : (
        <div className={`question-card ${isFlashing ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}`}>
          <div className="result">
            {isFlashing && (
              isAnswerCorrect ? (
                <span className="grin-icon">😊</span>
              ) : (
                <span className="red-icon">❌</span>
              )
            )}
          </div>

          <h2 className="no-question">
            Въпрос: {currentQuestion + 1} от {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
