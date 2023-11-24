import React, { Component } from "react";
import { Square } from "./Square";
import "./Board.css";

export default class Board extends Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    return (
      <div>
        <div className="status">Next Player: X, O</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}
