import React from "react";

const DayButtons = ({dayData, handleButtonClick}) => {
  return (
    <ul className="DayButtons">
      {dayData.map((data) => (
        <li
          onClick={(e) => handleButtonClick(e.target.className)}
          className={`${data.value}`}
          key={data.id}
        >
          {data.name}
        </li>
      ))}
    </ul>
  );
};

export default DayButtons;
