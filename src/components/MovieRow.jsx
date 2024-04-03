import './MovieRow.css';
import { useEffect, useState } from "react";
export default function MovieRow({ genre }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmE0MTU2ZmQ2MTQ3NWEyZDNiZDdkNThkNjMwMWRkOSIsInN1YiI6IjY0MDhmMmQ1MDNmMGI2MDBlOWIwMGU5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fynkjlrA3ndCcSC-gukTQs78CTQtKFqpFgrzHnSXQTw",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json.results))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className='genesContainer'>
      <p
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          paddingLeft:"2rem",
          paddingRight:"2rem",
        }}
      >
        {genre.name}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft:"2rem",
          paddingRight:"2rem",
          paddingBottom:"1rem",
          marginTop:"10px",
        }}
      >
        {movies.map((movies, index) => {
          return index >= 4 ? (
            <></>
          ) : (
            <div
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div style={{ objectFit: "cover" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                  alt={movies.title}
                  style={{width:"240px",height:"160px",borderRadius:"10px"}}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}