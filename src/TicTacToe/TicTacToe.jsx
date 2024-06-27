import React from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const TicTacToe = () => {
  return (
    <div className="container">
      <div className="title">
        Tic Tac Toe Game in <span>React</span>
        <div className="board">
          <div className="row-1">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row-2">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
          <div className="row-3">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
      </div>
      <button className="btn">Reset</button>
    </div>
  );
};

export default TicTacToe;
