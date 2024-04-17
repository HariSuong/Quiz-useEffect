import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";

const Sumary = ({ userAnswer }) => {
  const skippedAnswer = userAnswer.filter((answer) => answer === null);
  const correctAnswer = userAnswer.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswer.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswer.length / userAnswer.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].answers[0]}</p>
              <p className={cssClass}>{answer || "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Sumary;
