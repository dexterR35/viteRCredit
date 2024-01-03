const QuizButton = ({ onClick }) => {
  return (
    <button
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-400 text-gray-800 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-300 hover:text-gray-700 transition-all hover:shadow-green"
      onClick={onClick}
    >
      Cere Oferta
    </button>
  );
};

export default QuizButton;
