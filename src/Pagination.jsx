import "./App.css";

export const Pagination = ({handlePageChange, currentPage, numberOfPages, }) => {

  return (
    <div className="pagination">
      <button
        className="previous"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        {" "}
        {currentPage} of {numberOfPages}{" "}
      </span>
      <button
        className="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === numberOfPages}
      >
        Next
      </button>
    </div>
  );
};
