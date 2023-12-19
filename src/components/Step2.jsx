import { useState } from "react";
const Step2 = ({ handleStepChange }) => {
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
      handleStepChange(3);
    }
  };
  return (
    <div className="py-8">
      <p className="p-title">
        Buna ziua <br /> Marian
      </p>
      <p className="p-custom">
        Eu sunt Gabriela, consultantul tău online cu o experientă de peste 6 ani
        in domeniu. Te voi indruma să găsim cele mai bune soluții pentru nevoile
        tale de la obținerea unui credit nou, până la refinanțarea creditelor
        existente sau chiar eliminarea istoricului negativ din Biroul de Credit.
      </p>
      <p className="p-custom mt-6">
        Însă, înainte de a a găsi o solutie, m-ar interesa să aflu câteva
        detalii esențiale de la dumneavoastă.
      </p>

      <p className="p-question">
        Ești raportat negativ <br /> in Biroul de credit?
      </p>

      <div className="flex gap-4 w-full mt-6">
        <label className="flex p-3 w-full justify-between bg-white border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
          <span className="text-sm text-gray-500">
            Detin raport <br /> negativ
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
            Nu detin raport <br /> negativ
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
          className={`btn-sm w-full ${!isCheckboxChecked ? "bg-gray-200" : ""}`}
          onClick={handleDecision}
          disabled={!isCheckboxChecked}
        >
          Continua
        </button>
      </div>
    </div>
  );
};

export default Step2;
