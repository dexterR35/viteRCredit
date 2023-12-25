// QuizButton.js
import { useState } from "react";
import Quiz from "./startQuiz";

const QuizButton = () => {
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const showQuiz = () => {
    console.log("Showing Quiz");
    setIsQuizVisible(true);
  };

  const hideQuiz = () => {
    console.log("Hiding Quiz");
    setIsQuizVisible(false);
  };
  return (
    <>
      <button onClick={showQuiz} className="btn-sm absolute right-0 z-20">
        Open Quiz
      </button>
      {isQuizVisible && (
        <Quiz onClose={hideQuiz} isQuizVisible={isQuizVisible} />
      )}
    </>
  );
};

export default QuizButton;
