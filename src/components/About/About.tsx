// src/components/About/About.tsx
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Sudoku Game</h2>
      <p>This is a simple Sudoku game built with React and TypeScript.</p>
      <p>
        Go back to <Link to="/">Game</Link>
      </p>
    </div>
  );
}

export default About;
