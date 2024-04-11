// "title": "React Knowledge",
// "description": "Test your Knowledge on the latest react concepts!",
// "questions": [
//   {
//     "question": "Which is the most popular JavaScript framework?",
//     "options": ["Angular", "React", "Svelte", "Vue"],
//     "correctOption": 1,
//     "points": 10
//   }

import { useReducer, useState } from "react";

const initialState = {
  stage: 0,
  quizz: { title: "", description: "" },
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addQuestion":
      console.log("adding question");
      return {
        ...state,
        stage: 2,
        questions: [...state.questions, action.payload],
      };
    case "addHeader":
      return {
        ...state,
        stage: 1,
        quizz: {
          title: action.payload.title,
          description: action.payload.description,
        },
      };
    case "addExtraQuestion":
      return { ...state, stage: 1 };
    default:
      break;
  }
}

export default function QuizzCreator({ outerDispatch }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questionTitle, setQuestionTitle] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const createdQuestions = state.questions.length;

  function handleSumit(e) {
    e.preventDefault();
    dispatch({ type: "addHeader", payload: { title, description } });
  }
  function handleAddQuestion(e) {
    e.preventDefault();
    if (questionTitle && option1 && option2 && option3 && option4) {
      dispatch({
        type: "addQuestion",
        payload: {
          question: questionTitle,
          options: [option1, option2, option3, option4],
          correctOption: correctAnswer,
        },
      });
      setQuestionTitle("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
    } else {
      alert("fill all inputs");
    }
  }
  return (
    <>
      {state.stage === 0 && (
        <form className="CreatorDescription" onSubmit={handleSumit}>
          <input
            className="quizz-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter title..."
          ></input>
          <textarea
            className="quizz-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter description..."
          ></textarea>
          <input className="btn" type="submit" value="Next"></input>
        </form>
      )}
      {state.stage === 1 && (
        <div className="QuestionCreator">
          <h3>Question {createdQuestions + 1}</h3>
          <form className="options" onSubmit={handleAddQuestion}>
            <input
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              type="text"
              id="lname"
              name="lname"
              placeholder="Add title"
            ></input>
            <input
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              placeholder="option 1..."
            ></input>
            <input
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              type="text"
              id="lname"
              name="lname"
              placeholder="option 2..."
            ></input>

            <input
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              placeholder="option 3..."
            ></input>
            <input
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              type="text"
              id="lname"
              name="lname"
              placeholder="option 4..."
            ></input>

            <select onChange={(e) => setCorrectAnswer(Number(e.target.value))}>
              <option value="0">Option 1</option>
              <option value="1">Option 2</option>
              <option value="2">Option 3</option>
              <option value="3">Option 4</option>
            </select>
            <input
              className="btn-black"
              onClick={handleAddQuestion}
              type="submit"
              value="Next"
            ></input>
          </form>
        </div>
      )}
      {state.stage === 2 && (
        <div>
          <button
            onClick={() => outerDispatch({ type: "addQuizz", payload: state })}
          >
            submit quizz
          </button>
          <button onClick={() => dispatch({ type: "addExtraQuestion" })}>
            add another question
          </button>
        </div>
      )}
    </>
  );
}
