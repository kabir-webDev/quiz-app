import React from "react";
import "./App.css";
import Header from "./Header/Header";
import { useState, useEffect } from "react";
import Question from "./Questions/Question";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        console.log(questions);
      });
  }, []);

  const handleAnswer = (answer) => {};

  return questions.length > 0 ? (
    <div className="App">
      <Header />
      <Question data={questions[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h1 className="App">Loading...</h1>
  );
}

export default App;
