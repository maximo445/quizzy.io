export default function Quizz({ dispatch, quizz, index }) {
  return (
    <div className="Quizz">
      <div className="container">
        <h3 className="texty">{quizz.title}</h3>
        <button
          className="btn"
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
