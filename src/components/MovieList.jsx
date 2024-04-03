import MovieRow from "./MovieRow";
import cartoon from "../images/cartoon.png";
import './MovieList.css'
const movieMap = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export default function MovieList() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div className="movieListContainer">
      <div className="headingInfo">
        <div className="entertainment">
          <h1 className="app">Super App</h1>
          <p className="paraInfo">Entertainment according to your choice</p>
        </div>
        <img className="usericon" src={cartoon} alt="" />
      </div>

      {movies.map((movie) =>
        movieMap.map((obj) => {
          if (obj.name === movie) {
            return <MovieRow key={movie} genre={obj} />;
          }
        })
      )}
    </div>
  );
}
