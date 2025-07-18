const BonusModalBanner = ({ visible, onCTAClick, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-8 z-50 bg-green-500 text-white rounded-lg shadow-lg p-5 max-w-xs w-full flex flex-col sm:flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <div className=" leading-6 font-semibold my-4 text-center">
        <p>
          Ești aici acum?
        </p>
        <p> Te putem rezolva mai repede cu creditul!</p>
      </div>
      <button
        onClick={onCTAClick}
        className="btn bg-white text-green-600 hover:bg-gray-100 font-bold rounded px-4 py-2 whitespace-nowrap "
      >
        Obține Credit
      </button>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-300 text-xl font-bold absolute top-3 right-4"
        aria-label="Închide"
      >
        ×
      </button>
    </div>
  );
};

export default BonusModalBanner;
