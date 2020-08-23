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
            onCLick={() => handleAnswer(shuffledAnswer[0])}
            answer={shuffledAnswer[0]}
          />
          <Button
            onCLick={() => handleAnswer(shuffledAnswer[1])}
            answer={shuffledAnswer[1]}
          />
          <Button
            onCLick={() => handleAnswer(shuffledAnswer[2])}
            answer={shuffledAnswer[2]}
          />
          <Button
            onCLick={() => handleAnswer(shuffledAnswer[3])}
            answer={shuffledAnswer[3]}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
