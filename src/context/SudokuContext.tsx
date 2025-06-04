// src/context/SudokuContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { SudokuGrid, Difficulty } from "../components/CustomIcons/types"; // Убедись, что типы определены в types.ts

interface SudokuContextType {
  sudokuGrid: SudokuGrid[][];
  setSudokuGrid: React.Dispatch<React.SetStateAction<SudokuGrid[][]>>;
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  showModalWinner: boolean;
  setShowModalWinner: React.Dispatch<React.SetStateAction<boolean>>;
}

const SudokuContext = createContext<SudokuContextType | undefined>(undefined);

export function SudokuProvider({ children }: { children: ReactNode }) {
  const [sudokuGrid, setSudokuGrid] = useState<SudokuGrid[][]>(() =>
    Array.from({ length: 9 }, () =>
      Array(9).fill({
        error: false,
        value: undefined,
        disabled: false,
      })
    )
  );
  const [difficulty, setDifficulty] = useState<Difficulty>({ min: 10, max: 20 });
  const [showModalWinner, setShowModalWinner] = useState<boolean>(false);

  return (
    <SudokuContext.Provider
      value={{
        sudokuGrid,
        setSudokuGrid,
        difficulty,
        setDifficulty,
        showModalWinner,
        setShowModalWinner,
      }}
    >
      {children}
    </SudokuContext.Provider>
  );
}

export function useSudoku() {
  const context = useContext(SudokuContext);
  if (!context) {
    throw new Error("useSudoku must be used within a SudokuProvider");
  }
  return context;
}
