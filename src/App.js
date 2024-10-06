import React, { useState, useEffect } from "react";

import "./App.css";
import questionsBel from "./data/questions-bel.js";
import questionsMat from "./data/questions-mat.js";
import questionsHist from "./data/questions-hist.js";
import questionsLit from "./data/questions-lit.js";
import questionsGeo from "./data/questions-geo.js";
import questionsChp from "./data/questions-chp.js";
import questionsKM from "./data/questions-km.js";
import questionsEN from "./data/questions-en.js";
import QuizSelector from "./components/QuizSelector.js";

import { calculateGrade } from "./utils/calculateGrade.js";
import FinalResults from "./components/FinalResults.js";
import QuestionCard from "./components/QuestionCard.js";
import { handleUserInteractionDa, handleUserInteractionNe, handleUserWin } from "./utils/sounds.js";


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
            case 'en':
                return questionsEN;
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
            handleUserInteractionDa();
        } else {
            handleUserInteractionNe();
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
                    handleUserWin={handleUserWin}
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

            {
                selectedQuiz === 'geo' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/playlist?list=PLe1Bjmp9qmCa_rz_wV99REqVlwj2T3vbW'>Виж видеa по Георграфия тук</a>
                    </div>
                ) : selectedQuiz === 'chp' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/playlist?list=PLCiZTQRHm-4NJBVctr-r_K4X6vd8VMxO-'>Виж видеa по ЧП тук</a>
                    </div>
                ) : selectedQuiz === 'hist' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/watch?v=TtVQGmTdMgg&list=PLCiZTQRHm-4M6n-fhWwhDvV_gnug2ip3u' >Виж видеa по История тук</a>
                    </div>

                ) : selectedQuiz === 'mat' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/playlist?list=PLCiZTQRHm-4MOGKEdE86sJkiFVHv7e4g_' >Виж видеa по Математика тук</a>
                    </div>

                ) : selectedQuiz === 'bel' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/playlist?list=PLCiZTQRHm-4OJCxawb4cZC2VyayM-irHL' >Виж видеa по Български език тук</a>
                    </div>

                ) : selectedQuiz === 'km' ? (
                    <div className="video">
                        <a href='https://www.youtube.com/playlist?list=PLCiZTQRHm-4Ot4TFc_IoLZT_bJzcNzARE' >Виж видеa по КМИТ тук</a>
                    </div>

                )
                    : null
            }
        </div>
    );
}

export default App;
