import React from 'react'

export default function QuestionCard({ currentQuestion, questions, questionColors, optionClicked, isFlashing, isAnswerCorrect, hasAnswered }) {
    return (
        <div className={`question-card ${isFlashing ? (isAnswerCorrect ? 'correct' : 'incorrect') : ''}`}>
            <div className="result">
                {isFlashing && (
                    isAnswerCorrect ? (
                        <span className="grin-icon">😀</span>
                    ) : (
                        <span className="red-icon">❌</span>
                    )
                )}
            </div>

            <h2 className="no-question">
                Въпрос: {currentQuestion + 1} от {questions.length} въпроса
            </h2>
            <h3 className="question-text" style={{ color: questionColors[currentQuestion % questionColors.length] }}>
                {questions[currentQuestion].text}
            </h3>

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
    )
}
