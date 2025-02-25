import axios from "axios";
export const fetchMovies = async () => {
  return axios
    .get("http://localhost:5001/movies")
    .then((response) => response.data)
    .catch((err) => console.log("Error fetching photos", err));
};
