import { useState } from "react";
import CountDown from "./CountDown";
import ProgressBar from "./ProgressBar";

export default function QuizzTaker({ dispatch, quizz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const quizzLength = quizz.questions.length;

  const progress = Math.round((currentQuestion / quizzLength) * 100);

  const payload = { answers, quizz: quizz.questions };

  if (quizzLength <= currentQuestion) {
    dispatch({
      type: "showResults",
      payload,
    });
    return;
  }

  const question = quizz?.questions.at(currentQuestion);

  if (question) {
  }
  const options = question.options.map((option, index) => (
    <button
      className={
        questionAnswered
          ? index === question.correctOption
            ? "correctOption"
            : ""
          : ""
      }
      disabled={questionAnswered}
      onClick={() => {
        setAnswers((answers) => [...answers, question.correctOption === index]);
        setQuestionAnswered(true);
      }}
    >
      {option}
    </button>
  ));

  function showStats() {}

  return (
    <div className="QuizzTaker">
      <ProgressBar width={progress} />
      <h3>{question?.question}</h3>
      <div className="options">{options}</div>
      <CountDown dispatch={dispatch} payload={payload} />
      {questionAnswered && (
        <button
          onClick={() => {
            setCurrentQuestion((q) => q + 1);
            setQuestionAnswered(false);
          }}
        >
          next
        </button>
      )}
    </div>
  );
}
