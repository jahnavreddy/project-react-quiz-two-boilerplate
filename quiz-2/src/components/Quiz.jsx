import React, { useCallback, useState } from 'react';
import questions from './../../../resources/quizQuestion.json';
import Home from './Home';

function Quiz() {
  const [q_no, setQ_no] = useState(0);
  const [isHome, setIsHome] = useState(false);

  const handleQuit = useCallback(() => {
    setIsHome(true);
  }, []);

  const handleNext = useCallback(() => {
    if (q_no < questions.length - 1) {
      setQ_no(q_no + 1);
    }
  }, [q_no]);

  const handlePrevious = useCallback(() => {
    if (q_no > 0) {
      setQ_no(q_no - 1);
    }
  }, [q_no]);

  const currentQuestion = questions[q_no];

  if (isHome) {

    return <Home />;
  }

  return (
    <>
      <h1>Question</h1>
      <h4>
        {q_no + 1} of {questions.length}
      </h4>
      <h2>{currentQuestion.question}</h2>
      <div>
        <div className="buttons-top">
          <button className="button-1">{currentQuestion.optionA}</button>
          <button className="button-2">{currentQuestion.optionB}</button>
        </div>
        <div className="buttons-bottom">
          <button className="button-3">{currentQuestion.optionC}</button>
          <button className="button-4">{currentQuestion.optionD}</button>
        </div>
      </div>

      <div className="options">
        <button className="previous" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
        <button className="quit" onClick={handleQuit}>
          Quit
        </button>
      </div>
    </>
  );
}

export default Quiz;
