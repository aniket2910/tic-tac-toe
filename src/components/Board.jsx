import React, { useEffect, useState } from "react";
import styles from "./Board.module.css";
import Square from "./Square";

const initialState = ["", "", "", "", "", "", "", "", ""];

const Board = () => {
  const [gameState, setGameState] = useState(initialState);
  const [cuurentPlayer, setCuurentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [steps, setSteps] = useState(0);

  const checkWinner = (gameState) => {
    let winnerCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerCondition.forEach((condition) => {
      let [a, b, c] = condition;
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setWinner(gameState[a]);
      }
    });
  };

  useEffect(() => {
    checkWinner(gameState);
  }, [gameState]);

  const clickHanldler = (index) => {
    if (gameState[index] === "") {
      gameState[index] = cuurentPlayer === "X" ? "X" : "O";
      setCuurentPlayer(cuurentPlayer === "X" ? "O" : "X");
      setGameState([...gameState]);
      setSteps(steps + 1);
    }
  };

  const restartGame = () => {
    setGameState([...initialState]);
    setCuurentPlayer("X");
    setWinner(null);
    setSteps(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_box}>
        <div className={styles.left_box}>
          <div className={styles.heading}>
            <h1>Tic Tac Toe Game</h1>
          </div>
          <div className={styles.btn}>
            <button onClick={restartGame}>Restart Game</button>
          </div>
        </div>
        <div className={styles.right_box}>
          {!winner && steps < 9 && (
            <div className={styles.wrapper}>
              <div className={styles.board}>
                <Square
                  clickHanldler={clickHanldler}
                  state={gameState[0]}
                  index={0}
                  class_name={"b-right-bottom"}
                />
                <Square
                  state={gameState[1]}
                  clickHanldler={clickHanldler}
                  index={1}
                  class_name={"b-right-bottom"}
                />
                <Square
                  state={gameState[2]}
                  clickHanldler={clickHanldler}
                  index={2}
                  class_name={"b-bottom"}
                />
                <Square
                  state={gameState[3]}
                  clickHanldler={clickHanldler}
                  index={3}
                  class_name={"b-right-bottom"}
                />
                <Square
                  state={gameState[4]}
                  clickHanldler={clickHanldler}
                  index={4}
                  class_name={"b-right-bottom"}
                />
                <Square
                  state={gameState[5]}
                  clickHanldler={clickHanldler}
                  index={5}
                  class_name={"b-bottom"}
                />
                <Square
                  state={gameState[6]}
                  clickHanldler={clickHanldler}
                  index={6}
                  class_name={"b-right"}
                />
                <Square
                  state={gameState[7]}
                  clickHanldler={clickHanldler}
                  index={7}
                  class_name={"b-right"}
                />
                <Square
                  state={gameState[8]}
                  clickHanldler={clickHanldler}
                  index={8}
                />
              </div>
            </div>
          )}
          {(winner || steps == 9) && (
            <div className={styles.result}>
              <div className={styles.head}>
                <h2>
                  {!winner && steps == 9 ? "It's Draw" : `${winner} is Winner!`}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
