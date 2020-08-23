import React from "react";

const Button = ({ answer }) => (
  <button className="option_style">{answer}</button>
);

function Question({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return <div></div>;
}

export default Question;
