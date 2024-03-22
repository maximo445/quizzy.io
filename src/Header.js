export default function Header({ dispatch }) {
  return (
    <header className="Header">
      <span className="logo">
        <h1>Quizzy</h1>
      </span>
      <span className="navigation">
        <button onClick={() => dispatch({ type: "setMode", payload: 0 })}>
          Home
        </button>
        <button onClick={() => dispatch({ type: "setMode", payload: 1 })}>
          Create Quizz
        </button>
      </span>
    </header>
  );
}
