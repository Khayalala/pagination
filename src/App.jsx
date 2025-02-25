import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import { useSearchParams } from "react-router-dom";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const moviesPerPage = 4;
  const indexOfLastMovie = currentPage * moviesPerPage // 1 * 4 = 4
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage // 4 - 4 = 0
  const slicedMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie)
  const numberOfPages = Math.ceil(movies.length / moviesPerPage);
  const handlePageChange = (newPage)=>{
    setSearchParams({page: newPage})
  }
  return (
    <div className="container">
      <h1>Azərbaycan Filmləri</h1>
      <div className="albumsContainer">
        {slicedMovies.map((movie) => (
          <div key={movie.id} className="movieDetails">
            <span>{movie.title}</span>
            <span>{movie.year}</span>
            <img src={movie.img} alt={movie.title} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="previous" onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
        <span> {currentPage} of {numberOfPages} </span>
        <button className="next" onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===numberOfPages}>Next</button>
      </div>
    </div>
  );
}

export default App;

