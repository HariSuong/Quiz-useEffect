import React from "react";
import QuizTimer from "./QuizTimer.jsx";
import Answers from "./Answers.jsx";

const Question = ({
  onSkipAnswer,
  questionText,
  onSelectedAnswer,
  answers,
  selectedAnswer,
  answerState,
}) => {
  return (
    <div id="question">
      <QuizTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectedAnswer}
        answerState={answerState}
      />
    </div>
  );
};

export default Question;
