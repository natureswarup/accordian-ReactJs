import React, { useState, useEffect } from "react";

const Question = (props) => {
  const { id, title, info } = props;
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="question">
        <div className="itm">
          <h5>{title}</h5>
          <div className="icon" onClick={() => setExpand(!expand)}>
            {expand ? "-" : "+"}
          </div>
        </div>
        <div className="info">{expand ? info : ""}</div>
      </div>
    </>
  );
};

export default Question;
