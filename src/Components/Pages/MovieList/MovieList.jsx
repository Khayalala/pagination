import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../../../../api";
import { Pagination, HomeBtn } from "../../UI/index";
import "./MovieList.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const searchTerm = searchParams.get("search") || "";
  const moviesPerPage = 4;

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginateMovies = (movies, page, perPage) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return movies.slice(startIndex, endIndex);
  };

  const paginatedMovies = paginateMovies(
    filteredMovies,
    currentPage,
    moviesPerPage
  );

  const numberOfPages = Math.max(
    1,
    Math.ceil(filteredMovies.length / moviesPerPage)
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchParams({ search: query, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ search: searchTerm, page: newPage });
  };

  if (!movies.length) {
    return <h2>Loading movies...</h2>;
  }

  return (
    <div className="container">
      <HomeBtn />
      <h1>Azərbaycan Filmləri</h1>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Filmləri axtarın..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="albumsContainer">
        {paginatedMovies.length > 0 ? (
          paginatedMovies.map(({ id, title, year, img }) => (
            <div key={id} className="movieDetails">
              <span>{title}</span>
              <span>{year}</span>
              <img src={img} alt={title} />
            </div>
          ))
        ) : (
          <h3 className="no-results">❌ Axtarışa uyğun film tapılmadı!</h3>
        )}
      </div>

      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};
