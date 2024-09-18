import React, { useState, useEffect } from "react";
import "./App.css";
import questionsBel from "./questions-bel.js";
import questionsMat from "./questions-mat.js";
import questionsHist from "./questions-hist.js";
import questionsLit from "./questions-lit.js";
import questionsGeo from "./questions-geo.js";
import questionsChp from "./questions-chp.js";


function App() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedQuiz, setSelectedQuiz] = useState('bel');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [isFlashing, setIsFlashing] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const questionColors = ['#FFBF00', '#FC6600', 'blue', '#FF6600', '#B200ED', 'green', 'red'];
    const [wrongQuestions, setWrongQuestions] = useState([]);

    const questions = (() => {
        switch (selectedQuiz) {
            case 'bel':
                return questionsBel;
            case 'mat':
                return questionsMat;
            case 'hist':
                return questionsHist;
            case 'lit':
                return questionsLit;
            case 'geo':
                return questionsGeo;
            case 'chp':
                return questionsChp;
            default:
                return [];
        }
    })();

    const optionClicked = (isCorrect) => {
        if (!hasAnswered) {  // Only allow selection if question hasn't been answered
            handleAnswer(isCorrect);

        }
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
        setIsFlashing(false);
        setIsAnswerCorrect(null);
        setHasAnswered(false);
        setWrongQuestions([]);
    };

    const handleQuizChange = (event) => {
        setSelectedQuiz(event.target.value);
        restartGame(); // Reset game on quiz change
    };

    const handleAnswer = (isCorrect) => {
        setIsAnswerCorrect(isCorrect);
        setIsFlashing(true);
        setHasAnswered(true);  // Always set this to true after the first answer, even if incorrect

        if (isCorrect) {
            setScore(score + 1);  // Increment score only if the answer is correct
        } else {
            setWrongQuestions([...wrongQuestions, questions[currentQuestion]]);
        }

        setTimeout(() => {
            setIsFlashing(false);
            setIsAnswerCorrect(null);

            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setHasAnswered(false);  // Reset hasAnswered for the next question
            } else {
                setShowResults(true);

            }
        }, 2000);  // Delay before moving to the next question (2 seconds)
    };
    useEffect(() => {
        if (isFlashing && isAnswerCorrect !== null) {
            const timer = setTimeout(() => {
                setIsFlashing(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isFlashing, isAnswerCorrect]);

    const calculateGrade = (percentage) => {
        if (percentage >= 90) {
            return "Отличен(6)";
        } else if (percentage >= 75) {
            return "Много добър(5)";
        } else if (percentage >= 60) {
            return "Добър(4)";
        } else if (percentage >= 45) {
            return "Среден(3)";
        } else {
            return "Слаб(2)";
        }
    };

    return (
        <div className="App">
            <h1>Тестове за входно ниво за 6-ти клас</h1>

            <div className="quiz-selector">
                <label htmlFor="quiz-select">Избери предмет:</label>
                <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                    <option value="bel">Български език</option>
                    <option value="mat">Математика</option>
                    <option value="lit">Литература</option>
                    <option value="hist">История</option>
                    <option value="chp">Човек и природа</option>
                    <option value="geo">География</option>
                </select>
            </div>

            <h2>Резултат: {score}</h2>

            {showResults ? (
                <div className="final-results">
                    <h1>Краен резултат</h1>
                    <h2>
                        {score} правилни от {questions.length}  - (
                        {((score / questions.length) * 100).toFixed(2)}%)
                    </h2>
                    <h2>
                        Оценка: {calculateGrade((score / questions.length) * 100)}
                    </h2>
                    {/* Display wrong answers */}
                    {wrongQuestions.length > 0 && (
                        <div>
                            <h3>Грешни въпроси:</h3>
                            <ul>
                                {wrongQuestions.map((question, index) => (
                                    <li key={index}>
                                        <strong>{question.text}</strong>

                                        {question.options.map((option, index) => (
                                            <div key={option.id} style={{ color: option.isCorrect ? 'green' : 'red' }}>
                                                {index + 1}/{option.text}
                                            </div>
                                        ))}

                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
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

                    <h2 className="no-question" >
                        Въпрос: {currentQuestion + 1} от {questions.length} въпроса
                    </h2>
                    <h3 className="question-text" style={{ color: questionColors[currentQuestion % questionColors.length] }}>{questions[currentQuestion].text}</h3>

                    <ul>
                        {questions[currentQuestion].options.map((option) => (
                            <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                                style={{ color: questionColors[currentQuestion % questionColors.length] }}
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
