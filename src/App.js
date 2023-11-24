import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Test from "./components/Test";

function App() {
  return (
    <div className="game">
      <Test aprops="A" />
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">game-info</div>
    </div>
  );
}

export default App;
