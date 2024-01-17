import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
const optionBox = [
  { label: "Dețin raport negativ", value: true },
  { label: "Nu dețin raport negativ", value: false },
];

const Step2 = ({ stepChange, name }) => {
  const [isChecked, setIsChecked] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    setIsCheckboxChecked(true);
  };
  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 18 ? "Bună ziua" : "Bună seara";
  };
  const handleDecision = () => {
    if (isChecked === true) {
      stepChange(4);
    } else if (isChecked === false) {
      stepChange(3);
    }
  };
  return (
    <div className="py-8">
      <p className="p-title flex flex-col gap-1">
        <span>{getGreeting()}</span>
        <span className="capitalize">{name}</span>
      </p>
      <div className="p-custom text-start">
        Eu sunt Gabriela, consultantul tău online cu o experientă de peste 6 ani
        in domeniu. Te voi indruma să găsim cele mai bune soluții pentru nevoile
        tale de la obținerea unui credit nou, până la refinanțarea creditelor
        existente sau chiar eliminarea istoricului negativ din Biroul de Credit.
      </div>
      <p className="p-custom mt-6">
        Însă, înainte de a a găsi o solutie, m-ar interesa să aflu câteva
        detalii esențiale de la dumneavoastă.
      </p>

      <p className="p-question">
        Ești raportat negativ <br /> in Biroul de credit?
      </p>

      <div className="flex gap-4 w-full mt-6">
        {optionBox.map((option) => (
          <label
            key={option.label}
            className="flex p-3 w-full justify-between bg-white border border-gray-500 rounded-lg text-sm"
          >
            <span className="text-sm text-gray-800 w-[80%]">
              {option.label}
            </span>
            <span className="relative">
              <input
                type="checkbox"
                checked={isChecked === option.value}
                onChange={() => handleCheckboxChange(option.value)}
                className="p-0 mt-0.5 border-gray-400 rounded disabled:opacity-50 disabled:pointer-events-none checked:bg-primary checked:border-primary w-6 h-6"
              />
              {isChecked === option.value && (
                <div className="absolute top-[-6px] left-0 w-full h-full flex items-center justify-center">
                  <IoCheckmarkSharp className="text-white font-fold w-5 h-5" />
                </div>
              )}
            </span>
          </label>
        ))}
      </div>

      <div className="btn-parent">
        <button
          className={`btn-sm w-full ${!isCheckboxChecked ? "bg-gray-300" : ""}`}
          onClick={handleDecision}
          disabled={!isCheckboxChecked}
        >
          Continuă
        </button>
      </div>
    </div>
  );
};

export default Step2;
