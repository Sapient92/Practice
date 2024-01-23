import React from "react";
import DayButtons from "../components/DayButtons";
import Rows from "../components/Rows";
import {useLocation, useNavigate} from "react-router-dom";

const Main = ({providerData, handleButtonClick, dayData, todayWebToon}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const randomWebtoon = () => {
    const randomNumber =
      providerData[Math.floor(Math.random() * 3)].webtoons[
        Math.floor(Math.random() * 25)
      ];
    return randomNumber;
  };
  const selectedWebtoon = randomWebtoon();

  const handleImgClick = (event) => {
    const id = event.target.id;
    navigate(`/detail/${id}`, {state: [selectedWebtoon]});
  };

  return (
    <div className="Main">
      <div className="main-img">
        <img
          onClick={handleImgClick}
          id={selectedWebtoon._id}
          src={selectedWebtoon.img}
          alt="main-webtoon-img"
        />
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
            <a href={selectedWebtoon.url} target="blank">
              <span>보러 가기</span>
            </a>
          </div>
        </div>
      </div>
      <DayButtons handleButtonClick={handleButtonClick} dayData={dayData} />
      <Rows todayWebToon={todayWebToon} />
    </div>
  );
};

export default Main;
