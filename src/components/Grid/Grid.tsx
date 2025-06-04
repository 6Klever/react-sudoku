// src/components/Grid/Grid.tsx
import { clsx } from "clsx";
import { useEffect } from "react";
import { ModalWinner } from "../ModalWinner";
import { generateSudokuGrid, isSudokuSolved, validateSudoku } from "../../utils/validateSudoku";
import { useSudoku } from "../../context/SudokuContext";

import "./styles.scss";

function Grid() {
  const {
    sudokuGrid,
    setSudokuGrid,
    difficulty,
    setDifficulty,
    showModalWinner,
    setShowModalWinner,
  } = useSudoku();

  useEffect(() => {
    const newSudoku = generateSudokuGrid(sudokuGrid, difficulty);
    setSudokuGrid(newSudoku);
  }, [difficulty]);

  useEffect(() => {
    if (isSudokuSolved(sudokuGrid)) {
      setShowModalWinner(true);
    }
  }, [sudokuGrid]);

  return (
    <>
      <div className="container">
        <div className="difficulty">
          <h2>Select a Difficulty</h2>
          <div className="buttons">
            <button onClick={() => setDifficulty({ min: 20, max: 30 })}>Easy</button>
            <button onClick={() => setDifficulty({ min: 30, max: 40 })}>Medium</button>
            <button onClick={() => setDifficulty({ min: 40, max: 50 })}>Hard</button>
            <button onClick={() => setDifficulty({ min: 50, max: 60 })}>Extreme</button>
          </div>
        </div>

        <hr className="separator" />

        <div className="grid">
          {sudokuGrid.map((grid, i) => (
            <div key={`row-${i.toString()}`} className="row">
              {grid?.map((cell, j) => {
                const inputStyles = clsx("cell", {
                  error: cell?.error,
                });

                return (
                  <input
                    key={`cell-${i.toString()}-${j.toString()}`}
                    className={inputStyles}
                    disabled={cell?.disabled}
                    maxLength={1}
                    readOnly={cell?.disabled}
                    type="text"
                    value={cell?.value || ""}
                    onChange={({ target }) => {
                      const newSudoku = validateSudoku({
                        sudoku: sudokuGrid,
                        positionX: j,
                        positionY: i,
                        value: target?.value ? parseInt(target?.value) : undefined,
                      });
                      setSudokuGrid(newSudoku);
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <ModalWinner openWinnerModal={showModalWinner} onClose={() => setShowModalWinner(false)} />
    </>
  );
}

export default Grid;
