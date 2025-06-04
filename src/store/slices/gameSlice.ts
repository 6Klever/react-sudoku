import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SudokuGrid, Difficulty } from "../../components/CustomIcons/types";

interface GameState {
  sudokuGrid: SudokuGrid[][];
  difficulty: Difficulty;
  showModalWinner: boolean;
}

const initialState: GameState = {
  sudokuGrid: Array.from({ length: 9 }, () =>
    Array(9).fill({
      error: false,
      value: undefined,
      disabled: false,
    })
  ),
  difficulty: { min: 10, max: 20 },
  showModalWinner: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSudokuGrid: (state, action: PayloadAction<SudokuGrid[][]>) => {
      state.sudokuGrid = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.difficulty = action.payload;
    },
    setShowModalWinner: (state, action: PayloadAction<boolean>) => {
      state.showModalWinner = action.payload;
    },
  },
});

export const { setSudokuGrid, setDifficulty, setShowModalWinner } = gameSlice.actions;
export default gameSlice.reducer;
