import React, { useEffect } from 'react'
import { handleUserWin } from '../utils/sounds';

export default function FinalResults({ score, questions, wrongQuestions, restartGame, calculateGrade }) {

    useEffect(() => {
        handleUserWin();
    }, []);
    return (
        <div className="final-results">
            <h1>Краен резултат</h1>
            <h2>
                {score} правилни от {questions.length} - (
                {((score / questions.length) * 100).toFixed(2)}%)
            </h2>
            <h2>
                Оценка: {calculateGrade((score / questions.length) * 100)}
            </h2>
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
    )
}
