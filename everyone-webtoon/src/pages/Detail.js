import React from "react";
import {useLocation} from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const selectedData = location.state;
  console.log(selectedData);
  return (
    <div>
      <div>
        <img src={selectedData[0].img} alt="selcted-webtoon" />
        <p>{selectedData[0].title}</p>
        <span>{selectedData[0].author}</span>
        <a href={selectedData[0].url} target="_blank">
          더보기
        </a>
      </div>
    </div>
  );
};

export default Detail;
