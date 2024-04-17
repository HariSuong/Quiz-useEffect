import React, { useCallback, useRef, useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
import Sumary from "./Sumary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <Sumary userAnswer={userAnswers} />;
  }

  console.log(userAnswers);

  return (
    <div id="quiz">
      <Question
        onSkipAnswer={handleSkipAnswer}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        key={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
