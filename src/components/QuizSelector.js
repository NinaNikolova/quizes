import React from 'react'

export default function QuizSelector({ selectedQuiz, handleQuizChange }) {
    return (
        <div className="quiz-selector">
            <label htmlFor="quiz-select">Избери предмет:</label>
            <select id="quiz-select" value={selectedQuiz} onChange={handleQuizChange}>
                <option value="bel">Български език</option>
                <option value="mat">Математика</option>
                <option value="lit">Литература</option>
                <option value="hist">История</option>
                <option value="chp">Човек и природа</option>
                <option value="geo">География</option>
                <option value="km">КМИТ</option>
                <option value="en">Английски език</option>
                <option value="en2">Англ.език /Правилни и непр.глаголи/</option>
            </select>
        </div>
    )
}
