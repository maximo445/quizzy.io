import Quizz from "./Quizz";

export default function Quizzes({ dispatch, quizzes }) {
  return (
    <div className="Quizzes">
      {quizzes.map((quizz, index) => (
        <>
          {console.log(index)}
          <Quizz dispatch={dispatch} quizz={quizz} index={index} />
        </>
      ))}
    </div>
  );
}
