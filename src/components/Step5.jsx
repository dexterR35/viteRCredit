// import Check from "../components/Check";
import { useState } from "react";
const Step5 = ({ handleStepChange }) => {
  const [isChecked, setIsChecked] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (value) => {
    setIsChecked(value);
    setIsCheckboxChecked(true);
  };

  const handleDecision = () => {
    if (isChecked === true) {
      handleStepChange(4);
    } else if (isChecked === false) {
      handleStepChange(6);
    }
  };
  return (
    <div className="py-8">
      <p className="p-title">Stiati ca !?</p>
      <p className="p-custom">
        Creditele bancare au apărut încă din antichitate, când bancherii
        furnizau finanțare pentru comerț și afaceri. În Evul Mediu, băncile au
        oferit împrumuturi pentru a finanța construcția de clădiri și alte
        proiecte.
      </p>
      <p className="p-question mt-6 w-[90%] mx-auto">
        Detine-ți istoric bancar sau credite in prezent?
      </p>
      <div className="flex gap-4 w-full mt-6">
        <label className="flex p-3 w-full justify-between bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
          <span className="text-sm text-gray-500">
            Detin istoric <br /> bancar
          </span>
          <input
            type="checkbox"
            checked={isChecked === true}
            onChange={() => handleCheckboxChange(true)}
            className="p-0 mt-0.5 border-gray-400 rounded focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  checked:bg-primary checked:border-primary w-8 h-8"
          />
        </label>

        <label className="flex p-3 w-full justify-between bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
          <span className="text-sm text-gray-500 ">
            Nu detin istoric <br /> bancar
          </span>
          <input
            type="checkbox"
            checked={isChecked === false}
            onChange={() => handleCheckboxChange(false)}
            className="p-0 mt-0.5 border-gray-400 rounded focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  checked:bg-primary checked:border-primary w-8 h-8"
          />
        </label>
      </div>
      <div className="btn-parent">
        <button
          className={`btn-sm w-full ${!isCheckboxChecked ? "bg-gray-300" : ""}`}
          onClick={handleDecision}
          disabled={!isCheckboxChecked}
        >
          Continua
        </button>
      </div>
    </div>
  );
};

export default Step5;
