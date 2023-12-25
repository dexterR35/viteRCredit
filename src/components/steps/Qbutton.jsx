// QuizButton.js
import { useState } from "react";
import Quiz from "../startQuiz";

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
      <button
        onClick={showQuiz}
        className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none"
      >
        Obtine Credit
      </button>
      {isQuizVisible && (
        <Quiz onClose={hideQuiz} isQuizVisible={isQuizVisible} />
      )}
    </>
  );
};

export default QuizButton;
