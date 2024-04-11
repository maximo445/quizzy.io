import logo from "./detective-logo.png";

export default function Header({ dispatch }) {
  return (
    <header className="Header">
      <span className="logo">
        <img className="image" src={logo} alt="app-logo"></img>
        <h2 className="text">Quizzy</h2>
      </span>
      <span className="navigation">
        <button
          className="btn"
          onClick={() => dispatch({ type: "setMode", payload: 0 })}
        >
          Home
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "setMode", payload: 1 })}
        >
          Create Quizz
        </button>
      </span>
    </header>
  );
}
