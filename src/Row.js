import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseurl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    const playingNow = document.querySelector("div.playing-now");
    if (trailerUrl && playingNow) {
      playingNow.classList?.remove("playing-now");
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      const movie_player = document.querySelector(
        `#${title.toLowerCase().split(" ").join("-")}`
      );
      if (movie_player) {
        movie_player.classList.add("playing-now");
      }
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {/* title */}
      <h2 className="row_titles">{title}</h2>
      {/* containers */}
      <div className="row_posters">
        {movies.map((movie) => (
          <div className="row_card">
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${baseurl}${
                isLargeRow ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            ></img>
          </div>
        ))}
      </div>
      <div
        className="movie_player"
        id={title.toLowerCase().split(" ").join("-")}
      >
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
