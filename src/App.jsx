import { useEffect, useState } from "react";
import { fetchMovies } from "../api";
import { useSearchParams } from "react-router-dom";
import "./App.css";
import { Pagination } from "./Pagination";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const moviesPerPage = 4;
  const indexOfLastMovie = currentPage * moviesPerPage; // 1 * 4 = 4
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; // 4 - 4 = 0
  const slicedMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const numberOfPages = Math.ceil(movies.length / moviesPerPage);
  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };
  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);

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
        <Pagination handlePageChange={handlePageChange} currentPage={currentPage} numberOfPages={numberOfPages}/>
    </div>
  );
}

export default App;