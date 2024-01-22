import React from "react";

const Rows = ({todayWebToon}) => {
  const naverWebtoons = todayWebToon[0].webtoons;
  const kakaoWebtoons = todayWebToon[1].webtoons;
  const kakaoPageWebtoons = todayWebToon[2].webtoons;
  return (
    <ul className="Rows">
      <li>
        <h2>네이버</h2>
        <div className="img-box">
          {naverWebtoons.map((data) => (
            <div key={data.id} className="box">
              <img src={data.img} alt={data.title} />
              <br />
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </li>
      <li>
        <h2>카카오</h2>
        <div className="img-box">
          {kakaoWebtoons.map((data) => (
            <div key={data.id} className="box">
              <img src={data.img} alt={data.title} />
              <br />
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </li>
      <li>
        <h2>카카오 페이지</h2>
        <div className="img-box">
          {kakaoPageWebtoons.map((data) => (
            <div key={data.id} className="box">
              <img src={data.img} alt={data.title} />
              <br />
              <span>{data.title}</span>
            </div>
          ))}
        </div>
      </li>
    </ul>
  );
};

export default Rows;
