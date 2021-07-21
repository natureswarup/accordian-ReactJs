import React, { useState, useEffect } from "react";

import Question from "./Question";
import data from "./data";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div>
        {questions.map((question) => {
          const { id, title, info } = question;
          return <Question key={id} {...question} />;
        })}
      </div>
    </>
  );
};

export default Questions;
