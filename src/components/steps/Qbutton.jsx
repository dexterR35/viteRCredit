import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const QuizButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 px-5 text-md text-gray-400 absolute rounded-md right-0 top-0 z-20"
    >
      <IoCloseOutline />
    </button>
  );
};

export default QuizButton;
