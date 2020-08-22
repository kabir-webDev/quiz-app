import React, { useEffect } from "react";
import "./Question.css";
import { useState } from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

function Question() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results);
      });
  }, []);

  return (
    <div className="container">
      <span className="question_section">
        <h2 className="question">This is the question Section.</h2>
      </span>
      <div>
        <button className="option_style">Option A</button>
        <button className="option_style">Option B</button> <br />
        <button className="option_style">Option C</button>
        <button className="option_style">Option D</button>
      </div>
    </div>
  );
}

export default Question;
