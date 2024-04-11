import { useEffect, useReducer } from "react";
import "./App.css";
import "./Header.js";
import Quizzes from "./Quizzes.js";
import QuizzPreview from "./QuizzPreview.js";
import QuizzCreator from "./QuizzCreator.js";
import Header from "./Header.js";
import Container from "./Container.js";
import QuizzTaker from "./QuizzTaker.js";
import quizOne from "./questions.json";
import QuizzResults from "./QuizzResults.js";

const initialState = {
  mode: 0,
  currentQuizz: null,
  quizzes: [quizOne],
  userResults: null,
};

// "title": "React Knowledge",
// "description": "Test your Knowledge on the latest react concepts!",
// "questions": [
//   {
//     "question": "Which is the most popular JavaScript framework?",
//     "options": ["Angular", "React", "Svelte", "Vue"],
//     "correctOption": 1,
//     "points": 10
//   }

function reducer(state, action) {
  switch (action.type) {
    case "setMode":
      return { ...state, mode: action.payload, currentQuizz: null };
    case "goToQuiz":
      return {
        ...state,
        mode: action.payload.mode,
        currentQuizz: action.payload.quizz,
      };
    case "takeQuizz":
      return { ...state, mode: action.payload };
    case "showResults":
      return {
        ...state,
        mode: 4,
        userResults: {
          answers: action.payload.answers,
          quizz: action.payload.quizz,
        },
      };
    case "addQuizz":
      return {
        ...state,
        mode: 0,
        currentQuizz: null,
        quizzes: [
          ...state.quizzes,
          {
            title: action.payload.quizz.title,
            description: action.payload.quizz.description,
            questions: action.payload.questions,
          },
        ],
      };
    default:
      throw new Error("unrecognized action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      localStorage.setItem("quizzes", state.quizzes);
    },
    [state.quizzes]
  );

  return (
    <div className="App">
      <Header dispatch={dispatch} />
      <Container>
        {state.mode === 0 && (
          <Quizzes dispatch={dispatch} quizzes={state.quizzes} />
        )}
        {state.mode === 1 && <QuizzCreator outerDispatch={dispatch} />}
        {state.mode === 2 && (
          <QuizzPreview
            dispatch={dispatch}
            quizz={state.quizzes.at(state.currentQuizz)}
          />
        )}
        {state.mode === 3 && (
          <QuizzTaker
            dispatch={dispatch}
            quizz={state.quizzes.at(state.currentQuizz)}
          />
        )}
        {state.mode === 4 && (
          <QuizzResults dispatch={dispatch} userResults={state.userResults} />
        )}
      </Container>
    </div>
  );
}

export default App;
