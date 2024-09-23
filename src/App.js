import React, { useState, useEffect } from "react";

import "./App.css";
import questionsBel from "./questions-bel.js";
import questionsMat from "./questions-mat.js";
import questionsHist from "./questions-hist.js";
import questionsLit from "./questions-lit.js";
import questionsGeo from "./questions-geo.js";
import questionsChp from "./questions-chp.js";
import questionsKM from "./questions-km.js";
import QuizSelector from "./components/QuizSelector.js";

import { calculateGrade } from "./utils/calculateGrade.js";
import FinalResults from "./components/FinalResults.js";
import QuestionCard from "./components/QuestionCard.js";


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
            case 'km':
                return questionsKM;
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
        }, 1400);  // Delay before moving to the next question (2 seconds)
    };
    useEffect(() => {
        if (isFlashing && isAnswerCorrect !== null) {
            const timer = setTimeout(() => {
                setIsFlashing(false);
            }, 1400);

            return () => clearTimeout(timer);
        }
    }, [isFlashing, isAnswerCorrect]);



    return (
        <div className="App">
            <h1>Тестове за входно ниво за 6-ти клас</h1>

            <QuizSelector selectedQuiz={selectedQuiz} handleQuizChange={handleQuizChange} />

            <h2>Резултат: {score}</h2>

            {showResults ? (
                <FinalResults
                    score={score}
                    questions={questions}
                    wrongQuestions={wrongQuestions}
                    restartGame={restartGame}
                    calculateGrade={calculateGrade}
                />
            ) : (
                <QuestionCard
                    currentQuestion={currentQuestion}
                    questions={questions}
                    questionColors={questionColors}
                    optionClicked={optionClicked}
                    isFlashing={isFlashing}
                    isAnswerCorrect={isAnswerCorrect}
                    hasAnswered={hasAnswered}
                />
            )}
            {selectedQuiz === 'geo' ? (
                <div>
                    <a href='https://www.youtube.com/playlist?list=PLe1Bjmp9qmCa_rz_wV99REqVlwj2T3vbW'>Виж видеото тук</a>
                </div>
            ) : null}
        </div>
    );
}

export default App;
