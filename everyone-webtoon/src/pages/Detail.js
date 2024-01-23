import React from "react";
import {useLocation} from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const selectedData = location.state;

  return (
    <div className="Detail">
      <div className="Detail-box">
        <img src={selectedData[0].img} alt="selcted-webtoon" />
        <div className="name-box">
          <p>제목: {selectedData[0].title}</p>
          <span>작가: {selectedData[0].author}</span>
          <div className="detail-link">
            <a href={selectedData[0].url} target="_blank">
              웹툰 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
