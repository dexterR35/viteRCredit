const QuizButton = ({ onClick, className, text }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default QuizButton;
