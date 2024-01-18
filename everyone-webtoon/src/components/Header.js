import React, {useState} from "react";
import {Search} from "../api/ComicApi";
import {useNavigate} from "react-router-dom";

const search = new Search();

const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchresult = await search.webToonSearch(value);
    const searchDetail = await searchresult.webtoons;
    console.log(searchDetail);
    navigate(`/details/${value}`, {state: [...searchDetail]});
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="Header">
      <button onClick={() => handleHomeClick()}>홈으로 가기</button>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
          placeholder=" 웹툰을 찾아 보세요."
        />
      </form>
    </div>
  );
};

export default Header;
