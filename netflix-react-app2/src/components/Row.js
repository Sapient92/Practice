import axios from "./api/axios";
import React, {useEffect, useState} from "react";
import "./Row.css";
import MovieModal from "./MovieModal/index";

const Row = ({id, title, fetchUrl, isLargeRow}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  // 필요한 정보 가져오기
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  };

  return (
    <section className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {/* SEVERAL ROW__POSTER */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              alt={movie.name}
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
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
  );
};

export default Row;
