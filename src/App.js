import React, { useState } from "react";
import "./App.css";
import questionsBel from "./questions-bel.js";
import questionsMat from "./questions-mat.js";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState('bel');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isFlashing, setIsFlashing] = useState(false);

  const questions = selectedQuiz === 'bel' ? questionsBel : questionsMat;

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    handleAnswer(isCorrect);
  };

  /* Resets the game back to default */
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

    // Increment the score if correct
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setIsFlashing(false);
      setIsAnswerCorrect(null); // Reset the flashing state

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000); // Delay before moving to the next question (2 seconds)
  };

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Тестове за входно ниво за 6-ти клас</h1>

      {/* Dropdown to choose between different quizzes */}
      <div className="quiz-selector">
        <label htmlFor="quiz-select">Избери предмет:</label>
        <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
          <option value="bel">Български език</option>
          <option value="mat">Математика</option>
        </select>
      </div>

      {/* 2. Current Score */}
      <h2>Резултат: {score}</h2>

      {/* 3. Show results or show the question game */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Краен резултат</h1>
          <h2>
            {score} от {questions.length} правилни - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Започни отново</button>
        </div>
      ) : (
        /* 5. Question Card */
        <div className={`question-card ${isFlashing ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}`}>
          {/* Current Question */}
          <h2 className="no-question">
            Въпрос: {currentQuestion + 1} от {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
