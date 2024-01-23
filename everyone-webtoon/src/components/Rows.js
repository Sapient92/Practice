import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Rows = ({todayWebToon}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const naverWebtoons = todayWebToon[0].webtoons;
  const kakaoWebtoons = todayWebToon[1].webtoons;
  const kakaoPageWebtoons = todayWebToon[2].webtoons;

  const handleImgClick = (event) => {
    const id = event.target.id;
    const clickedData = todayWebToon
      .map((data) => data.webtoons.filter((data) => data._id === id))
      .flat();

    navigate(`/detail/${id}`, {state: clickedData});
  };

  if (naverWebtoons && kakaoWebtoons && kakaoPageWebtoons) {
    return (
      <ul className="Rows">
        {naverWebtoons && (
          <li>
            <h2>네이버</h2>
            <div className="img-box">
              {naverWebtoons.map((data) => (
                <div key={data._id} className="box">
                  <img
                    onClick={handleImgClick}
                    id={data._id}
                    src={data.img}
                    alt={data.title}
                  />
                  <br />
                  <span>{data.title}</span>
                </div>
              ))}
            </div>
          </li>
        )}
        {kakaoWebtoons && (
          <li>
            <h2>카카오</h2>
            <div className="img-box">
              {kakaoWebtoons.map((data) => (
                <div key={data._id} className="box">
                  <img
                    onClick={handleImgClick}
                    id={data._id}
                    src={data.img}
                    alt={data.title}
                  />
                  <br />
                  <span>{data.title}</span>
                </div>
              ))}
            </div>
          </li>
        )}
        {kakaoPageWebtoons && (
          <li>
            <h2>카카오 페이지</h2>
            <div className="img-box">
              {kakaoPageWebtoons.map((data) => (
                <div key={data._id} className="box">
                  <img
                    onClick={handleImgClick}
                    id={data._id}
                    src={data.img}
                    alt={data.title}
                  />
                  <br />
                  <span>{data.title}</span>
                </div>
              ))}
            </div>
          </li>
        )}
      </ul>
    );
  }
};

export default Rows;
