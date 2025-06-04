// src/components/CustomIcons/types.ts
import { HTMLProps } from "react";

export type IconTypes = "github" | "heart" | "linkedin" | "twitter";

export interface IconProps {
  className?: string;
  color?: string;
}

export interface CustomIconsProps extends HTMLProps<any> {
  id: IconTypes;
  className?: string;
  color?: string;
}

// Добавляем типы для Sudoku
export interface SudokuGrid {
  error: boolean;
  value: number | undefined;
  disabled: boolean;
}

export interface Difficulty {
  min: number;
  max: number;
}
