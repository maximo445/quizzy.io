export default function QuizzPreview({ dispatch, quizz }) {
  return (
    <div className="QuizzTaker">
      <h3>{quizz.title}</h3>
      <p>{quizz.description}</p>
      <span>
        <p>This quizz is about {quizz.questions.length} questions long</p>
        <button onClick={() => dispatch({ type: "takeQuizz", payload: 3 })}>
          Take Quiz
        </button>
      </span>
    </div>
  );
}
