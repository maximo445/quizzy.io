export default function Quizz({ dispatch, quizz, index }) {
  return (
    <div className="Quizz">
      <div>
        <h3>{quizz.title}</h3>
        <button
          onClick={() =>
            dispatch({
              type: "goToQuiz",
              payload: { mode: 2, quizz: index },
            })
          }
        >
          Go
        </button>
      </div>
    </div>
  );
}
