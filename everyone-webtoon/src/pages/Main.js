import React from "react";

const Main = ({providerData}) => {
  const randomWebtoon = () => {
    const randomNumber =
      providerData[Math.floor(Math.random() * 3)].webtoons[
        Math.floor(Math.random() * 25)
      ];
    return randomNumber;
  };
  const selectedWebtoon = randomWebtoon();

  return (
    <div className="Main">
      <div className="main-img">
        <img src={selectedWebtoon.img} alt="main-webtoon-img" />
      </div>
      <div className="info-box">
        <div className="main-img-box">
          <h2>title</h2>
          <p>{selectedWebtoon.title}</p>
        </div>
        <div className="main-info-box">
          <div className="main-author">
            <span>{selectedWebtoon.author}</span>
          </div>
          <div className="main-platform">
            <span>{selectedWebtoon.service}</span>
          </div>
          <div className="main-day">
            <span>{selectedWebtoon.updateDays}</span>
          </div>
          <div className="main-link">
            <a href={selectedWebtoon.url} target="_blank">
              <span>보러 가기</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// 헤더 만들기(검색 기능)
// 플랫폼 별 목록 나열
