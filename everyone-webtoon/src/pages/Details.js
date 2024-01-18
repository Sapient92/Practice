import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const handleClick = (event) => {
    const id = event.target.id;
    const selectedImg = data.filter((data) => data._id === id);
    navigate(`/detail/${id}`, {state: selectedImg});
  };

  if (data.length <= 0) {
    return <div>검색 결과가 없습니다</div>;
  } else {
    return (
      <div className="Details">
        <h2>검색 결과</h2>
        <div className="search-result">
          {data.map((data) => (
            <div
              onClick={(event) => handleClick(event)}
              className="box"
              key={data._id}
            >
              <img id={data._id} src={data.img} alt="search-result-img" />
              <p id={data._id}>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Details;
