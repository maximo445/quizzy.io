import { useEffect, useReducer } from "react";
import "./App.css";
import "./Header.js";
import Quizzes from "./Quizzes.js";
import QuizzTaker from "./QuizzTaker.js";
import QuizzCreator from "./QuizzCreator.js";
import Header from "./Header.js";
import Container from "./Container.js";
import quizOne from "./questions.json";

const initialState = { mode: 0, currentQuizz: null, quizzes: [quizOne] };

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "setMode":
      return { ...state, mode: action.payload };
    case "goToQuiz":
      return {
        ...state,
        mode: action.payload.mode,
        currentQuizz: action.payload.quiz,
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
        {state.mode === 0 && <Quizzes dispatch={dispatch} />}
        {state.mode === 1 && <QuizzCreator dispatch={dispatch} />}
        {state.mode === 2 && <QuizzTaker quiz={state.currentQuizz} />}
      </Container>
    </div>
  );
}

export default App;
