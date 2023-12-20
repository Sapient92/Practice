import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal/MovieModal";

export default function Row({ title, fetchUrl, isLargeRow, id }) {
  const [Movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  console.log("movieSelected", movieSelected);

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    console.log(request);
    return request;
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <div>
      <section className="row">
        {/* TITLE */}
        <h2>{title}</h2>
        <div className="slider">
          <div className="slider__arrow-left">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft -=
                  window.innerWidth - 80;
              }}
            >
              {"<"}
            </span>
          </div>
          <div id={id} className="row__posters">
            {/* SEVERAL ROW_POSTER */}
            {Movies.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                loading="lazy"
                alt={movie.name}
              />
            ))}
          </div>
          <div className="slider__arrow-right">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft +=
                  window.innerWidth - 80;
              }}
            >
              {">"}
            </span>
          </div>
        </div>

        {modalOpen && (
          <MovieModal setModalOpen={setModalOpen} {...movieSelected} />
        )}
      </section>
    </div>
  );
}
