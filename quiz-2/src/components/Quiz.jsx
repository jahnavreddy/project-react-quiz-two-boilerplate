import React, { useState } from 'react';
import quizQuestions from "../../../resources/quizQuestion.json"
import "../App.css"

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const question = quizQuestions[currentQuestion];

    const prevQuestion = () => {
        setCurrentQuestion(prev => Math.max(prev - 1, 0));
    };

    const nextQuestion = () => {
        setCurrentQuestion(prev => Math.min(prev + 1, quizQuestions.length - 1));
    };

    const reset = () => {
        let resp = window.confirm("Are you sure you want to quit?");
        if (resp) {
            setCurrentQuestion(0);
        }
    };

    return (
        <div className='main'>
            <h2 className='title'>Question</h2>
            <h5>{currentQuestion + 1} of {quizQuestions.length}</h5>
            <p className='question'>{question.question}</p>
            <div className='container'>
                <div className='group'>
                    <button className='option'>{question.optionA}</button>
                    <button className='option'>{question.optionB}</button>
                </div>
                <div className='group'>
                    <button className='option'>{question.optionC}</button>
                    <button className='option'>{question.optionD}</button>
                </div>
            </div>
            <div className="buttons">
                <button id='previous' onClick={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
                <button id='next' onClick={nextQuestion} disabled={currentQuestion === quizQuestions.length - 1}>Next</button>
                <button id='quit' onClick={reset}>Quit</button>
            </div>
        </div>
    );
}
