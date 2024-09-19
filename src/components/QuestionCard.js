import React from 'react'

export default function QuestionCard({ wrongQuestions, restartGame }) {

    return (
        <div className="final-results">
            <h1>Краен резултат</h1>


            {wrongQuestions?.length > 0 && (
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
    );
}
