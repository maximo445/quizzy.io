export default function Quizz({ dispatch }) {
  const quizz = { id: 7 };
  return (
    <div className="Quizz">
      <div>
        <h3>React Knowledge</h3>
        <p>Ready to test your knowledge on React JS, then, go heads on!</p>
        <button
          onClick={() =>
            dispatch({
              type: "goToQuiz",
              payload: { mode: 2, quizz: quizz?.id },
            })
          }
        >
          Go
        </button>
      </div>
    </div>
  );
}
