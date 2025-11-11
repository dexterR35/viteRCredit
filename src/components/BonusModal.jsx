import { FaPhoneAlt } from "react-icons/fa";

const BonusModalBanner = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-8 z-50 bg-primary text-white rounded-lg shadow-lg p-6 max-w-xs w-full flex flex-col items-center space-y-4">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-white hover:text-primary-200 text-2xl font-bold focus:outline-none"
        aria-label="Închide"
      >
        &times;
      </button>

      <div className="text-center font-semibold leading-tight space-y-1">
        <p className="text-lg">Ești aici acum?</p>
        <p className="text-sm opacity-90">Te putem rezolva mai repede cu creditul!</p>
      </div>

      <a
        href="tel:0786744694"
        className="flex items-center justify-center gap-2 bg-white text-primary font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-gray-100 transition-colors duration-200 w-full max-w-xs"
      >
        <FaPhoneAlt className="w-5 h-5" />
        Sună acum
      </a>
    </div>
  );
};

export default BonusModalBanner;
