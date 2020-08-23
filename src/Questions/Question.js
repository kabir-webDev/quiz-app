import React from "react";
import "./Question.css";

const Button = ({ answer, className }) => (
  <button className={`option_style ${className}`}>{answer}</button>
);

function Question({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div>
      <div className="container">
        <span className="question_section">
          <h2
            className="question"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </span>
        <div>
          <Button
            className={correct_answer === shuffledAnswer[0] ? "purp" : ""}
            onClick={() => handleAnswer(shuffledAnswer[0])}
            answer={shuffledAnswer[0]}
          />
          <Button
            className={correct_answer === shuffledAnswer[1] ? "purp" : ""}
            onClick={() => handleAnswer(shuffledAnswer[1])}
            answer={shuffledAnswer[1]}
          />
          <Button
            className={correct_answer === shuffledAnswer[2] ? "purp" : ""}
            onClick={() => handleAnswer(shuffledAnswer[2])}
            answer={shuffledAnswer[2]}
          />
          <Button
            className={correct_answer === shuffledAnswer[3] ? "purp" : ""}
            onClick={() => handleAnswer(shuffledAnswer[3])}
            answer={shuffledAnswer[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
