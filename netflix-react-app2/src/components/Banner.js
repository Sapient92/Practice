import axios from "./api/axios";
import requests from "./api/requests";
import React, {useEffect, useState} from "react";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  // 배너로 사용할 이미지 정보 가져오기
  // 영화 리스트 객체를 담을 스테이트를 만든다.
  const [movie, setMovie] = useState([]);

  // play 버튼 클릭시 비디오로 전환 하기 위해 스테이트 생성
  const [isClicked, setIsClicked] = useState(false);

  // 컴포넌트가 마운트 될 때 한번만 실행한다.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 가져온 여러 영화중 하나의 영화 ID를 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    // 서버로부터 받은 응답에서 data필드를 movieDetail이라는 이름으로 함
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: "videos"},
    });
    setMovie(movieDetail);
  };

  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          {/* title */}
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          {/* 버튼 2개 */}
          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              play
            </button>
            <button className="banner__button info">
              <div className="space"></div>More Information
            </button>
          </div>
          {/* Description */}
          <h1 className="banner__description">
            {/* 옵셔널 체이닝 연산자 ?.사용 */}
            {movie?.overview}
          </h1>
        </div>
        {/* 이 태그는 무슨 역할을 하는거지?? */}
        <div className="banner--fadeBottom" />
      </header>
    );
  }
  return (
    <Container>
      <HomeContainer>
        <Iframe
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
          frameborder="0"
          allow="autoplay; fullscreen"
        ></Iframe>
      </HomeContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
