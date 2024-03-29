import { useState } from "react";

export default function QuizzTaker({ dispatch, quizz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const quizzLength = quizz.questions.length;

  if (quizzLength <= currentQuestion) {
    dispatch({
      type: "showResults",
      payload: { answers, quizz: quizz.questions },
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
      <h3>{question?.question}</h3>
      <div className="options">{options}</div>
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
