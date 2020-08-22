import React from "react";
import "./App.css";
import Header from "./Header/Header";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
