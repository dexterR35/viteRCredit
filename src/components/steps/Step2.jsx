import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FcAssistant } from "react-icons/fc";
const optionBox = [
  {
    label: ["Dețin raport ", <br key="1" />, "negativ"],
    value: true,
  },
  {
    label: ["Nu dețin raport ", <br key="2" />, "negativ"],
    value: false,
  },
];

const Step2 = ({ stepChange, fName }) => {
  const [isChecked, setIsChecked] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    setIsCheckboxChecked(true);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Bună dimineața";
    } else if (hour < 18) {
      return "Bună ziua";
    } else {
      return "Bună seara";
    }
  };

  const handleDecision = () => {
    if (isChecked === true) {
      stepChange(4);
    } else if (isChecked === false) {
      stepChange(3);
    }
  };
  return (
    <div className="py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {getGreeting()},{" "}
            <span className="capitalize bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {fName}
            </span>
          </h2>
        </div>

        <div className="card-modern p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-medium">
              <FcAssistant className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Eu sunt Gabriela
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Consultantul tău online cu o experiență de peste 6 ani în domeniu. Te
                voi îndruma să găsim cele mai bune soluții pentru nevoile tale de la
                obținerea unui credit nou, până la refinanțarea creditelor existente sau
                chiar eliminarea istoricului negativ din Biroul de Credit.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <p className="text-sm text-gray-700 leading-relaxed">
            Însă, înainte de a găsi o soluție, m-ar interesa să aflu câteva
            detalii esențiale de la dumneavoastră.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 text-center">
            Ești raportat negativ în Biroul de credit?
          </h3>

          <div className="grid grid-cols-1 gap-4 mt-6">
            {optionBox.map((option, index) => (
              <label
                key={index}
                className={`relative flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  isChecked === option.value
                    ? "bg-gradient-to-br from-primary-50 to-primary-100 border-primary-500 shadow-medium scale-105"
                    : "bg-white border-gray-300 hover:border-primary-300 hover:shadow-soft"
                }`}
              >
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-900 block">
                    {option.label}
                  </span>
                </div>
                <div className="relative flex-shrink-0 ml-4">
                  <input
                    type="checkbox"
                    checked={isChecked === option.value}
                    onChange={() => handleCheckboxChange(option.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
                      isChecked === option.value
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 border-primary-600"
                        : "bg-white border-gray-400"
                    }`}
                  >
                    {isChecked === option.value && (
                      <IoCheckmarkSharp className="text-white w-5 h-5" />
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            className={`btn-sm w-full ${
              !isCheckboxChecked
                ? "!bg-gray-400 !text-white cursor-not-allowed hover:!scale-100 hover:!shadow-medium hover:!from-gray-400 hover:!to-gray-400"
                : ""
            }`}
            onClick={handleDecision}
            disabled={!isCheckboxChecked}
          >
            Continuă
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
