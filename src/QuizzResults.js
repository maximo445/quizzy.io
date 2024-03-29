export default function QuizzPreview({ dispatch, userResults }) {
  const results = userResults.quizz.map((question, index) => {
    return (
      <h3>
        {question.question}{" "}
        {userResults.answers.at(index) ? "Correct" : "Wrong"}
      </h3>
    );
  });
  return <div className="QuizzResults">{results}</div>;
}
