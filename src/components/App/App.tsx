import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer";
import { Grid } from "../Grid";
import { SudokuProvider } from "../../context/SudokuContext";
import { About } from "../About";

import "./styles.scss";

function App() {
  return (
    <SudokuProvider>
      <Router>
        <div className="App">
          <h1>SU DO KU</h1>
          <Routes>
            <Route path="/sudoku" element={<Grid />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SudokuProvider>
  );
}

export default App;
