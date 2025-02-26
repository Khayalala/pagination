import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, About, MovieList } from "./Components/Pages";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movies" element={<MovieList/>}/>
      </Routes>
  );
}

export default App;
