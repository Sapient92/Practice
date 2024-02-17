import React from "react";

const SubmitButton = ({ handleSubmit, type }) => {
  return (
    <div>
      <button type={type} onClick={handleSubmit}>
        작성완료
      </button>
    </div>
  );
};

export default SubmitButton;
